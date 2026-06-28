# 0.5 Auto Fill Form

A lightweight, fully client-side portal of **fillable government social-security scheme forms**. Fill a form on screen, let repeated fields auto-fill, validate the entries, then print or save as a single-page A4 PDF and sign by hand.

> **Workflow in one line:** Fill on screen → Print / Save PDF → Sign by hand → Submit at branch.

---

## Open the app

- **Live site: [https://jugaad-online.github.io/0.5-Auto-Form/](https://jugaad-online.github.io/0.5-Auto-Form/)**
- Or open locally: **[`index.html`](index.html)**

### Run locally

Two ways to launch:

1. **Quick (double-click):** open `index.html` in any modern browser.
2. **Recommended (local server):** some browsers restrict features over the `file://` protocol. To be safe, serve the folder over HTTP:

   ```bash
   # From the project folder
   python -m http.server 8000
   ```

   Then visit **http://localhost:8000/** in your browser.

No build step, no dependencies, no internet connection required — everything runs in the browser.

---

## Forms included

Each form is a **single self-contained HTML file** (HTML + CSS + JavaScript inlined). Click any **Open** link below to launch the form online on the live site.

| Scheme | Action | Open online |
|---|---|---|
| **Portal (home)** | All schemes | [Open `index.html`](https://jugaad-online.github.io/0.5-Auto-Form/) |
| Atal Pension Yojana (APY) | Registration | [Open `APY_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/APY_REG.html) |
| Atal Pension Yojana (APY) | Withdrawal / Voluntary exit | [Open `APY_WDL.html`](https://jugaad-online.github.io/0.5-Auto-Form/APY_WDL.html) |
| Atal Pension Yojana (APY) | Subscriber detail modification | [Open `APY_MOD.html`](https://jugaad-online.github.io/0.5-Auto-Form/APY_MOD.html) |
| Atal Pension Yojana (APY) | Death claim / spouse continuation | [Open `APY_DTH.html`](https://jugaad-online.github.io/0.5-Auto-Form/APY_DTH.html) |
| Pradhan Mantri Suraksha Bima Yojana (PMSBY) | Enrolment | [Open `PMSBY_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/PMSBY_REG.html) |
| Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) | Enrolment | [Open `PMJJBY_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/PMJJBY_REG.html) |
| Sukanya Samriddhi Yojana (SSY) | Account opening | [Open `SSY_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/SSY_REG.html) |
| Pradhan Mantri Jan-Dhan Yojana (PMJDY) | Account opening | [Open `PMJDY_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/PMJDY_REG.html) |
| National Pension System (NPS) | Registration (CSRF-1) | [Open `NPS_REG.html`](https://jugaad-online.github.io/0.5-Auto-Form/NPS_REG.html) |
| Income Tax Form No. 121 | Nil-TDS self-declaration | [Open `FORM121.html`](https://jugaad-online.github.io/0.5-Auto-Form/FORM121.html) |

### File naming convention

```
SCHEME_ACTION.html
```

| Suffix | Meaning |
|---|---|
| `_REG` | Registration / Enrolment / Account opening |
| `_WDL` | Withdrawal / Voluntary exit |
| `_MOD` | Modification of details |
| `_DTH` | Death claim |

Supporting assets: `index.html` (portal), `portal.css`, `portal.js`, `APY_LOGO.png` (PMJDY emblem used on the APY form).

---

## Features

- **Fillable on screen** with a layout that mirrors the official forms.
- **Type once, fill everywhere** — repeated fields (name, Aadhaar, account number, etc.) mirror automatically.
- **Live validation** — a floating **Validate** button checks formats (PAN, Aadhaar, IFSC, TAN, mobile, email, PIN) and dates, and highlights problems.
- **Mandatory-field check before printing** so incomplete forms aren't printed by accident.
- **Single-page A4 print** — tuned print styles keep each form on one page; a **Preview** button shows the print fit.
- **Auto-save** — entries persist in the browser via `localStorage`.
- **CSV import / export** — back up or reuse data as a simple CSV file.
- **Custom bank logo** — upload your branch/bank logo on supported forms.
- **Search** the portal by scheme name or keyword.

---

## How to use a form

1. From the portal, click **Fill … Form** for the scheme you need.
2. Enter your details. Repeated fields fill in automatically as you type.
3. Click the green **Validate** button (bottom-right) to check formats and dates.
4. Click **Preview** to confirm it fits on one A4 page.
5. Click **Print / PDF** — print to paper or choose “Save as PDF”.
6. **Sign and date the printed form by hand**, attach the required documents, and submit it at your bank/branch.

> Optional: use **Export CSV** to save your entries, and **Import CSV** later to refill the form.

---

## Data & privacy

- All data stays **on your device**. Nothing is uploaded or sent to any server.
- Auto-saved entries are kept in your browser’s `localStorage` for convenience. Use **Clear** on a form (or clear your browser data) to remove them.
- Exported CSV files are saved locally by you and are your responsibility to protect — they may contain sensitive personal/financial information.

---

## Browser support

Works in current versions of Chrome, Edge, Firefox and Safari. Print/PDF results look best in Chrome or Edge.

---

## Official resources

Always cross-check against the latest official forms and guidelines:

- APY / NPS — https://www.npscra.proteantech.in/
- PMSBY & PMJJBY (Jan Suraksha) — https://www.jansuraksha.gov.in/
- Sukanya Samriddhi (NSI) — http://www.nsiindia.gov.in/
- PMJDY — https://pmjdy.gov.in/
- Income Tax (Form 121) — https://www.incometax.gov.in/

---

## Disclaimer

- **Not an official or government website.** This tool is an **independent, unofficial aid** created only to help fill scheme forms more easily. It is **not affiliated with, endorsed by, or connected to** the Government of India, PFRDA, any bank, insurer, or the scheme administrators.
- **No data submission.** Filling a form here does **not** register, enrol, or submit anything to any authority. You must **print the completed form, sign it by hand, and submit it physically** at your bank/branch or the relevant authority.
- **Verify everything.** Form layouts, fields, charges, eligibility and rules can change. **Always confirm the current official form, contribution amounts and terms** from the official sources above before relying on any output.
- **Accuracy is your responsibility.** Auto-fill and calculations are provided for convenience and may contain errors. Review every field carefully before printing and submitting.
- **No warranty / no liability.** This software is provided “as is”, without warranty of any kind. The authors accept **no liability** for any loss, rejection, delay, or damage arising from its use.
- **Trademarks & logos** (scheme names, emblems such as the PMJDY logo) belong to their respective owners and are used here only for identification of the relevant form.
- **Intended for internal/assisted use** (e.g. by a bank staff member or facilitator helping an applicant). Handle any personal data entered in accordance with applicable privacy laws.
