import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageLocalization = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("language_localization")}</h2>
          <p className="text-gray-500 text-sm">
            {t("language_localization_description")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Default Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("default_language")}
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
              {t("default_language_desc")}
            </p>
          </div>

          {/* Available Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("available_languages")}
            </label>
            <p className="text-xs text-gray-500 mb-3">
              {t("available_languages_desc")}
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
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Multi-language Support */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("multi_language_support")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("multi_language_desc")}
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

          {/* Date Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("date_format")}
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
              {t("date_format_desc")}
            </p>
          </div>

          {/* Currency Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("currency_format")}
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
              {t("currency_format_desc")}
            </p>
          </div>

          {/* RTL Support */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("rtl_support")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("rtl_support_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="rtlSupport"
                  id="rtlSupport"
                  className="sr-only"
                />
                <label
                  htmlFor="rtlSupport"
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
  );
};

export default LanguageLocalization;
