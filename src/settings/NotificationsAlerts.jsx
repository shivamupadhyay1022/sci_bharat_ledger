import React from "react";
import { PlusCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const NotificationsAlerts = () => {
  const { t } = useTranslation();

  // Notification days
  const notificationDays = [
    { id: "monday", label: t("monday") },
    { id: "tuesday", label: t("tuesday") },
    { id: "wednesday", label: t("wednesday") },
    { id: "thursday", label: t("thursday") },
    { id: "friday", label: t("friday") },
    { id: "saturday", label: t("saturday") },
    { id: "sunday", label: t("sunday") },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("notifications_alerts")}</h2>
          <p className="text-gray-500 text-sm">
            {t("notifications_alerts_description")}
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
          {t("notification_types")}
        </h3>
        <div className="space-y-3">
          {/* Low Stock Alerts */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium text-gray-800">
                  {t("low_stock_alerts")}
                </h4>
                <p className="text-xs text-gray-500">
                  {t("low_stock_alerts_desc")}
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
                  {t("gst_filing_reminders")}
                </h4>
                <p className="text-xs text-gray-500">
                  {t("gst_filing_reminders_desc")}
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
            {t("custom_alert_rules")}
          </h3>
          <button className="px-2 py-1 border border-gray-300 bg-white text-gray-700 rounded-md text-xs font-medium flex items-center gap-1">
            <PlusCircle className="h-3 w-3" /> {t("add_rule")}
          </button>
        </div>
        <div className="bg-white p-6 border border-gray-200 rounded-md flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 mb-1">
            {t("no_custom_alert_rules")}
          </p>
          <p className="text-xs text-gray-400">{t("add_rule_to_get_started")}</p>
        </div>
      </div>

      {/* Notification Schedule */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("notification_schedule")}
        </h3>
        <p className="text-xs text-gray-500 mb-3">
          {t("notification_schedule_desc")}
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
  );
};

export default NotificationsAlerts;
