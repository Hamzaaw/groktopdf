
# Privacy Policy for Grok to PDF

**Effective Date:** April 27, 2025

Thank you for using **Grok to PDF** (the “Extension”). Your privacy is our top priority. This policy explains what data we access, how (and where) it’s handled, and the choices you have.

---

## 1. What We Access (Locally Only)

- **Grok Chat Content**  
  When you click **Export Entire Chat** or use **Select Messages**, the Extension reads only the visible text (including code blocks & LaTeX) on your Grok page.  
  **All processing happens in your browser**—we never transmit, store, or log any chat content on a server.

- **User Settings**  
  Your export preferences (filename, format, font size, margins, etc.) are saved locally via Chrome’s `chrome.storage.local` API.  
  We don’t collect, transmit, or have access to these settings—they stay on your device.

---

## 2. Optional, Anonymous Analytics (Opt-In Only)

Analytics are **off by default**. If you enable telemetry in Settings (when available), we’ll send **anonymized** event counts (e.g. “exports performed,” “formats chosen”) to Google Analytics via its Measurement Protocol:

- **No PII or chat data included.**  
- IPs are automatically anonymized (`anonymizeIp=true`).  
- You can toggle analytics off at any time.

Learn more about Google Analytics’ data practices:  
<https://policies.google.com/technologies/partner-sites>

---

## 3. Future Features & Permissions

We’ve declared—but do **not** request—these optional permissions in the manifest:

1. **Gumroad API (`https://api.gumroad.com/*`)**  
   – For future premium license checks only: we’ll ask for your permission before ever calling this.  
   – Any data exchange with Gumroad is subject to their privacy policy: <https://gumroad.com/privacy>.

2. **(No other external APIs or tracking scripts.)**

---

## 4. Information Sharing

We **do not** sell, rent, or share your chat content or personal settings.  
The only exceptions:

- **Google Analytics** (anonymized telemetry, if you opt in)  
- **Gumroad** (license verification, if you activate premium and grant permission)

We never use your data for advertising, credit scoring, or unrelated purposes.

---

## 5. Data Security & Retention

- **Chat Content:** Ephemeral—read only during export, never stored.  
- **Local Settings:** Persist in browser storage until you clear it or uninstall the Extension.  
- **Analytics & Licenses:** Held by third-parties under their own retention policies.  
- All network requests (GA or Gumroad) go over HTTPS.

---

## 6. Your Choices

- **Export Scope:** Pick exactly which messages to export.  
- **Settings:** Adjust or clear your preferences via your browser’s extension settings.  
- **Telemetry:** Enable or disable anonymous analytics at will.  
- **Uninstall:** Remove the Extension to clear all local data.

---

## 7. Children’s Privacy

Not intended for use by children under 13 (or your local equivalent). We do not knowingly collect data from minors.

---

## 8. Your Rights (GDPR/CCPA)

Depending on your jurisdiction, you may have rights to access, correct, or delete data held by Google Analytics or Gumroad. Please contact those services directly—or reach out to us if you need help identifying the right contact.

---

## 9. Changes to This Policy

We may update this policy from time to time. Significant changes will be reflected in the **Effective Date** and noted in the Extension’s release notes. Please review periodically.

---

## 10. Contact Us

Questions or concerns? Email us at **hamzaw31@gmail.com**.
