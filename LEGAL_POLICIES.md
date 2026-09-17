
This document contains the complete **Privacy Policy** and **Terms & Conditions** for the **Xenobiz POS & Billing Application** (`xenobill_flutter`).

---

## Table of Contents
1. [Privacy Policy](#part-i--privacy-policy)
   - 1. [Summary of Key Concepts](#1-summary-of-key-concepts)
   - 2. [Information We Collect](#2-information-we-collect)
   - 3. [How We Use Your Information](#3-how-we-use-your-information)
   - 4. [Data Storage, Security, & Architecture](#4-data-storage-security--architecture)
   - 5. [Information Sharing and Disclosure](#5-information-sharing-and-disclosure)
   - 6. [Data Retention and Account Deletion](#6-data-retention-and-account-deletion)
   - 7. [Your Data Rights & Choices](#7-your-data-rights--choices)
   - 8. [Children's Privacy](#8-childrens-privacy)
   - 9. [Changes to This Privacy Policy](#9-changes-to-this-privacy-policy)
   - 10. [Contact Us](#10-contact-us)
2. [Terms and Conditions](#part-ii--terms-and-conditions)
   - 1. [Description of Service](#1-description-of-service)
   - 2. [Eligibility & Account Registration](#2-eligibility--account-registration)
   - 3. [Subscription Plans, Billing & Payments](#3-subscription-plans-billing--payments)
   - 4. [User Responsibilities & Tax Compliance](#4-user-responsibilities--tax-compliance)
   - 5. [Offline Data, Cloud Sync & Data Backup](#5-offline-data-cloud-sync--data-backup)
   - 6. [Intellectual Property Rights](#6-intellectual-property-rights)
   - 7. [Prohibited Uses](#7-prohibited-uses)
   - 8. [Disclaimer of Warranties](#8-disclaimer-of-warranties)
   - 9. [Limitation of Liability](#9-limitation-of-liability)
   - 10. [Termination](#10-termination)
   - 11. [Governing Law & Dispute Resolution](#11-governing-law--dispute-resolution)
   - 12. [Modifications to Terms](#12-modifications-to-terms)
   - 13. [Contact Information](#13-contact-information)

---

# Part I — Privacy Policy

**Last Updated:** September 17, 2026  
**Effective Date:** September 17, 2026  

Welcome to **Xenobiz POS & Billing Application** ("Xenobiz", "Xenobill", "we", "us", or "our"). We are committed to protecting the privacy and security of your personal and business data.

This Privacy Policy explains how we collect, use, store, share, and protect your information when you access or use the **Xenobiz Flutter Application** ("Application" or "Service"), including all related features such as Point of Sale (POS) billing, inventory management, customer ledgers, sales analytics, PDF invoice generation, and cloud synchronization.

By installing, accessing, or using the Application, you agree to the collection and use of information in accordance with this Privacy Policy.

---

### 1. Summary of Key Concepts

| Topic | Summary |
| :--- | :--- |
| **App Purpose** | Modern, fast, and responsive POS, Billing, Inventory, and Business Management solution. |
| **Data Ownership** | You retain full ownership of all your business, inventory, sales, and customer data. |
| **Offline-First Storage** | Data is stored locally on your device via encrypted/secure SQLite (`drift`) for offline reliability. |
| **Cloud Synchronization** | Cloud sync and user authentication are powered securely via **Supabase** cloud infrastructure. |
| **Data Sale** | **We do NOT sell, rent, or trade your personal or business data to third parties or advertisers.** |

---

### 2. Information We Collect

We collect information directly from you, automatically from your device usage, and through third-party backend services required to operate the Application.

#### A. Business & Account Information
When you create an account or set up your business profile in Xenobiz, we collect:
- **Account Details:** Email address, password (stored in hashed format by auth providers), user ID.
- **Business Profile:** Business name, business category/type, phone number, address, business logo, tax identification numbers (e.g., GSTIN / VAT ID), currency preference, and invoice customization settings.

#### B. Transactional & Business Operational Data
To provide POS billing and business management functionalities, the Application records:
- **Product & Inventory Data:** Item names, SKUs, categories, barcodes, stock quantities, cost prices, selling prices, and reorder levels.
- **Sales & Invoices:** Invoice numbers, itemized billing details, discounts, tax rates, total amounts, payment methods (Cash, UPI, Card, Net Banking), and invoice timestamps.
- **Expenses & Outgoings:** Operational expense records, expense categories, notes, and payment statuses.
- **Subscription Information:** Active plan tier (e.g., Free, Pro, Enterprise), transaction history for subscription renewals, and feature entitlement status.

#### C. Customer Information (Stored by You)
As a business operator, you may input information regarding your end-customers into the Application, including:
- Customer names, phone numbers, email addresses, and shipping/billing addresses.
- Customer ledger history, outstanding balances, and payment records.

> [!IMPORTANT]
> **Data Controller vs. Data Processor:** You (the merchant/business owner) act as the **Data Controller** for all customer data entered into Xenobiz. Xenobiz acts as a **Data Processor**, processing such data solely to deliver the software functionality to you. You are responsible for obtaining necessary consents from your customers.

#### D. Device & Device Permissions Data
To enable core hardware-integrated features, the Application requests access to specific device features:
- **Camera Access:** Used strictly for real-time barcode scanning of inventory items during billing and stock intake. *Camera images/streams are processed locally on the device and are never recorded or transmitted to our servers.*
- **Local Storage / Media Access:** Used to save generated PDF invoices, export financial reports (CSV/PDF), and allow you to upload your business logo.
- **Network & Internet Access:** Required to perform cloud database synchronization, user authentication, subscription validation, and generating UPI payment link QR codes.
- **Printing Capabilities:** Enables thermal printer, Bluetooth printer, and system printer output for physical receipt printing.

---

### 3. How We Use Your Information

We use the collected information for legitimate business purposes, including:

1. **Delivering Core Services:** Managing POS billing, product inventory, customer ledgers, and invoice generation.
2. **Cloud Sync & Offline Availability:** Seamlessly syncing local SQLite database state with Supabase cloud backup to prevent data loss and enable multi-device access.
3. **Analytics & Insights:** Generating sales reports, profit/loss summaries, revenue trends, and smart business insights for your business operations.
4. **Account & Subscription Management:** Processing account creation, subscription upgrades, transaction history, and feature access permissions.
5. **Technical Support & Improvements:** Diagnosing application crashes, optimizing performance, and ensuring cross-platform stability.
6. **Legal & Security Compliance:** Preventing fraud, unauthorized access, and maintaining audit trails for secure operations.

---

### 4. Data Storage, Security, & Architecture

We implement industry-standard technical and organizational measures to safeguard your information:

```
┌─────────────────────────────────────────────────────────┐
│                 Xenobiz Flutter Client                  │
├────────────────────────────┬────────────────────────────┤
│   Local SQLite Database    │   Camera & System Hardware │
│  (Drift Offline Storage)   │   (Local Barcode Scan/PDF) │
└──────────────┬─────────────┴──────────────┬─────────────┘
               │                            │
               ▼                            ▼
┌─────────────────────────────────────────────────────────┐
│               Supabase Cloud Backend                    │
│   - Encrypted TLS/SSL Transmission                       │
│   - PostgreSQL Database with Row Level Security (RLS)    │
│   - Secure Auth & Access Controls                       │
└─────────────────────────────────────────────────────────┘
```

- **Offline-First Architecture:** Your data is immediately persisted on your device in a local SQLite database (`drift`). This ensures the app functions even without an active internet connection.
- **Cloud Security:** Online data transmission to Supabase backend is encrypted using Transport Layer Security (TLS/SSL).
- **Access Control:** Supabase database tables enforce **Row Level Security (RLS)**, ensuring that only authenticated users can access data belonging to their specific business ID.
- **No Password Storage:** Passwords are never stored in plain text. Authentication credentials are managed through industry-standard OAuth / Supabase Auth flows.

---

### 5. Information Sharing and Disclosure

We do not sell, rent, trade, or monetize your personal or business data under any circumstances. We share information only in the limited scenarios described below:

#### A. Third-Party Infrastructure Providers
We partner with reliable infrastructure providers to host and run the Application:
- **Supabase:** Used for cloud backend database hosting, user authentication, and real-time synchronization. (Read [Supabase Privacy Policy](https://supabase.com/privacy)).
- **Google Fonts:** Used for rendering typography (`PlusJakartaSans`).

#### B. Legal Requirements & Protection
We may disclose information if required to do so by law, court order, or governmental regulation, or if we believe in good faith that such action is necessary to:
- Comply with a legal obligation or law enforcement inquiry.
- Protect the security, integrity, or rights of Xenobiz, our users, or the public.
- Prevent fraudulent or illegal transactions.

---

### 6. Data Retention and Account Deletion

- **Retention Period:** We retain your account, inventory, and transaction data for as long as your account remains active or as needed to provide you with the Service.
- **Data Export:** You can export your data, invoices, and customer ledgers at any time in PDF or spreadsheet formats via the Application settings.
- **Account Deletion:** You may request account deletion at any time by navigating to **Settings > Account > Delete Account** or contacting us. Upon deletion, your personal details, business profile, and cloud-synced database records will be permanently removed from our active servers within 30 days, except where legal retention obligations apply.

---

### 7. Your Data Rights & Choices

Depending on your jurisdiction, you possess the following rights regarding your data:
- **Right to Access:** Request a copy of the personal and business data held by us.
- **Right to Rectification:** Update or correct incomplete or inaccurate business information directly within the app settings.
- **Right to Data Erasure:** Request full deletion of your account and associated cloud data.
- **Right to Restrict Processing:** Limit how we process certain categories of your data.

To exercise any of these rights, please contact us at the contact details provided below.

---

### 8. Children's Privacy

Xenobiz POS is designed exclusively for business operators, merchants, and enterprise users. It is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover that a child under 18 has provided us with personal data, we will take immediate steps to delete such information.

---

### 9. Changes to This Privacy Policy

We may update our Privacy Policy periodically to reflect app updates, security enhancements, or regulatory requirements. We will notify you of any material changes by posting the updated Privacy Policy within the Application or via email. The "Last Updated" date at the top of this document indicates when the latest revisions took effect.

---

### 10. Contact Us

If you have any questions, concerns, or privacy requests regarding this Privacy Policy or Xenobiz POS, please reach out to us:

- **Application:** Xenobiz POS & Billing Application (`xenobill_flutter`)
- **Email:** support@xenobiz.app / privacy@xenobiz.app
- **Support Portal:** [https://xenobiz.app/support](https://xenobiz.app/support)

---
---

# Part II — Terms and Conditions

**Last Updated:** September 17, 2026  
**Effective Date:** September 17, 2026  

Welcome to **Xenobiz POS & Billing Application** ("Xenobiz", "Xenobill", "Application", "Service", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your access to and use of the Xenobiz Flutter Application, including all associated software, features, cloud synchronization, inventory tools, customer ledger management, and billing services.

By creating an account, downloading, installing, or using the Application, you ("User", "Merchant", "you", or "your") agree to be legally bound by these Terms. If you do not agree to these Terms, do not install or use the Application.

---

### 1. Description of Service

Xenobiz POS is a cross-platform Point of Sale (POS), inventory tracking, expense management, customer ledger, and invoicing application designed for retail stores, restaurants, service providers, and small-to-medium businesses.

Key capabilities include:
- Point of Sale (POS) quick billing and invoice generation.
- Product inventory management with barcode scanning via mobile camera.
- Customer account tracking, ledger balances, and payment collection records.
- Expense tracking and profit/loss business reports.
- Offline SQLite data storage paired with optional Supabase cloud backup and sync.
- Digital thermal receipt printing and PDF invoice exports.

---

### 2. Eligibility & Account Registration

#### A. Business Intent & Legal Age
By registering for or using Xenobiz, you represent and warrant that:
1. You are at least 18 years of age or the legal age of majority in your jurisdiction.
2. You possess the legal authority to enter into these Terms on behalf of yourself or your business entity.
3. You will use the Service strictly for legitimate and lawful business operations.

#### B. Account Security
- You are responsible for providing accurate, current, and complete business information during setup.
- You are solely responsible for maintaining the confidentiality of your account credentials (email and password).
- You accept full responsibility for all activities, transactions, and billing operations performed under your account.
- You must notify us immediately of any unauthorized access or security breach regarding your account.

---

### 3. Subscription Plans, Billing & Payments

#### A. Subscription Tiers
Xenobiz offers free and paid subscription plans (e.g., Free, Pro, Enterprise) with varying feature limits, transaction quotas, and multi-device cloud synchronization capabilities.

#### B. Payment Terms
- Paid subscriptions are billed in advance on a recurring monthly or annual basis depending on your selected billing cycle.
- All payments processed through integrated payment providers or app store billing mechanisms are subject to applicable fees and taxes.
- **Refund Policy:** Subscription fees are non-refundable except where required by applicable local consumer protection laws or explicitly stated otherwise in writing.

#### C. Modifications to Pricing
We reserve the right to modify subscription fees or introduce new billing tiers upon 30 days' advance notice. Continued use of the Service after fee adjustments take effect constitutes acceptance of the new pricing structure.

---

### 4. User Responsibilities & Tax Compliance

> [!WARNING]
> **Tax & Regulatory Compliance Responsibility:** Xenobiz provides invoicing tools, tax rate calculation options (e.g., GST, VAT, Sales Tax), and financial reporting features. However, **you are strictly and solely responsible for verifying the accuracy of tax calculations, adhering to local tax laws, submitting statutory tax returns, and generating legally compliant invoices.**

As a Merchant using Xenobiz, you agree that:
1. **Data Accuracy:** You are responsible for the accuracy of all product prices, stock levels, discounts, tax rates, customer ledgers, and transaction values entered into the app.
2. **Customer Consent:** You are responsible for ensuring that you have obtained necessary consent from your customers prior to entering their personal details (e.g., phone numbers, names, addresses) into Xenobiz.
3. **Lawful Content:** You will not store, transmit, or process any fraudulent, illegal, offensive, or infringing material through the Service.

---

### 5. Offline Data, Cloud Sync & Data Backup

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

### 6. Intellectual Property Rights

- **Ownership of Software:** The Xenobiz Application, including its source code, UI/UX designs, graphics, branding, logos, documentation, and underlying software algorithms, is the exclusive intellectual property of Xenobiz and its licensors.
- **License Grant:** Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application on your supported devices solely for your internal business operations.
- **Merchant Data Ownership:** You retain all rights, title, and ownership over your business profiles, inventory data, customer records, and transaction logs entered into the Service.

---

### 7. Prohibited Uses

You agree NOT to engage in any of the following activities:
1. Reverse engineering, decompiling, disassembling, or attempting to derive the source code of the Application.
2. Renting, leasing, sublicensing, selling, or distributing the Application to third parties without prior written consent.
3. Modifying, tampering with, or creating derivative works based on Xenobiz.
4. Using the Service for fraudulent billing, money laundering, unauthorized financial transactions, or unlawful commercial activities.
5. Attempting to bypass application security controls, subscription locks, or Row Level Security (RLS) rules on our cloud servers.

---

### 8. Disclaimer of Warranties

> [!IMPORTANT]
> THE APPLICATION AND SERVICES ARE PROVIDED ON AN **"AS IS"** AND **"AS AVAILABLE"** BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY.

To the maximum extent permitted by applicable law, we disclaim all warranties, including but not limited to:
- Implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
- Warranties that the Service will be uninterrupted, error-free, completely secure, or free from server downtime.
- Warranties regarding the legal sufficiency or statutory compliance of invoices generated for tax reporting purposes in your specific jurisdiction.

---

### 9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL XENOBIZ, ITS DEVELOPERS, DIRECTORS, AFFILIATES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
- LOSS OF PROFITS, REVENUE, OR SAVINGS.
- LOSS OR CORRUPTION OF DATA, INVENTORY RECORDS, OR CUSTOMER LEDGERS.
- BUSINESS INTERRUPTION OR DEVICE HARDWARE FAILURE.

IN ANY EVENT, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF THE APPLICATION SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

---

### 10. Termination

- **By You:** You may terminate your account at any time by ceasing use of the Application and initiating account deletion under **Settings > Account > Delete Account**.
- **By Us:** We reserve the right to suspend or terminate your account and access to cloud services immediately, without prior notice, if you breach any provision of these Terms or engage in fraudulent activities.
- **Effect of Termination:** Upon termination, your right to access cloud synchronization services will immediately cease. Sections concerning Intellectual Property, Limitation of Liability, Disclaimers, and Governing Law shall survive termination.

---

### 11. Governing Law & Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Xenobiz operates, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of or related to these Terms or the Application shall be instituted exclusively in the competent courts of that jurisdiction.

---

### 12. Modifications to Terms

We reserve the right to revise or update these Terms at any time. When updates occur, we will revise the "Last Updated" date at the top of this document. Continued use of the Application following the posting of modified Terms indicates your acknowledgement and acceptance of the revised Terms.

---

### 13. Contact Information

If you have any questions, feedback, or legal inquiries regarding these Terms and Conditions, please contact us:

- **Application:** Xenobiz POS & Billing Application (`xenobill_flutter`)
- **Email:** support@xenobiz.app / legal@xenobiz.app
- **Website:** [https://xenobiz.app](https://xenobiz.app)
