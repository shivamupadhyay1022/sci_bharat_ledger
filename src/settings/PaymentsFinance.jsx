import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const PaymentsFinance = () => {
  const { t } = useTranslation();
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

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("payments_finance")}</h2>
          <p className="text-gray-500 text-sm">
            {t("payments_finance_description")}
          </p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("payment_methods")}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {t("payment_methods_desc")}
        </p>

        <div className="grid grid-cols-3 gap-3">
          {/* Cash */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("cash")}</span>
            </label>
          </div>

          {/* UPI */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("upi")}</span>
            </label>
          </div>

          {/* Bank Transfer */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("bank_transfer")}</span>
            </label>
          </div>

          {/* Cheque */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("cheque")}</span>
            </label>
          </div>

          {/* Credit Card */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" />
              <span className="text-sm text-gray-700">{t("credit_card")}</span>
            </label>
          </div>

          {/* Debit Card */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" />
              <span className="text-sm text-gray-700">{t("debit_card")}</span>
            </label>
          </div>

          {/* Digital Wallet */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("digital_wallet")}</span>
            </label>
          </div>

          {/* Credit/Account */}
          <div className="border border-gray-200 rounded-md p-3 bg-white">
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="mt-0.5" defaultChecked />
              <span className="text-sm text-gray-700">{t("credit_account")}</span>
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
              {t("razorpay_integration")}
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
            {t("razorpay_desc")}
          </p>

          {/* Razorpay Key ID */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t("razorpay_key_id")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Razorpay Key ID"
            />
            <a href="#" className="text-xs text-blue-600 mt-1 inline-block">
              {t("razorpay_key_desc")}
            </a>
          </div>

          {/* Razorpay Secret */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t("razorpay_secret")}
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Razorpay Secret"
            />
            <a href="#" className="text-xs text-blue-600 mt-1 inline-block">
              {t("razorpay_secret_desc")}
            </a>
          </div>
        </div>

        {/* PayTM Integration */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-800">
              {t("paytm_integration")}
            </h3>
            <div className="relative inline-block w-10 align-middle select-none">
              <input
                type="checkbox"
                name="paytmIntegration"
                id="paytmIntegration"
                className="sr-only"
              />
              <label
                htmlFor="paytmIntegration"
                className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              >
                <span
                  className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                ></span>
              </label>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            {t("paytm_desc")}
          </p>

          {/* PayTM Merchant ID */}
          <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t("paytm_merchant_id")}
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter PayTM Merchant ID"
              disabled
            />
          </div>

          {/* PayTM Merchant Key */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {t("paytm_merchant_key")}
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter PayTM Merchant Key"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Payment Reminders */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Auto Payment Reminders */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("auto_payment_reminders")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("auto_payment_desc")}
                </p>
              </div>
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
          </div>

          {/* Reminder Interval */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("reminder_interval")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={reminderIntervalOptions[2]}
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
              {t("reminder_interval_desc")}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Late Payment Fees */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("late_payment_fees")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("late_payment_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="latePaymentFees"
                  id="latePaymentFees"
                  className="sr-only"
                />
                <label
                  htmlFor="latePaymentFees"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Bank Account Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("bank_account_details")}
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Enter your bank account details for bank transfers"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              {t("bank_account_desc")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsFinance;
