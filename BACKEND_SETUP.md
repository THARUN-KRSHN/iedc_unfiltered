
# Google Apps Script Setup Instructions

This project uses Google Sheets as a database and Google Apps Script as the API backend.

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it **"Excom Unfiltered Responses"**.
3. In **Row 1**, add the names of all Excom members as column headers.
   **IMPORTANT:** The names must match exactly what is in the frontend code.
   
   Copy paste these into Row 1 (A1, B1, C1...):

   `Abin Stanislaus`, `Ayswarya E S`, `Alfred Anto`, `Farhan M Jeejo`, `Kshithij V R`, `Tharun Krishna C U`, `Gibin C Jijo`, `Parvathy Dilip`, `Ann Johnson`, `Savio Jerry`, `Jewel E J`, `H Athila`, `Abhinand Venugopal`, `Sidharth S Menon`, `Patricia Paul`, `Hridya`, `Edwin Shaju Malakaran`, `Sooryakrishna P R`, `Anna Shaju`, `Agnes Shanoj`, `Iris Wilson`, `Pranaya`, `Goury Shankar`, `Mishael Mathew`

## Step 2: Create the Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete any code in `Code.gs` and paste the code below:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var postData;
    
    // Check if we received JSON or FormData
    if (e.postData.type === "application/json") {
      postData = JSON.parse(e.postData.contents);
    } else {
       // Fallback for form-encoded
       // Actually in our fetch we might send stringified body but with text/plain header to avoid options.
       // So we try JSON parse first on contents.
       try {
          postData = JSON.parse(e.postData.contents);
       } catch (err) {
          // If not json, maybe parameters?
          postData = e.parameter;
       }
    }
    
    var memberName = postData.memberName;
    var message = postData.message;
    var timestamp = new Date();
    
    // Find the column for this member
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var columnIndex = -1;
    
    for (var i = 0; i < headers.length; i++) {
        if (headers[i] && memberName && headers[i].toString().trim().toLowerCase() === memberName.toString().trim().toLowerCase()) {
        columnIndex = i + 1; // 1-based index
        break;
      }
    }
    
    if (columnIndex === -1) {
      return ContentService.createTextOutput(JSON.stringify({
        "status": "error",
        "message": "Member column not found for: " + memberName
      })).setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
    }
    
    // Find next empty row in that specific column
    var lastRow = sheet.getMaxRows();
    var columnData = sheet.getRange(1, columnIndex, lastRow, 1).getValues();
    var nextRow = 1; // Default if empty
    
    // Scan down to find last non-empty cell. Optimization: scan from bottom up? 
    // Or just append to bottom of sheet if we want strict chronological?
    // User requested "Append message to next empty cell in that column".
    // This implies filling holes or stacking. Let's stack.
    
    for (var j = 0; j < columnData.length; j++) {
      if (columnData[j][0] === "" && j > 0) { // Found first empty slot after header
        nextRow = j + 1;
        break;
      }
    }
    
    // If somehow we didn't find an empty slot (sheet full?), force append at bottom using sheet methods
    // But getRange approach implies modifying specific cells.
    // If nextRow is still 1 (and header present), we go to 2.
    if (nextRow === 1 && columnData[0][0] !== "") {
       nextRow = 2;
    }
    
    // If the scanned range was full, we might need to insert a row or just go deeper?
    // For safety, let's just use the last row of the sheet + 1 if necessary, but that breaks the "independent columns" idea.
    // If "independent columns" means column A has 5 rows, Column B has 2 rows...
    // Spreadsheets are row-based. If Column A has 5 entries, Row 6 is empty for A.
    // If Column B has 2 entries, Row 3 is empty for B.
    // Yes, we found the first empty cell in that column.
    
    sheet.getRange(nextRow, columnIndex).setValue(message);
    sheet.getRange(nextRow, columnIndex).setNote("Submitted: " + timestamp);
    
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "row": nextRow
    })).setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
    
  } catch (e) {
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": e.toString()
    })).setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
    
  } finally {
    lock.releaseLock();
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

## Step 3: Deploy

1. Click **Deploy** > **New Deployment**.
2. Click the gear icon > **Web App**.
3. Enter description: "v1".
4. **Execute as: Me** (your email).
5. **Who has access: Anyone** (Essential for the public site to work).
6. Click **Deploy**.
7. Copy the **Web App URL**.

## Step 4: Connect to Frontend

1. Open `src/lib/api.ts` in your code.
2. Replace the `GOOGLE_SCRIPT_URL` value with your new Web App URL.
3. Save and deploy your frontend to Vercel.
