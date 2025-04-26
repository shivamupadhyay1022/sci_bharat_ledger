import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Settings as SettingsIcon,
  Upload,
  Calendar,
  ChevronDown,
  Search,
  Check,
  Package,
  FileText,
  QrCode,
  DollarSign,
  CreditCard,
  Repeat,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  Clock,
  Bell,
  CreditCard as CreditCardIcon,
  BanknoteIcon,
  UserPlus,
  Shield,
  History,
  MessageSquare,
  MoreVertical,
  Users,
  Globe,
  Languages,
  Smartphone,
  Wifi,
  RefreshCw,
  Fingerprint,
  Database,
  Download,
  DownloadCloud,
  Save,
  FileJson,
  File,
  HardDrive,
  Cloud,
  Server,
  Mail,
  MessageCircle,
  AlertTriangle,
  ShoppingCart,
  FileText as FileTextIcon,
  PlusCircle,
  Sun,
  Moon,
  Monitor,
  Layout,
  AlignLeft,
  Palette,
  Square,
  Image,
} from "lucide-react";

const Settings = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("UI & Appearance");

  // Sidebar navigation items
  const sidebarItems = [
    "General Settings",
    "GST & Tax Settings",
    "Inventory Preferences",
    "Billing & Invoice Settings",
    "Accounting Settings",
    "Payments & Finance",
    "User Management",
    "Language & Localization",
    "Mobile & PWA",
    "Data & Export",
    "Notifications & Alerts",
    "UI & Appearance",
    "Security & Privacy",
    "AI & Automation",
    "Support & Feedback",
  ];

  // Business type options
  const businessTypes = [
    "Private Limited Company",
    "Partnership Firm",
    "Sole Proprietorship",
    "Limited Liability Partnership",
    "One Person Company",
  ];

  // Business sector options
  const businessSectors = [
    "Retail",
    "Manufacturing",
    "Services",
    "Wholesale",
    "E-commerce",
  ];

  // Currency options
  const currencies = [
    "₹ - Indian Rupee (INR)",
    "$ - US Dollar (USD)",
    "€ - Euro (EUR)",
    "£ - British Pound (GBP)",
  ];

  // Timezone options
  const timezones = [
    "India Standard Time (IST)",
    "Greenwich Mean Time (GMT)",
    "Eastern Time (ET)",
    "Pacific Time (PT)",
  ];

  // GST Type options
  const gstTypes = ["Regular", "Composition", "Casual", "Non-Resident"];

  // State of Registration options
  const stateOptions = [
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Tamil Nadu",
    "Gujarat",
    "Uttar Pradesh",
  ];

  // GSTR Return Frequency options
  const returnFrequencies = ["Monthly", "Quarterly", "Annually"];

  // Inventory Valuation Method options
  const valuationMethods = [
    "FIFO (First In, First Out)",
    "LIFO (Last In, First Out)",
    "Weighted Average",
    "Specific Identification",
  ];

  // Default Unit of Measure options
  const unitOfMeasureOptions = [
    "Piece (Pcs)",
    "Kilogram (Kg)",
    "Gram (g)",
    "Liter (L)",
    "Meter (m)",
    "Box",
    "Carton",
  ];

  // Barcode Settings options
  const barcodeSettingsOptions = [
    "Auto-generate",
    "Manual entry only",
    "Both options",
  ];

  // Default Payment Terms options
  const paymentTermsOptions = [
    "Net 14 Days",
    "Net 30 Days",
    "Net 45 Days",
    "Net 60 Days",
    "Due on Receipt",
    "Custom",
  ];

  // Invoice Template options
  const invoiceTemplateOptions = [
    "Standard Template",
    "Professional Template",
    "Minimal Template",
    "Custom Template",
  ];

  // Digital Signature options
  const digitalSignatureOptions = ["No signature", "Upload Signature"];

  // Default Ledger Mapping options
  const ledgerMappingOptions = [
    "Sales — Revenue Ledger",
    "Purchases — Expense Ledger",
    "Assets — Asset Ledger",
    "Liabilities — Liability Ledger",
    "Equity — Equity Ledger",
  ];

  // Payment Modes options
  const paymentModes = [
    { id: "cash", label: "Cash" },
    { id: "upi", label: "UPI" },
    { id: "bank_transfer", label: "Bank Transfer" },
    { id: "cheque", label: "Cheque" },
    { id: "credit_card", label: "Credit Card" },
    { id: "debit_card", label: "Debit Card" },
    { id: "digital_wallet", label: "Digital Wallet" },
    { id: "credit_account", label: "Credit/Account" },
  ];

  // Reminder Interval options
  const reminderIntervalOptions = [
    "3 Days",
    "5 Days",
    "7 Days",
    "10 Days",
    "14 Days",
    "30 Days",
  ];

  // User data
  const users = [
    {
      name: "Admin User",
      email: "admin@example.com",
      role: "Owner",
      lastActive: "2 hours ago",
    },
    {
      name: "Sales Agent",
      email: "sales@example.com",
      role: "Sales",
      lastActive: "1 day ago",
    },
    {
      name: "Accounts Manager",
      email: "accounts@example.com",
      role: "Accountant",
      lastActive: "3 days ago",
    },
  ];

  // User roles
  const userRoles = [
    "Owner",
    "Admin",
    "Manager",
    "Sales",
    "Accountant",
    "Inventory Manager",
    "Cashier",
    "Viewer",
  ];

  // Language options
  const languageOptions = [
    { code: "en", name: "English" },
    { code: "hi", name: "Hindi (हिंदी)" },
    { code: "bn", name: "Bengali (বাংলা)" },
    { code: "ta", name: "Tamil (தமிழ்)" },
    { code: "te", name: "Telugu (తెలుగు)" },
    { code: "mr", name: "Marathi (मराठी)" },
    { code: "gu", name: "Gujarati (ગુજરાતી)" },
  ];

  // Date format options
  const dateFormatOptions = [
    "DD/MM/YYYY (31/12/2024)",
    "MM/DD/YYYY (12/31/2024)",
    "YYYY-MM-DD (2024-12-31)",
    "DD-MMM-YYYY (31-Dec-2024)",
  ];

  // Currency format options
  const currencyFormatOptions = [
    "₹1,00,000.00 (Indian Format)",
    "₹100,000.00 (Western Format)",
    "₹ 1,00,000.00 (With Space)",
    "₹ 100,000.00 (Western With Space)",
  ];

  // Fiscal year format options
  const fiscalYearFormatOptions = [
    "April-March (Indian)",
    "January-December (Calendar)",
    "July-June (Australian)",
    "October-September (US Federal)",
  ];

  // Cache expiry interval options
  const cacheExpiryOptions = [
    "1 Day",
    "3 Days",
    "7 Days",
    "14 Days",
    "30 Days",
  ];

  // Mobile data usage options
  const mobileDataOptions = ["Low (Data Saver)", "Medium", "High", "Unlimited"];

  // Backup destination options
  const backupDestinationOptions = [
    "Local Storage",
    "Google Drive",
    "Dropbox",
    "OneDrive",
    "Custom FTP",
  ];

  // Backup frequency options
  const backupFrequencyOptions = ["Daily", "Weekly", "Bi-weekly", "Monthly"];

  // Retain backups options
  const retainBackupsOptions = [
    "7 Days",
    "14 Days",
    "30 Days",
    "60 Days",
    "90 Days",
    "1 Year",
  ];

  // Notification days
  const notificationDays = [
    { id: "monday", label: "Monday" },
    { id: "tuesday", label: "Tuesday" },
    { id: "wednesday", label: "Wednesday" },
    { id: "thursday", label: "Thursday" },
    { id: "friday", label: "Friday" },
    { id: "saturday", label: "Saturday" },
    { id: "sunday", label: "Sunday" },
  ];

  // Theme options
  const themeOptions = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor },
  ];

  // Font size options
  const fontSizeOptions = [
    "Small",
    "Medium",
    "Large",
    "Extra Large"
  ];

  // Dashboard layout options
  const dashboardLayoutOptions = [
    "Grid View",
    "List View",
    "Compact View",
    "Detailed View"
  ];

  // Sidebar position options
  const sidebarPositionOptions = [
    "Left",
    "Right",
    "Hidden"
  ];

  // Card border radius options
  const cardBorderRadiusOptions = [
    "None",
    "Small",
    "Medium",
    "Large",
    "Extra Large"
  ];

  // Table density options
  const tableDensityOptions = [
    "Compact",
    "Default",
    "Comfortable",
    "Spacious"
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium flex items-center gap-1 bg-white">
            Reset
          </button>
          <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium flex items-center gap-1">
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 text-sm border-b border-gray-200 hover:bg-gray-50 ${
                  activeSection === item ? "bg-gray-50 font-medium" : ""
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-md border border-gray-200 p-6">
          {activeSection === "General Settings" && (
            <>
              <h2 className="text-xl font-semibold mb-2">General Settings</h2>
              <p className="text-gray-500 text-sm mb-6">
                Configure your business information and general preferences.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="TheSci ERP"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Your business name as it appears on official documents
                    </p>
                  </div>

                  {/* Owner Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter owner name"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Name of the business owner or primary contact
                    </p>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter email address"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Primary email for business communications
                    </p>
                  </div>

                  {/* Business Sector */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Sector
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={businessSectors[0]}
                      >
                        {businessSectors.map((sector, index) => (
                          <option key={index} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Industry or sector your business operates in
                    </p>
                  </div>

                  {/* Currency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={currencies[0]}
                      >
                        {currencies.map((currency, index) => (
                          <option key={index} value={currency}>
                            {currency}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default currency for transactions and reports
                    </p>
                  </div>

                  {/* Auto Backup */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Auto Backup
                      </label>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="autoBackup"
                          id="autoBackup"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="autoBackup"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Automatically create backups of your business data
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Business Logo */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Logo
                    </label>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                        TS
                      </div>
                      <div>
                        <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                          <Upload className="h-4 w-4" /> Upload Logo
                        </button>
                        <p className="text-xs text-gray-500 mt-1">
                          Recommended size: 512x512px, PNG or JPG format
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter contact number"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Primary contact number for business communications
                    </p>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={businessTypes[0]}
                      >
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Legal structure of your business
                    </p>
                  </div>

                  {/* Fiscal Year Start Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fiscal Year Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue="April 1st, 2024"
                        readOnly
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Starting date of your financial year
                    </p>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timezone
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={timezones[0]}
                      >
                        {timezones.map((timezone, index) => (
                          <option key={index} value={timezone}>
                            {timezone}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default timezone for your business operations
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "GST & Tax Settings" && (
            <>
              <h2 className="text-xl font-semibold mb-2">GST & Tax Settings</h2>
              <p className="text-gray-500 text-sm mb-6">
                Configure your GST registration details and tax preferences.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* GSTIN */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GSTIN (Goods and Services Tax Identification Number)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your 15-digit GSTIN"
                      />
                      <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                        Verify
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Your 15-digit GST Identification Number
                    </p>
                  </div>

                  {/* GST Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GST Type
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={gstTypes[0]}
                      >
                        {gstTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Type of GST registration (Regular or Composition scheme)
                    </p>
                  </div>

                  {/* TAN Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      TAN Number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter TAN (if applicable)"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Tax Deduction and Collection Account Number (if
                      applicable)
                    </p>
                  </div>

                  {/* GSTR Return Frequency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GSTR Return Frequency
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={returnFrequencies[0]}
                      >
                        {returnFrequencies.map((frequency, index) => (
                          <option key={index} value={frequency}>
                            {frequency}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      How often you file your GST returns
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* State of Registration */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State of Registration
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={stateOptions[0]}
                      >
                        {stateOptions.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      State where your business is registered for GST
                    </p>
                  </div>

                  {/* PAN Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter 10-digit PAN"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Your 10-digit Permanent Account Number
                    </p>
                  </div>

                  {/* HSN/SAC Code Library */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      HSN/SAC Code Library
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 pl-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search HSN/SAC codes"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Search for Harmonized System of Nomenclature codes for
                      your products
                    </p>
                  </div>

                  {/* Auto GST Rounding */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Auto GST Rounding
                      </label>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="autoGSTRounding"
                          id="autoGSTRounding"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="autoGSTRounding"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      Automatically round GST amounts to nearest ₹1
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Inventory Preferences" && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Inventory Preferences
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Configure how you track, manage, and value your inventory.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Batch & Expiry Tracking */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Batch & Expiry Tracking
                        </h3>
                        <p className="text-xs text-gray-500">
                          Track inventory by batch number and expiry date
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="batchTracking"
                          id="batchTracking"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="batchTracking"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Default Reorder Threshold */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Reorder Threshold
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="10"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Default quantity at which to reorder inventory
                    </p>
                  </div>

                  {/* Default Unit of Measure */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Unit of Measure
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={unitOfMeasureOptions[0]}
                      >
                        {unitOfMeasureOptions.map((unit, index) => (
                          <option key={index} value={unit}>
                            {unit}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default unit of measure for new products
                    </p>
                  </div>

                  {/* Barcode Settings */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Barcode Settings
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={barcodeSettingsOptions[0]}
                      >
                        {barcodeSettingsOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Choose whether to auto-generate barcodes or enter them
                      manually
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Low Stock Notifications */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Low Stock Notifications
                        </h3>
                        <p className="text-xs text-gray-500">
                          Receive alerts when inventory is below threshold
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="lowStockNotifications"
                          id="lowStockNotifications"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="lowStockNotifications"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Inventory Valuation Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Inventory Valuation Method
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={valuationMethods[0]}
                      >
                        {valuationMethods.map((method, index) => (
                          <option key={index} value={method}>
                            {method}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Method used to value your inventory for accounting
                      purposes
                    </p>
                  </div>

                  {/* Custom Unit of Measure */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Custom Unit of Measure
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter custom unit (e.g. Bundle)"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Define a custom unit of measure if needed
                    </p>
                  </div>

                  {/* Barcode Prefix */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Barcode Prefix
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="TS"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Prefix used for auto-generated barcodes
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Billing & Invoice Settings" && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Billing & Invoice Settings
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Customize how your invoices look and function.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Invoice Prefix */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Prefix
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="INV"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Prefix that appears before invoice number
                    </p>
                  </div>

                  {/* Invoice Starting Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Starting Number
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="1001"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Starting number for your invoices (e.g., 1001)
                    </p>
                  </div>

                  {/* Custom Payment Terms (Days) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Custom Payment Terms (Days)
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter custom days"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Custom number of days for payment due date
                    </p>
                  </div>

                  {/* Digital Signature */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Digital Signature
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <select
                          className="w-40 border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                          defaultValue={digitalSignatureOptions[0]}
                        >
                          {digitalSignatureOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      </div>
                      <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                        <Upload className="h-4 w-4" /> Upload Signature
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Your digital signature to appear on invoices
                    </p>
                  </div>

                  {/* Auto-email Invoices */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Auto-email Invoices
                        </h3>
                        <p className="text-xs text-gray-500">
                          Automatically email invoices when created
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="autoEmailInvoices"
                          id="autoEmailInvoices"
                          className="sr-only"
                        />
                        <label
                          htmlFor="autoEmailInvoices"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Invoice Suffix */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Suffix
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="FY24"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Suffix that appears after invoice number
                    </p>
                  </div>

                  {/* Default Payment Terms */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Payment Terms
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={paymentTermsOptions[0]}
                      >
                        {paymentTermsOptions.map((term, index) => (
                          <option key={index} value={term}>
                            {term}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default payment terms for new invoices
                    </p>
                  </div>

                  {/* Invoice Template */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Invoice Template
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={invoiceTemplateOptions[0]}
                      >
                        {invoiceTemplateOptions.map((template, index) => (
                          <option key={index} value={template}>
                            {template}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Design template used for your invoices
                    </p>
                  </div>

                  {/* Template Preview */}
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <div className="h-64 bg-white flex flex-col items-center justify-center">
                      <FileText className="h-16 w-16 text-gray-300 mb-2" />
                      <p className="text-sm text-gray-500">
                        Template Preview: Standard Template
                      </p>
                    </div>
                  </div>

                  {/* QR/UPI Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      UPI QR Code
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <select
                          className="w-40 border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                          defaultValue="No QR code"
                        >
                          <option value="No QR code">No QR code</option>
                          <option value="Upload QR code">Upload QR code</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      </div>
                      <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                        <Upload className="h-4 w-4" /> Upload QR Code
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Your UPI QR code to include on invoices
                    </p>
                  </div>

                  {/* Show GST Breakdown */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Show GST Breakdown
                        </h3>
                        <p className="text-xs text-gray-500">
                          Display CGST/SGST/IGST breakdown on invoices
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="showGSTBreakdown"
                          id="showGSTBreakdown"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="showGSTBreakdown"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Accounting Settings" && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Accounting Settings
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Configure your accounting preferences and ledger mappings.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Manual Journal Entries */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Manual Journal Entries
                        </h3>
                        <p className="text-xs text-gray-500">
                          Allow creation of manual journal entries
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="manualJournalEntries"
                          id="manualJournalEntries"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="manualJournalEntries"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Bank Reconciliation */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Bank Reconciliation
                        </h3>
                        <p className="text-xs text-gray-500">
                          Enable bank reconciliation features
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="bankReconciliation"
                          id="bankReconciliation"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="bankReconciliation"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Contra Entries */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Contra Entries
                        </h3>
                        <p className="text-xs text-gray-500">
                          Enable contra entries for cash/bank transfers
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="contraEntries"
                          id="contraEntries"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="contraEntries"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Payment Entries */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Payment Entries
                        </h3>
                        <p className="text-xs text-gray-500">
                          Enable payment entries for outgoing payments
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="paymentEntries"
                          id="paymentEntries"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="paymentEntries"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Petty Cash Tracking */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Petty Cash Tracking
                        </h3>
                        <p className="text-xs text-gray-500">
                          Enable tracking of petty cash transactions
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="pettyCashTracking"
                          id="pettyCashTracking"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="pettyCashTracking"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Default Ledger Mapping */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Ledger Mapping
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={ledgerMappingOptions[0]}
                      >
                        {ledgerMappingOptions.map((mapping, index) => (
                          <option key={index} value={mapping}>
                            {mapping}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default mapping for transaction categories to ledgers
                    </p>
                  </div>

                  {/* Receipt Entries */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Receipt Entries
                        </h3>
                        <p className="text-xs text-gray-500">
                          Enable receipt entries for incoming payments
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="receiptEntries"
                          id="receiptEntries"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="receiptEntries"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Payments & Finance" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    Payments & Finance
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Configure payment methods, gateways, and reminders.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium">
                    Reset
                  </button>
                  <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Preferred Payment Modes */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-800 mb-1">
                  Preferred Payment Modes
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Select which payment modes are accepted for your business
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {/* Cash */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Cash</span>
                    </label>
                  </div>

                  {/* UPI */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">UPI</span>
                    </label>
                  </div>

                  {/* Bank Transfer */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">
                        Bank Transfer
                      </span>
                    </label>
                  </div>

                  {/* Cheque */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Cheque</span>
                    </label>
                  </div>

                  {/* Credit Card */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Credit Card</span>
                    </label>
                  </div>

                  {/* Debit Card */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">Debit Card</span>
                    </label>
                  </div>

                  {/* Digital Wallet */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">
                        Digital Wallet
                      </span>
                    </label>
                  </div>

                  {/* Credit/Account */}
                  <div className="border border-gray-200 rounded-md p-3 bg-white">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="mt-0.5"
                        defaultChecked
                      />
                      <span className="text-sm text-gray-700">
                        Credit/Account
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Gateways */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Razorpay Integration */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Razorpay Integration
                    </h3>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="razorpayIntegration"
                        id="razorpayIntegration"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="razorpayIntegration"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Enable online payments via Razorpay
                  </p>

                  {/* Razorpay Key ID */}
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Razorpay Key ID
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Razorpay Key ID"
                    />
                    <a
                      href="#"
                      className="text-xs text-blue-600 mt-1 inline-block"
                    >
                      API Key ID from your Razorpay dashboard
                    </a>
                  </div>

                  {/* Razorpay Secret Key */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Razorpay Secret Key
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Razorpay Secret Key"
                    />
                    <a
                      href="#"
                      className="text-xs text-blue-600 mt-1 inline-block"
                    >
                      Secret Key from your Razorpay dashboard
                    </a>
                  </div>
                </div>

                {/* Stripe Integration */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Stripe Integration
                    </h3>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="stripeIntegration"
                        id="stripeIntegration"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="stripeIntegration"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Enable online payments via Stripe
                  </p>

                  {/* Stripe API Key */}
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Stripe API Key
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Stripe API Key"
                    />
                    <a
                      href="#"
                      className="text-xs text-blue-600 mt-1 inline-block"
                    >
                      API Key from your Stripe dashboard
                    </a>
                  </div>

                  {/* Stripe Secret Key */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Stripe Secret Key
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Stripe Secret Key"
                    />
                    <a
                      href="#"
                      className="text-xs text-blue-600 mt-1 inline-block"
                    >
                      Secret Key from your Stripe dashboard
                    </a>
                  </div>
                </div>
              </div>

              {/* Payment Reminders */}
              <div className="grid grid-cols-2 gap-6">
                {/* Auto Payment Reminders */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Auto Payment Reminders
                    </h3>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="autoPaymentReminders"
                        id="autoPaymentReminders"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="autoPaymentReminders"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Automatically send reminders for overdue payments
                  </p>

                  {/* Reminder Interval */}
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Reminder Interval
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={reminderIntervalOptions[0]}
                      >
                        {reminderIntervalOptions.map((interval, index) => (
                          <option key={index} value={interval}>
                            {interval}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      How often to send payment reminders
                    </p>
                  </div>
                </div>

                {/* Overdue Payment Alerts */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-800">
                      Overdue Payment Alerts
                    </h3>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="overduePaymentAlerts"
                        id="overduePaymentAlerts"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="overduePaymentAlerts"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">
                    Receive alerts for overdue payments
                  </p>

                  {/* Payment Link Expiry */}
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Payment Link Expiry (Days)
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="7"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Number of days until payment links expire
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Notifications & Alerts" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    Notifications & Alerts
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Configure when and how you receive notifications and alerts.
                  </p>
                </div>
              </div>

              {/* Notification Channels */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  Notification Channels
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Email Notifications */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-800">
                        Email Notifications
                      </h4>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="emailNotifications"
                          id="emailNotifications"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="emailNotifications"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Receive notifications via email
                    </p>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter email address"
                    />
                  </div>

                  {/* SMS Notifications */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-800">
                        SMS Notifications
                      </h4>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="smsNotifications"
                          id="smsNotifications"
                          className="sr-only"
                        />
                        <label
                          htmlFor="smsNotifications"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                          ></span>
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Receive notifications via SMS
                    </p>
                  </div>

                  {/* WhatsApp Notifications */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-800">
                        WhatsApp Notifications
                      </h4>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="whatsappNotifications"
                          id="whatsappNotifications"
                          className="sr-only"
                        />
                        <label
                          htmlFor="whatsappNotifications"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                          ></span>
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Receive notifications via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Notification Types */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  Notification Types
                </h3>
                <div className="space-y-3">
                  {/* Low Stock Alerts */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          Low Stock Alerts
                        </h4>
                        <p className="text-xs text-gray-500">
                          Notify when inventory items fall below reorder
                          threshold
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="lowStockAlerts"
                          id="lowStockAlerts"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="lowStockAlerts"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Payment Due Reminders */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          Payment Due Reminders
                        </h4>
                        <p className="text-xs text-gray-500">
                          Notify when customer payments are due or overdue
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="paymentDueReminders"
                          id="paymentDueReminders"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="paymentDueReminders"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Invoice Notifications */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          Invoice Notifications
                        </h4>
                        <p className="text-xs text-gray-500">
                          Notify when invoices are created, sent, or paid
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="invoiceNotifications"
                          id="invoiceNotifications"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="invoiceNotifications"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* GST Filing Reminders */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          GST Filing Reminders
                        </h4>
                        <p className="text-xs text-gray-500">
                          Notify when GST return filing dates are approaching
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="gstFilingReminders"
                          id="gstFilingReminders"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="gstFilingReminders"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Order Updates */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">
                          Purchase Order Updates
                        </h4>
                        <p className="text-xs text-gray-500">
                          Notify on purchase order status changes
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="purchaseOrderUpdates"
                          id="purchaseOrderUpdates"
                          className="sr-only"
                        />
                        <label
                          htmlFor="purchaseOrderUpdates"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Alert Rules */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    Custom Alert Rules
                  </h3>
                  <button className="px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded-md text-xs font-medium flex items-center gap-1">
                    <PlusCircle className="h-3 w-3" /> Add Rule
                  </button>
                </div>
                <div className="bg-white p-6 border border-gray-200 rounded-md flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-500 mb-1">
                    No custom alert rules configured.
                  </p>
                  <p className="text-xs text-gray-400">
                    Add a rule to get started.
                  </p>
                </div>
              </div>

              {/* Notification Schedule */}
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  Notification Schedule
                </h3>
                <p className="text-xs text-gray-500 mb-3">
                  Select days when you prefer to receive notifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {notificationDays.map((day) => (
                    <label
                      key={day.id}
                      className="flex items-center gap-2 bg-white px-3 py-2 border border-gray-200 rounded-md cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name={day.id}
                        id={day.id}
                        defaultChecked={[
                          "monday",
                          "tuesday",
                          "wednesday",
                          "thursday",
                          "friday",
                        ].includes(day.id)}
                      />
                      <span className="text-sm text-gray-700">{day.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === "Data & Export" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Data & Export</h2>
                  <p className="text-gray-500 text-sm">
                    Configure backup preferences and export your business data.
                  </p>
                </div>
              </div>

              {/* Export Data Section */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  Export Data
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Export as JSON */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
                    <FileJson className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="text-sm font-medium text-gray-800 mb-1">
                      Export as JSON
                    </h4>
                    <p className="text-xs text-gray-500 text-center mb-3">
                      Full data backup
                    </p>
                    <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
                      <Download className="h-3 w-3" /> Download
                    </button>
                  </div>

                  {/* Export as CSV */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
                    <File className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="text-sm font-medium text-gray-800 mb-1">
                      Export as CSV
                    </h4>
                    <p className="text-xs text-gray-500 text-center mb-3">
                      Spreadsheet compatible
                    </p>
                    <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
                      <Download className="h-3 w-3" /> Download
                    </button>
                  </div>

                  {/* Export as PDF */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
                    <File-text className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="text-sm font-medium text-gray-800 mb-1">
                      Export as PDF
                    </h4>
                    <p className="text-xs text-gray-500 text-center mb-3">
                      Reports and documents
                    </p>
                    <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
                      <Download className="h-3 w-3" /> Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Backup Section */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-gray-800">Backup</h3>
                  <button className="px-3 py-1.5 bg-gray-900 text-white rounded-md text-xs font-medium flex items-center gap-1">
                    <Save className="h-3 w-3" /> Backup Now
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Auto Backup Destination */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Auto-backup Destination
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={backupDestinationOptions[0]}
                      >
                        {backupDestinationOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Where to store automatic backups
                    </p>
                  </div>

                  {/* Backup Frequency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Backup Frequency
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={backupFrequencyOptions[0]}
                      >
                        {backupFrequencyOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      How often to create automatic backups
                    </p>
                  </div>

                  {/* Retain Backups */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Retain Backups
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={retainBackupsOptions[2]}
                      >
                        {retainBackupsOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      How long to keep old backups
                    </p>
                  </div>
                </div>
              </div>

              {/* Import Data Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-3">
                  Import Data
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {/* Import Full Backup */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex items-center mb-3">
                      <Database className="h-5 w-5 text-gray-500 mr-2" />
                      <h4 className="text-sm font-medium text-gray-800">
                        Import Full Backup
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      Restore your system from a previous backup file
                    </p>
                    <button className="w-full py-2 border border-gray-300 rounded-md text-xs font-medium flex items-center justify-center gap-1 bg-white">
                      <Upload className="h-3 w-3" /> Select Backup File
                    </button>
                  </div>

                  {/* Import from CSV */}
                  <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
                    <div className="flex items-center mb-3">
                      <File className="h-5 w-5 text-gray-500 mr-2" />
                      <h4 className="text-sm font-medium text-gray-800">
                        Import from CSV
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      Import customers, inventory, or other data from CSV files
                    </p>
                    <button className="w-full py-2 border border-gray-300 rounded-md text-xs font-medium flex items-center justify-center gap-1 bg-white">
                      <Upload className="h-3 w-3" /> Upload CSV File
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Mobile & PWA" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">Mobile & PWA</h2>
                  <p className="text-gray-500 text-sm">
                    Configure settings related to mobile apps and progressive
                    web app functionality.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Offline Sync */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Offline Sync
                        </h3>
                        <p className="text-xs text-gray-500">
                          Allow app to work offline and sync when back online
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="offlineSync"
                          id="offlineSync"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="offlineSync"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Cache Expiry Interval */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cache Expiry Interval
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={cacheExpiryOptions[2]}
                      >
                        {cacheExpiryOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      How long to keep cached data before refreshing
                    </p>
                  </div>

                  {/* Automatic Updates */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Automatic Updates
                        </h3>
                        <p className="text-xs text-gray-500">
                          Automatically update the app when new versions are
                          available
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="automaticUpdates"
                          id="automaticUpdates"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="automaticUpdates"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Background Sync */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Background Sync
                        </h3>
                        <p className="text-xs text-gray-500">
                          Sync data in the background while app is not in use
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="backgroundSync"
                          id="backgroundSync"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="backgroundSync"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Data Usage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Data Usage
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={mobileDataOptions[0]}
                      >
                        {mobileDataOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Controls data usage when on mobile networks
                    </p>
                  </div>

                  {/* Biometric Authentication */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Biometric Authentication
                        </h3>
                        <p className="text-xs text-gray-500">
                          Allow login using fingerprint or face recognition on
                          supported devices
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="biometricAuth"
                          id="biometricAuth"
                          className="sr-only"
                        />
                        <label
                          htmlFor="biometricAuth"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "Language & Localization" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    Language & Localization
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Configure language preferences and regional settings.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-md text-sm font-medium">
                    Reset
                  </button>
                  <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Default Language */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Language
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue="English"
                      >
                        {languageOptions.map((lang) => (
                          <option key={lang.code} value={lang.name}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Default language for all users
                    </p>
                  </div>

                  {/* Available Languages */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Available Languages
                    </label>
                    <p className="text-xs text-gray-500 mb-3">
                      Select which languages are available for users
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {/* English */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">English</span>
                        </label>
                      </div>

                      {/* Hindi */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">
                            Hindi (हिंदी)
                          </span>
                        </label>
                      </div>

                      {/* Bengali */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">
                            Bengali (বাংলা)
                          </span>
                        </label>
                      </div>

                      {/* Tamil */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-0.5"
                            defaultChecked
                          />
                          <span className="text-sm text-gray-700">
                            Tamil (தமிழ்)
                          </span>
                        </label>
                      </div>

                      {/* Telugu */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="checkbox" className="mt-0.5" />
                          <span className="text-sm text-gray-700">
                            Telugu (తెలుగు)
                          </span>
                        </label>
                      </div>

                      {/* Marathi */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="checkbox" className="mt-0.5" />
                          <span className="text-sm text-gray-700">
                            Marathi (मराठी)
                          </span>
                        </label>
                      </div>

                      {/* Gujarati */}
                      <div className="border border-gray-200 rounded-md p-3 bg-white">
                        <label className="flex items-start gap-2 cursor-pointer">
                          <input type="checkbox" className="mt-0.5" />
                          <span className="text-sm text-gray-700">
                            Gujarati (ગુજરાતી)
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Date Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date Format
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={dateFormatOptions[0]}
                      >
                        {dateFormatOptions.map((format, index) => (
                          <option key={index} value={format}>
                            {format}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Format for displaying dates throughout the application
                    </p>
                  </div>

                  {/* Fiscal Year Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fiscal Year Format
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={fiscalYearFormatOptions[0]}
                      >
                        {fiscalYearFormatOptions.map((format, index) => (
                          <option key={index} value={format}>
                            {format}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Format for displaying fiscal years
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Multi-language Support */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Multi-language Support
                        </h3>
                        <p className="text-xs text-gray-500">
                          Allow users to choose their preferred language
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="multiLanguageSupport"
                          id="multiLanguageSupport"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="multiLanguageSupport"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Currency Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency Format
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                        defaultValue={currencyFormatOptions[0]}
                      >
                        {currencyFormatOptions.map((format, index) => (
                          <option key={index} value={format}>
                            {format}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Format for displaying currency values
                    </p>
                  </div>

                  {/* Indian Number Format */}
                  <div className="bg-white p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h3 className="text-sm font-medium text-gray-800">
                          Indian Number Format
                        </h3>
                        <p className="text-xs text-gray-500">
                          Use Indian number format (lakhs, crores)
                        </p>
                      </div>
                      <div className="relative inline-block w-10 align-middle select-none">
                        <input
                          type="checkbox"
                          name="indianNumberFormat"
                          id="indianNumberFormat"
                          className="sr-only"
                          defaultChecked
                        />
                        <label
                          htmlFor="indianNumberFormat"
                          className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "User Management" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    User Management
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Manage users and their permissions in your organization.
                  </p>
                </div>
                <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium flex items-center gap-1">
                  <UserPlus className="h-4 w-4" /> Add User
                </button>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                        Email
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                        Role
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                        Last Active
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {user.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-blue-600">
                          {user.email}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.role === "Owner"
                                ? "bg-gray-100 text-gray-800"
                                : user.role === "Sales"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-500">
                          {user.lastActive}
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Security Settings */}
              <div className="grid grid-cols-2 gap-6">
                {/* Two-Factor Authentication */}
                <div className="bg-white p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-xs text-gray-500">
                        Require 2FA for critical actions
                      </p>
                    </div>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="twoFactorAuth"
                        id="twoFactorAuth"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="twoFactorAuth"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Activity Log Access */}
                <div className="bg-white p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        Activity Log Access
                      </h3>
                      <p className="text-xs text-gray-500">
                        Allow users to view activity logs
                      </p>
                    </div>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="activityLogAccess"
                        id="activityLogAccess"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="activityLogAccess"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Device Login History */}
                <div className="bg-white p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        Device Login History
                      </h3>
                      <p className="text-xs text-gray-500">
                        Track and display device login history
                      </p>
                    </div>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="deviceLoginHistory"
                        id="deviceLoginHistory"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="deviceLoginHistory"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Login Notifications */}
                <div className="bg-white p-4 border border-gray-200 rounded-md">
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <h3 className="text-sm font-medium text-gray-800">
                        Login Notifications
                      </h3>
                      <p className="text-xs text-gray-500">
                        Send email notifications on new device logins
                      </p>
                    </div>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input
                        type="checkbox"
                        name="loginNotifications"
                        id="loginNotifications"
                        className="sr-only"
                        defaultChecked
                      />
                      <label
                        htmlFor="loginNotifications"
                        className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                      >
                        <span
                          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "UI & Appearance" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">UI & Appearance</h2>
                  <p className="text-gray-500 text-sm">Customize the look and feel of your application.</p>
                </div>
              </div>

              {/* Theme Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Theme</h3>
                <div className="grid grid-cols-3 gap-4 mb-1">
                  {themeOptions.map((theme) => (
                    <div
                      key={theme.id}
                      className={`border ${theme.id === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-md p-4 flex flex-col items-center justify-center cursor-pointer`}
                    >
                      <theme.icon className={`h-6 w-6 ${theme.id === 'light' ? 'text-blue-500' : 'text-gray-500'} mb-2`} />
                      <span className={`text-sm ${theme.id === 'light' ? 'font-medium text-blue-700' : 'text-gray-700'}`}>{theme.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500">Select your preferred color theme</p>
              </div>

              {/* Font Size */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Font Size</h3>
                <div className="relative mb-1">
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    defaultValue={fontSizeOptions[1]}
                  >
                    {fontSizeOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Text size throughout the application</p>
              </div>

              {/* Dashboard Layout */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Dashboard Layout</h3>
                <div className="relative mb-1">
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    defaultValue={dashboardLayoutOptions[0]}
                  >
                    {dashboardLayoutOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Preferred layout style for dashboard elements</p>
              </div>

              {/* Sidebar Position */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Sidebar Position</h3>
                <div className="relative mb-1">
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    defaultValue={sidebarPositionOptions[0]}
                  >
                    {sidebarPositionOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Position of the sidebar navigation</p>
              </div>

              {/* Primary Color */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Primary Color</h3>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full border border-gray-300"></div>
                  <input
                    type="text"
                    className="w-24 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="#3F51B5"
                    readOnly
                  />
                </div>
                <p className="text-xs text-gray-500">Main accent color for buttons and highlights</p>
              </div>

              {/* Card Border Radius */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">Card Border Radius</h3>
                <div className="relative mb-1">
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    defaultValue={cardBorderRadiusOptions[2]}
                  >
                    {cardBorderRadiusOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Roundness of cards and UI elements</p>
              </div>

              {/* App Logo */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-800 mb-3">App Logo</h3>
                <div className="flex items-start gap-4 mb-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                    TS
                  </div>
                  <div>
                    <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                      <Upload className="h-4 w-4" /> Upload Logo
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Logo shown in the app UI (ideal size: 128×128px)</p>
              </div>

              {/* Table Density */}
              <div>
                <h3 className="text-sm font-medium text-gray-800 mb-3">Table Density</h3>
                <div className="relative mb-1">
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    defaultValue={tableDensityOptions[1]}
                  >
                    {tableDensityOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
                <p className="text-xs text-gray-500">Spacing in data tables and lists</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
