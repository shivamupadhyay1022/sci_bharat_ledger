import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const SecurityPrivacy = () => {
  const { t } = useTranslation();
  // Session timeout options
  const sessionTimeoutOptions = [
    "15 minutes",
    "30 minutes",
    "1 hour",
    "2 hours",
    "4 hours",
    "8 hours",
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("security_privacy")}</h2>
          <p className="text-gray-500 text-sm">
            {t("security_privacy_description")}
          </p>
        </div>
      </div>

      {/* Authentication Settings */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          Authentication Settings
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Two-Factor Authentication */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Two-Factor Authentication
                </h3>
                <p className="text-xs text-gray-500">
                  Require 2FA for critical actions
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  id="twoFactorAuth"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="twoFactorAuth"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Biometric Authentication */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Biometric Authentication
                </h3>
                <p className="text-xs text-gray-500">
                  Allow login using fingerprint or face recognition on supported
                  devices
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="biometricAuth"
                  id="biometricAuth"
                  className="sr-only"
                />
                <label
                  htmlFor="biometricAuth"
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

      {/* Password Settings */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("password_settings")}
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Password Requirements */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <h3 className="text-sm font-medium text-gray-800 mb-3">
              {t("password_requirements")}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="minLength"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="minLength" className="text-xs text-gray-700">
                  {t("min_length")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="uppercase"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="uppercase" className="text-xs text-gray-700">
                  {t("uppercase")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lowercase"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="lowercase" className="text-xs text-gray-700">
                  {t("lowercase")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="number"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="number" className="text-xs text-gray-700">
                  {t("number")}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="special"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="special" className="text-xs text-gray-700">
                  {t("special_char")}
                </label>
              </div>
            </div>
          </div>

          {/* Password Expiry */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Password Expiry
                </h3>
                <p className="text-xs text-gray-500">
                  Force password reset after a certain period
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="passwordExpiry"
                  id="passwordExpiry"
                  className="sr-only"
                />
                <label
                  htmlFor="passwordExpiry"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out`}
                  ></span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Expiry Period (Days)
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="90"
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      {/* Session Settings */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          Session Settings
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Session Timeout */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("session_timeout")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={sessionTimeoutOptions[1]}
              >
                {sessionTimeoutOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("session_timeout_desc")}
            </p>
          </div>

          {/* Concurrent Sessions */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Concurrent Sessions
                </h3>
                <p className="text-xs text-gray-500">
                  Allow multiple active sessions for the same user
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="concurrentSessions"
                  id="concurrentSessions"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="concurrentSessions"
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

      {/* Privacy Settings */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("privacy_settings")}
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Activity Logging */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("activity_logging")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("activity_logging_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="activityLogging"
                  id="activityLogging"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="activityLogging"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("data_sharing")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("data_sharing_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="dataSharing"
                  id="dataSharing"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="dataSharing"
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

export default SecurityPrivacy;
