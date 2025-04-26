import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Settings as SettingsIcon } from "lucide-react";

// Import all settings tab components
import GeneralSettings from "./GeneralSettings";
import GSTTaxSettings from "./GSTTaxSettings";
import InventoryPreferences from "./InventoryPreferences";
import BillingInvoiceSettings from "./BillingInvoiceSettings";
import AccountingSettings from "./AccountingSettings";
import PaymentsFinance from "./PaymentsFinance";
import UserManagement from "./UserManagement";
import LanguageLocalization from "./LanguageLocalization";
import MobilePWA from "./MobilePWA";
import DataExport from "./DataExport";
import NotificationsAlerts from "./NotificationsAlerts";
import UIAppearance from "./UIAppearance";
import SecurityPrivacy from "./SecurityPrivacy";
import AIAutomation from "./AIAutomation";
import SupportFeedback from "./SupportFeedback";

const Settings = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(t("ui_appearance"));

  // Sidebar navigation items
  const sidebarItems = [
    t("general_settings"),
    t("gst_tax_settings"),
    t("inventory_preferences"),
    t("billing_invoice_settings"),
    t("accounting_settings"),
    t("payments_finance"),
    t("user_management"),
    t("language_localization"),
    t("mobile_pwa"),
    t("data_export"),
    t("notifications_alerts"),
    t("ui_appearance"),
    t("security_privacy"),
    t("ai_automation"),
    t("support_feedback"),
  ];

  // Function to render the active component based on the selected section
  const renderActiveComponent = () => {
    switch (activeSection) {
      case t("general_settings"):
        return <GeneralSettings />;
      case t("gst_tax_settings"):
        return <GSTTaxSettings />;
      case t("inventory_preferences"):
        return <InventoryPreferences />;
      case t("billing_invoice_settings"):
        return <BillingInvoiceSettings />;
      case t("accounting_settings"):
        return <AccountingSettings />;
      case t("payments_finance"):
        return <PaymentsFinance />;
      case t("user_management"):
        return <UserManagement />;
      case t("language_localization"):
        return <LanguageLocalization />;
      case t("mobile_pwa"):
        return <MobilePWA />;
      case t("data_export"):
        return <DataExport />;
      case t("notifications_alerts"):
        return <NotificationsAlerts />;
      case t("ui_appearance"):
        return <UIAppearance />;
      case t("security_privacy"):
        return <SecurityPrivacy />;
      case t("ai_automation"):
        return <AIAutomation />;
      case t("support_feedback"):
        return <SupportFeedback />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{t("settings")}</h1>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium flex items-center gap-1 bg-white dark:bg-gray-700 dark:text-white">
            {t("reset")}
          </button>
          <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium flex items-center gap-1 dark:bg-blue-700">
            {t("save_changes")}
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`w-full text-left px-4 py-3 text-sm border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white ${
                  activeSection === item ? "bg-gray-50 dark:bg-gray-700 font-medium" : ""
                }`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-6 dark:text-white">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
