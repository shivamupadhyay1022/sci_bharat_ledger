import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const AccountingSettings = () => {
  const { t } = useTranslation();
  // Fiscal year format options
  const fiscalYearFormatOptions = [
    "April-March (Indian)",
    "January-December (Calendar)",
    "July-June (Australian)",
    "October-September (US Federal)",
  ];

  // Default Ledger Mapping options
  const ledgerMappingOptions = [
    "Sales — Revenue Ledger",
    "Purchases — Expense Ledger",
    "Assets — Asset Ledger",
    "Liabilities — Liability Ledger",
    "Equity — Equity Ledger",
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t("accounting_settings")}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {t("accounting_description")}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Fiscal Year Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("fiscal_year_format")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
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
              {t("fiscal_year_desc")}
            </p>
          </div>

          {/* Default Ledger Mapping */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("default_ledger_mapping")}
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
              {t("ledger_mapping_desc")}
            </p>
          </div>

          {/* Journal Entries */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("journal_entries")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("journal_entries_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="journalEntries"
                  id="journalEntries"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="journalEntries"
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
                  {t("payment_entries")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("payment_entries_desc")}
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
                  {t("petty_cash_tracking")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("petty_cash_desc")}
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

          {/* Receipt Entries */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("receipt_entries")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("receipt_entries_desc")}
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

          {/* Auto Bank Reconciliation */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("auto_bank_reconciliation")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("bank_reconciliation_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="autoBankReconciliation"
                  id="autoBankReconciliation"
                  className="sr-only"
                />
                <label
                  htmlFor="autoBankReconciliation"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Depreciation Tracking */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("depreciation_tracking")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("depreciation_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="depreciationTracking"
                  id="depreciationTracking"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="depreciationTracking"
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

export default AccountingSettings;
