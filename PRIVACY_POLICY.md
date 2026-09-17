# Privacy Policy for Xeno POS

**Last Updated:** September 17, 2026  
**Effective Date:** September 17, 2026  

Welcome to **Xeno POS** ("xeno POS", "Xenobill", "we", "us", or "our"). We are committed to protecting the privacy and security of your personal and business data.

This Privacy Policy explains how we collect, use, store, share, and protect your information when you access or use the **xeno POS Application** ("Application" or "Service"), including all related features such as Point of Sale (POS) billing, inventory management, customer ledgers, sales analytics, PDF invoice generation, and cloud synchronization.

By installing, accessing, or using the Application, you agree to the collection and use of information in accordance with this Privacy Policy.

---

## 1. Introduction

Xeno POS is a modern, fast, offline-first Point of Sale (POS), billing, inventory, and business management solution designed for merchants and business operators.

- **Data Ownership:** You retain full legal ownership of all your business, inventory, sales, and customer data.
- **Zero Data Selling:** We do NOT sell, rent, or trade your personal or business data to advertisers or third parties under any circumstances.

---

## 2. Information We Collect

We collect information directly from you, automatically through application usage, and via essential cloud services required to deliver core functionality.

### A. Account / Login Information
- Email address, hashed account password (managed securely via auth providers), user ID, and account profile preferences.

### B. Business & Customer Data
- **Business Profile:** Business name, category/type, phone number, address, GSTIN / Tax ID, currency preference, and business logo.
- **Customer Records:** End-customer names, phone numbers, email addresses, billing addresses, customer ledger history, and outstanding credit balances (Udhar).

### C. Invoice & Billing Data
- Product names, SKUs, categories, barcodes, stock quantities, cost prices, selling prices, invoice numbers, itemized billing lists, discounts, tax rates, total amounts, and transaction timestamps.

### D. Payment Information
- Recorded payment methods (Cash, UPI, Card, Net Banking), transaction amounts, subscription tier status (e.g., Free, Pro), transaction history for renewals, and feature entitlement state.

### E. Device & Technical Information
- **Camera Access:** Used strictly for real-time barcode scanning. Camera streams are processed locally on the device and are never recorded or transmitted.
- **Storage & Media Access:** Used to save generated PDF invoices, export CSV financial reports, and upload your business logo.
- **Network & Internet Access:** Required for cloud database synchronization, user authentication, and generating UPI payment QR codes.
- **Thermal & Bluetooth Printing:** Enables output to thermal receipt printers and system printers.

---

## 3. How We Use Your Information

We use the collected information for legitimate business operational purposes:
- Delivering core POS billing, inventory control, customer ledgers, and automated PDF invoice generation.
- Synchronizing local offline SQLite database state with Supabase cloud backup to prevent data loss.
- Generating analytics, sales reports, revenue trends, and profit summaries for your business.
- Managing user accounts, subscriptions, feature permissions, and subscription renewals.
- Providing customer support, diagnosing application crashes, and optimizing software performance.

---

## 4. Data Storage & Security

We implement industry-standard technical measures to safeguard your information:

- **Offline-First SQLite Architecture:** Your data is persisted locally on your device via encrypted SQLite (`drift`), ensuring full operation even without internet access.
- **Supabase Cloud Security & RLS:** Cloud synchronization is encrypted in transit via TLS/SSL. Database tables enforce Row Level Security (RLS) so only your authenticated account can read or write your records.

---

## 5. Third-Party Services

We partner with trusted service providers to operate essential application infrastructure:
- **Supabase:** Used for cloud backend database hosting, user authentication, and real-time synchronization. (Read [Supabase Privacy Policy](https://supabase.com/privacy)).
- **Google Fonts:** Used to render application typography (`PlusJakartaSans` and `Inter`).

---

## 6. Data Sharing

We do not sell, rent, trade, or monetize your personal or business data under any circumstances. Information is disclosed only in the following scenarios:
- **Backend Hosting Providers:** Shared securely with infrastructure partners (Supabase) solely to operate the software.
- **Legal & Regulatory Compliance:** Disclosed if required by law, court order, or governmental inquiry, or to prevent fraudulent activity.

---

## 7. Data Retention & Deletion

You retain full control over data export and account deletion:
- **Retention Period:** Active account data is retained while your account remains open to deliver software functionality.
- **Data Export:** You can export your data, invoices, and ledgers in PDF or CSV formats at any time.
- **Account Deletion:** You may delete your account via **Settings > Account > Delete Account** or by contacting support. Upon deletion, cloud database records are permanently removed within 30 days.

---

## 8. User Rights

Depending on your jurisdiction, you possess the following data rights:
- **Right to Access:** Request a copy of your stored personal and business data.
- **Right to Rectification:** Update or correct business information directly within app settings.
- **Right to Erasure:** Request permanent deletion of your account and cloud data.
- **Right to Restrict Processing:** Limit how specific categories of data are processed.

---

## 9. Children's Privacy

Xeno POS is designed exclusively for business owners, merchants, and enterprise users. It is not intended for use by individuals under 18 years of age. We do not knowingly collect information from children.

---

## 10. Policy Updates

We may update this Privacy Policy periodically to reflect software enhancements or regulatory changes. We will notify you of material changes within the app or via email. The "Last Updated" date at the top indicates when revisions take effect.

---

## 11. Contact Information

If you have any questions or privacy inquiries regarding this Privacy Policy or Xeno POS, please reach out to us:

- **Application:** Xeno POS
- **Support Email:** [support@xenotrix.in](mailto:support@xenotrix.in)
- **Terms & Conditions Website:** [https://terms.xenobill.com](https://terms.xenobill.com)
