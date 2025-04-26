import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const MobilePWA = () => {
  const { t } = useTranslation();
  // Mobile data usage options
  const mobileDataOptions = ["Low (Data Saver)", "Medium", "High", "Unlimited"];

  // Cache expiry interval options
  const cacheExpiryOptions = [
    "1 Day",
    "3 Days",
    "7 Days",
    "14 Days",
    "30 Days",
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("mobile_pwa")}</h2>
          <p className="text-gray-500 text-sm">
            {t("mobile_pwa_description")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Offline Sync */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("offline_sync")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("offline_sync_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="offlineSync"
                  id="offlineSync"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="offlineSync"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Mobile Data Usage */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("mobile_data_usage")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={mobileDataOptions[0]}
              >
                {mobileDataOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("mobile_data_desc")}
            </p>
          </div>

          {/* Background Sync */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("background_sync")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("background_sync_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="backgroundSync"
                  id="backgroundSync"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="backgroundSync"
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
          {/* Push Notifications */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("push_notifications")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("push_notifications_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="pushNotifications"
                  id="pushNotifications"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="pushNotifications"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Cache Expiry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("cache_expiry")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={cacheExpiryOptions[2]}
              >
                {cacheExpiryOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("cache_expiry_desc")}
            </p>
          </div>

          {/* Home Screen Installation */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  {t("home_screen_installation")}
                </h3>
                <p className="text-xs text-gray-500">
                  {t("home_screen_desc")}
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="homeScreenInstallation"
                  id="homeScreenInstallation"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="homeScreenInstallation"
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

export default MobilePWA;
