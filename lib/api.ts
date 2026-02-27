// This URL will be replaced by the user after deployment
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwU9VwF8iJ7p1vC2kUo9tE1A0wF8iJ7p1vC2kUo9tE1A0wF8iJ7p1vC2kUo9tE1A0/exec";

import { supabase } from './supabase';

export async function submitMessage(memberName: string, message: string) {
    console.log("Submitting to:", GOOGLE_SCRIPT_URL, "and Supabase");

    // Basic validation
    if (!memberName || !message) {
        console.error("Missing fields");
        return false;
    }

    try {
        // 1. Submit to Supabase
        const { error: supabaseError } = await supabase
            .from('confessions')
            .insert([
                { member_name: memberName, message: message }
            ]);

        if (supabaseError) {
            console.error("Supabase submission error:", JSON.stringify(supabaseError, null, 2));
            // We might still want to try Google Sheets even if Supabase fails, or vice versa.
            // For now, let's log it and continue to try Google Sheets.
        }

        // 2. Submit to Google Sheets
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

        return true;

    } catch (error) {
        console.error("Submission error:", error);
        return false;
    }
}
