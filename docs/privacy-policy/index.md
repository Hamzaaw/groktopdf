# Privacy Policy for Grok to PDF

**Effective Date:** April 27, 2024

Thank you for using **Grok to PDF** (the “Extension”). Your privacy is our top priority. This policy explains what data the Extension accesses and how it’s handled.

---

## 1. Information We Access (Locally Only)

*   **Grok Chat Content:**
    To perform its core function of exporting conversations, the Extension needs to access the content of the Grok chat page you are currently viewing **when you explicitly initiate an export action** (clicking "Export Entire Chat" or activating "Select Messages" mode). This includes the text, code blocks, mathematical notation (LaTeX), and general HTML structure of the messages displayed on the page.
    *   This access and all processing happen **entirely within your browser on your local device.**
    *   **Your Grok chat content is NEVER transmitted, collected, stored, or logged by us or any third party through this Extension.** It is only read temporarily by the code running in your browser to generate the export file you requested.

*   **User Settings:**
    When you configure export preferences in the Extension's settings panel (such as default filename, preferred export format, PDF options), these settings are saved **locally on your device** using the standard `chrome.storage.local` API provided by your browser.
    *   **We do not collect, transmit, or have access to these stored settings.** They are solely for your convenience to remember your preferences between sessions.
    *   **No chat content or personal data is ever saved in this local storage.**

---

## 2. Information Collection, Use, and Sharing

*   **No Data Collection or Transmission:**
    In its current version (v1.0), the Extension **does not collect or transmit any personal data, chat content, or usage statistics** to us or any third party. All functionality occurs locally within your browser.
*   **No External Services:**
    The Extension currently makes **no network requests** to external services (like analytics or licensing servers).

---

## 3. Data Security & Retention

*   **Local Processing:**
    As all processing occurs locally, the security of your data primarily relies on the security of your own device and browser.
*   **Chat Content:**
    Chat content read for export is handled ephemerally and is **not retained** by the Extension after the export process.
*   **Local Settings:**
    Your export settings remain stored locally in your browser until you clear your browser's storage for the Extension or uninstall the Extension.

---

## 4. Your Choices

*   You can choose which messages to export using the "Select Messages" feature.
*   You can configure your export settings.
*   You can clear the Extension's local storage via your browser's extension management settings (this will reset your saved preferences).
*   You can uninstall the Extension at any time, which removes all its components and locally stored settings data.

---

## 5. Future Features & Policy Updates

*   We may add optional features in the future, such as anonymous usage analytics (opt-in) or premium license options, which might require additional permissions (like access to `google-analytics.com` or `api.gumroad.com`).
*   If such features are added, the Extension's manifest will be updated to include the necessary `optional_host_permissions`. Any such data collection or external communication will **only occur if you explicitly opt-in or activate the feature** and grant the requested permission at that time.
*   This Privacy Policy will be updated accordingly before such changes are released. We encourage you to review this policy periodically. Significant changes will be noted via the Extension's store listing or other appropriate means.

---

## 6. Children's Privacy

The Extension is not intended for use by children under the age of 13 (or the relevant age in your jurisdiction), and we do not knowingly collect any personal information from children.

---

## 7. Your Data Protection Rights (e.g., GDPR/CCPA)

Since this Extension (v1.0) does not collect or transmit personal data about you, rights related to accessing, correcting, or deleting personal data held by us are generally not applicable. If you contact us directly (e.g., via email for support), standard data protection rights apply to that communication as outlined by applicable law.

---

## 8. Contact Us

If you have any questions about this Privacy Policy, please contact us at: **hamzaw31@gmail.com**.

---
