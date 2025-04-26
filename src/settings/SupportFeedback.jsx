import React from "react";
import { MessageCircle, Mail, Phone, Globe, HelpCircle, Send, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const SupportFeedback = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("support_feedback")}</h2>
          <p className="text-gray-500 text-sm">
            {t("support_feedback_description")}
          </p>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("contact_support")}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Email Support */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">{t("email_support")}</h4>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              {t("email_support_desc")}
            </p>
            <a
              href="mailto:Shivam.strive@gmail.com"
              className="text-sm text-blue-600 font-medium flex items-center"
            >
              Shivam.strive@gmail.com
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Phone Support */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 text-green-600 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">{t("phone_support")}</h4>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              {t("phone_support_desc")}
            </p>
            <a
              href="tel:9470356441"
              className="text-sm text-blue-600 font-medium flex items-center"
            >
              +91 9470356441
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          {/* Live Chat */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex items-center mb-3">
              <MessageCircle className="h-5 w-5 text-purple-600 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">{t("live_chat")}</h4>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              {t("live_chat_desc")}
            </p>
            <button className="text-sm text-white bg-purple-600 px-3 py-1.5 rounded-md font-medium flex items-center">
              Start Chat
              <MessageCircle className="h-3 w-3 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Help Resources */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          Help Resources
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Documentation */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex items-center mb-3">
              <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">Documentation</h4>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Browse our comprehensive documentation to learn how to use the application
            </p>
            <div className="space-y-2">
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Getting Started Guide
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                User Manual
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Video Tutorials
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                FAQs
              </a>
            </div>
          </div>

          {/* Knowledge Base */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex items-center mb-3">
              <Globe className="h-5 w-5 text-green-600 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">{t("knowledge_base")}</h4>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              {t("knowledge_base_desc")}
            </p>
            <div className="space-y-2">
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Troubleshooting Common Issues
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Best Practices
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Feature Guides
              </a>
              <a href="#" className="text-sm text-blue-600 block hover:underline">
                Release Notes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("send_feedback")}
        </h3>
        <div className="bg-white p-4 border border-gray-200 rounded-md">
          <p className="text-xs text-gray-500 mb-4">
            {t("feedback_desc")}
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("feedback_type")}
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="suggestion">{t("suggestion_feedback")}</option>
                <option value="bug">{t("bug_report_feedback")}</option>
                <option value="feature">{t("feature_request_feedback")}</option>
                <option value="praise">{t("praise_feedback")}</option>
                <option value="other">{t("other_feedback")}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Brief description of your feedback"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Please provide details about your feedback..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("attachments")}
              </label>
              <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                <p className="text-xs text-gray-500 mb-2">
                  {t("attachments_desc")}
                </p>
                <button className="text-sm text-blue-600 font-medium">
                  {t("select_files")}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeSystemInfo"
                className="mr-2"
                defaultChecked
              />
              <label
                htmlFor="includeSystemInfo"
                className="text-xs text-gray-700"
              >
                {t("include_system_info")}
              </label>
            </div>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium flex items-center">
              <Send className="h-4 w-4 mr-1" /> {t("submit_feedback")}
            </button>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            TheSCI ERP - Developed by Shivam Vishwanath
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Version 1.0.0 | © 2023 TheSCI
          </p>
        </div>
      </div>
    </>
  );
};

export default SupportFeedback;
