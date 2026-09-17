# Terms and Conditions for Xenobiz POS

**Last Updated:** September 17, 2026  
**Effective Date:** September 17, 2026  

Welcome to **Xenobiz POS & Billing Application** ("Xenobiz", "Xenobill", "Application", "Service", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Xenobiz Flutter Application, including all associated software, features, cloud synchronization, inventory tools, customer ledger management, and billing services.

By creating an account, downloading, installing, or using the Application, you ("User", "Merchant", "you", or "your") agree to be legally bound by these Terms. If you do not agree to these Terms, do not install or use the Application.

---

## 1. Description of Service

Xenobiz POS is a cross-platform Point of Sale (POS), inventory tracking, expense management, customer ledger, and invoicing application designed for retail stores, restaurants, service providers, and small-to-medium businesses.

Key capabilities include:
- Point of Sale (POS) quick billing and invoice generation.
- Product inventory management with barcode scanning via mobile camera.
- Customer account tracking, ledger balances, and payment collection records.
- Expense tracking and profit/loss business reports.
- Offline SQLite data storage paired with optional Supabase cloud backup and sync.
- Digital thermal receipt printing and PDF invoice exports.

---

## 2. Eligibility & Account Registration

### A. Business Intent & Legal Age
By registering for or using Xenobiz, you represent and warrant that:
1. You are at least 18 years of age or the legal age of majority in your jurisdiction.
2. You possess the legal authority to enter into these Terms on behalf of yourself or your business entity.
3. You will use the Service strictly for legitimate and lawful business operations.

### B. Account Security
- You are responsible for providing accurate, current, and complete business information during setup.
- You are solely responsible for maintaining the confidentiality of your account credentials (email and password).
- You accept full responsibility for all activities, transactions, and billing operations performed under your account.
- You must notify us immediately of any unauthorized access or security breach regarding your account.

---

## 3. Subscription Plans, Billing & Payments

### A. Subscription Tiers
Xenobiz offers free and paid subscription plans (e.g., Free, Pro, Enterprise) with varying feature limits, transaction quotas, and multi-device cloud synchronization capabilities.

### B. Payment Terms
- Paid subscriptions are billed in advance on a recurring monthly or annual basis depending on your selected billing cycle.
- All payments processed through integrated payment providers or app store billing mechanisms are subject to applicable fees and taxes.
- **Refund Policy:** Subscription fees are non-refundable except where required by applicable local consumer protection laws or explicitly stated otherwise in writing.

### C. Modifications to Pricing
We reserve the right to modify subscription fees or introduce new billing tiers upon 30 days' advance notice. Continued use of the Service after fee adjustments take effect constitutes acceptance of the new pricing structure.

---

## 4. User Responsibilities & Tax Compliance

> [!WARNING]
> **Tax & Regulatory Compliance Responsibility:** Xenobiz provides invoicing tools, tax rate calculation options (e.g., GST, VAT, Sales Tax), and financial reporting features. However, **you are strictly and solely responsible for verifying the accuracy of tax calculations, adhering to local tax laws, submitting statutory tax returns, and generating legally compliant invoices.**

As a Merchant using Xenobiz, you agree that:
1. **Data Accuracy:** You are responsible for the accuracy of all product prices, stock levels, discounts, tax rates, customer ledgers, and transaction values entered into the app.
2. **Customer Consent:** You are responsible for ensuring that you have obtained necessary consent from your customers prior to entering their personal details (e.g., phone numbers, names, addresses) into Xenobiz.
3. **Lawful Content:** You will not store, transmit, or process any fraudulent, illegal, offensive, or infringing material through the Service.

---

## 5. Offline Data, Cloud Sync & Data Backup

```
┌──────────────────────────────────────────────────────────────┐
│                    Data Storage Model                        │
├──────────────────────────────┬───────────────────────────────┤
│   Primary (Device Local)     │     Secondary (Cloud Sync)    │
│  SQLite (`drift`) Database   │    Supabase Cloud PostgreSQL │
│   Works 100% Offline         │    Requires Internet Sync    │
└──────────────────────────────┴───────────────────────────────┘
```

- **Offline Operating Mode:** Xenobiz uses a local SQLite database (`drift`) to permit continuous offline billing and inventory operations.
- **Cloud Backup Responsibility:** Cloud synchronization requires an active internet connection. You acknowledge that if you operate offline for extended periods without syncing to Supabase, local data loss resulting from device damage, theft, hardware failure, or app deletion is your responsibility.
- **Data Export:** You are encouraged to regularly export copies of your invoices, reports, and customer ledgers using the built-in PDF/CSV export functionality.

---

## 6. Intellectual Property Rights

- **Ownership of Software:** The Xenobiz Application, including its source code, UI/UX designs, graphics, branding, logos, documentation, and underlying software algorithms, is the exclusive intellectual property of Xenobiz and its licensors.
- **License Grant:** Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application on your supported devices solely for your internal business operations.
- **Merchant Data Ownership:** You retain all rights, title, and ownership over your business profiles, inventory data, customer records, and transaction logs entered into the Service.

---

## 7. Prohibited Uses

You agree NOT to engage in any of the following activities:
1. Reverse engineering, decompiling, disassembling, or attempting to derive the source code of the Application.
2. Renting, leasing, sublicensing, selling, or distributing the Application to third parties without prior written consent.
3. Modifying, tampering with, or creating derivative works based on Xenobiz.
4. Using the Service for fraudulent billing, money laundering, unauthorized financial transactions, or unlawful commercial activities.
5. Attempting to bypass application security controls, subscription locks, or Row Level Security (RLS) rules on our cloud servers.

---

## 8. Disclaimer of Warranties

> [!IMPORTANT]
> THE APPLICATION AND SERVICES ARE PROVIDED ON AN **"AS IS"** AND **"AS AVAILABLE"** BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.

To the maximum extent permitted by applicable law, we disclaim all warranties, including but not limited to:
- Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
- Warranties that the Service will be uninterrupted, error-free, completely secure, or free from server downtime.
- Warranties regarding the legal sufficiency or statutory compliance of invoices generated for tax reporting purposes in your specific jurisdiction.

---

## 9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL XENOBIZ, ITS DEVELOPERS, DIRECTORS, AFFILIATES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
- LOSS OF PROFITS, REVENUE, OR SAVINGS.
- LOSS OR CORRUPTION OF DATA, INVENTORY RECORDS, OR CUSTOMER LEDGERS.
- BUSINESS INTERRUPTION OR DEVICE HARDWARE FAILURE.

IN ANY EVENT, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF THE APPLICATION SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

---

## 10. Termination

- **By You:** You may terminate your account at any time by ceasing use of the Application and initiating account deletion under **Settings > Account > Delete Account**.
- **By Us:** We reserve the right to suspend or terminate your account and access to cloud services immediately, without prior notice, if you breach any provision of these Terms or engage in fraudulent activities.
- **Effect of Termination:** Upon termination, your right to access cloud synchronization services will immediately cease. Sections concerning Intellectual Property, Limitation of Liability, Disclaimers, and Governing Law shall survive termination.

---

## 11. Governing Law & Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Xenobiz operates, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms or the Application shall be instituted exclusively in the competent courts of that jurisdiction.

---

## 12. Modifications to Terms

We reserve the right to revise or update these Terms at any time. When updates occur, we will revise the "Last Updated" date at the top of this document. Continued use of the Application following the posting of modified Terms indicates your acknowledgement and acceptance of the revised Terms.

---

## 13. Contact Information

If you have any questions, feedback, or legal inquiries regarding these Terms and Conditions, please contact us:

- **Application:** Xenobiz POS & Billing Application (`xenobill_flutter`)
- **Email:** support@xenobiz.app / legal@xenobiz.app
- **Website:** [https://xenobiz.app](https://xenobiz.app)
