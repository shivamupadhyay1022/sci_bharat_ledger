import React from "react";
import { ChevronDown, Upload } from "lucide-react";
import { useTranslation } from "react-i18next";

const GeneralSettings = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t("general_settings")}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {t("general_settings_description")}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("business_name")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="TheSci ERP"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("business_name_desc")}
            </p>
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("owner_name")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter owner name"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("owner_name_desc")}
            </p>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("email_address")}
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("email_desc")}
            </p>
          </div>

          {/* Business Sector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("business_sector")}
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
              {t("business_sector_desc")}
            </p>
          </div>

          {/* Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("currency")}
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
              {t("currency_desc")}
            </p>
          </div>

          {/* Auto Backup */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                {t("auto_backup")}
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
              {t("auto_backup_desc")}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Business Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("business_logo")}
            </label>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                TS
              </div>
              <div>
                <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
                  <Upload className="h-4 w-4" /> {t("upload_logo")}
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  {t("upload_logo_desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("business_type")}
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
              {t("business_type_desc")}
            </p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("phone_number")}
            </label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("phone_desc")}
            </p>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("business_address")}
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Enter business address"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              {t("address_desc")}
            </p>
          </div>

          {/* Timezone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("timezone")}
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
              {t("timezone_desc")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralSettings;
