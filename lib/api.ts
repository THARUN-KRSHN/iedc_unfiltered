
// This URL will be replaced by the user after deployment
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUB_xKpqviZFMwe-8geTbYJ1APVkf1A09KFBKQ3GXY2qDq0QxUfPj1YT4xc_lb9GHE6g/exec";

export async function submitMessage(memberName: string, message: string) {
    console.log("Submitting to:", GOOGLE_SCRIPT_URL);

    // Basic validation
    if (!memberName || !message) {
        console.error("Missing fields");
        return false;
    }

    try {
        // We'll use no-cors mode which is safer for GAS deployments that haven't been perfectly set up with OPTIONS handling.
        // It means we can't read the response JSON, so we just assume success if it doesn't throw.
        // This is often the most reliable way for simple "fire and forget" forms to Google Sheets.

        // We send data as URLSearchParams (application/x-www-form-urlencoded) which is standard for simple POSTs
        // and natively supported by GAS doPost(e.parameter)

        const formData = new URLSearchParams();
        formData.append('memberName', memberName);
        formData.append('message', message);

        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            body: formData,
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        // Since we used no-cors, we can't check response.ok or response.json()
        // We assume if fetch didn't throw (network error), it reached the server.
        return true;

    } catch (error) {
        console.error("Submission error:", error);
        return false;
    }
}
