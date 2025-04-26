import React from "react";
import { useTranslation } from "react-i18next";

const AIAutomation = () => {
  const { t } = useTranslation();
  // Toggle component for reusability
  const Toggle = ({ isChecked = false }) => (
    <div className="relative inline-block w-10 align-middle select-none">
      <input
        type="checkbox"
        className="sr-only"
        defaultChecked={isChecked}
      />
      <div className={`block h-6 w-10 rounded-full ${isChecked ? 'bg-blue-600' : 'bg-gray-300'}`}>
        <span
          className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out ${
            isChecked ? 'translate-x-4' : 'translate-x-0'
          }`}
        ></span>
      </div>
    </div>
  );

  // Feature card component
  const FeatureCard = ({ title, description, isEnabled = false }) => (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
      <div>
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <Toggle isChecked={isEnabled} />
    </div>
  );

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("ai_automation")}</h2>
          <p className="text-gray-500 text-sm">
            {t("ai_automation_description")}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Smart Suggestions */}
            <FeatureCard
              title={t("smart_suggestions_ai")}
              description={t("smart_suggestions_ai_desc")}
              isEnabled={true}
            />

            {/* Predictive Reorder Assistant */}
            <FeatureCard
              title={t("predictive_reorder")}
              description={t("predictive_reorder_desc")}
              isEnabled={true}
            />

            {/* Auto Document Processing */}
            <FeatureCard
              title={t("auto_document_processing")}
              description={t("auto_document_processing_desc")}
              isEnabled={false}
            />

            {/* Anomaly Detection */}
            <FeatureCard
              title="Anomaly Detection"
              description="Detect unusual patterns in transactions and inventory"
              isEnabled={true}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Auto-create Ledgers */}
            <FeatureCard
              title={t("auto_create_ledgers")}
              description={t("auto_create_ledgers_desc")}
              isEnabled={true}
            />

            {/* Smart Invoice Matching */}
            <FeatureCard
              title={t("smart_invoice_matching")}
              description={t("smart_invoice_matching_desc")}
              isEnabled={true}
            />

            {/* Smart Tax Classification */}
            <FeatureCard
              title={t("smart_tax_classification")}
              description={t("smart_tax_classification_desc")}
              isEnabled={true}
            />

            {/* Customer Insights */}
            <FeatureCard
              title={t("customer_insights")}
              description={t("customer_insights_desc")}
              isEnabled={true}
            />
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            AI features use anonymized data to improve accuracy. No personal or business information is shared with third parties. All processing happens on our secure servers.
          </p>
        </div>
      </div>
    </>
  );
};

export default AIAutomation;
