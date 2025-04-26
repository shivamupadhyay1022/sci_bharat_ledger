import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const BillingInvoiceSettings = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t("billing_invoice_settings")}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {t("billing_invoice_description")}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Invoice Prefix */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("invoice_prefix")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="INV"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("prefix_desc")}
            </p>
          </div>

          {/* Invoice Starting Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("invoice_starting_number")}
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="1001"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("starting_number_desc")}
            </p>
          </div>

          {/* Digital Signature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("digital_signature")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
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
            <p className="text-xs text-gray-500 mt-1">
              {t("digital_signature_desc")}
            </p>
          </div>

          {/* Auto-send Invoices */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("auto_send_invoices")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("auto_send_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="autoSendInvoices"
                  id="autoSendInvoices"
                  className="sr-only"
                />
                <label
                  htmlFor="autoSendInvoices"
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
              {t("invoice_suffix")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="FY24"
            />
            <p className="text-xs text-gray-500 mt-1">
              {t("suffix_desc")}
            </p>
          </div>

          {/* Default Payment Terms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("default_payment_terms")}
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
              {t("payment_terms_desc")}
            </p>
          </div>

          {/* Invoice Template */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("invoice_template")}
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
              {t("template_desc")}
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
        </div>
      </div>
    </>
  );
};

export default BillingInvoiceSettings;
