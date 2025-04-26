import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const GSTTaxSettings = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t("gst_tax_settings")}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {t("gst_tax_description")}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* GSTIN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("gstin")}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your 15-digit GSTIN"
              />
              <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                {t("verify")}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("gstin_desc")}
            </p>
          </div>

          {/* GST Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("gst_type")}
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
              {t("gst_type_desc")}
            </p>
          </div>

          {/* GSTR Return Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("gstr_return_frequency")}
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
              {t("gstr_return_desc")}
            </p>
          </div>

          {/* E-Invoicing */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                {t("e_invoicing")}
              </label>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="eInvoicing"
                  id="eInvoicing"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="eInvoicing"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              {t("e_invoicing_desc")}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* State of Registration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("state_of_registration")}
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
              {t("state_registration_desc")}
            </p>
          </div>

          {/* PAN Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("pan_number")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your 10-digit PAN"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("pan_desc")}
            </p>
          </div>

          {/* Show GST Breakdown */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("show_gst_breakdown")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("gst_breakdown_desc")}
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

          {/* Auto GST Rounding */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                {t("auto_gst_rounding")}
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
              {t("gst_rounding_desc")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GSTTaxSettings;
