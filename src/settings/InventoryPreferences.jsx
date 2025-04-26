import React from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const InventoryPreferences = () => {
  const { t } = useTranslation();
  // Inventory Valuation Method options
  const valuationMethods = [
    "FIFO (First In, First Out)",
    "LIFO (Last In, First Out)",
    "Weighted Average",
    "Specific Identification",
  ];

  // Default Unit of Measure options
  const unitOfMeasureOptions = [
    "Piece (Pcs)",
    "Kilogram (Kg)",
    "Gram (g)",
    "Liter (L)",
    "Meter (m)",
    "Box",
    "Carton",
  ];

  // Barcode Settings options
  const barcodeSettingsOptions = [
    "Auto-generate",
    "Manual entry only",
    "Both options",
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">{t("inventory_preferences")}</h2>
      <p className="text-gray-500 text-sm mb-6">
        {t("Configure how you track, manage, and value your inventory.")}
      </p>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Batch & Expiry Tracking */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Batch & Expiry Tracking
                </h3>
                <p className="text-xs text-gray-500">
                  Track inventory by batch number and expiry date
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="batchTracking"
                  id="batchTracking"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="batchTracking"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Default Reorder Threshold */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Reorder Threshold
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="10"
            />
            <p className="text-xs text-gray-500 mt-1">
              Default quantity at which to reorder inventory
            </p>
          </div>

          {/* Default Unit of Measure */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Unit of Measure
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={unitOfMeasureOptions[0]}
              >
                {unitOfMeasureOptions.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Default unit of measure for new inventory items
            </p>
          </div>

          {/* Barcode Settings */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Barcode Settings
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={barcodeSettingsOptions[0]}
              >
                {barcodeSettingsOptions.map((setting, index) => (
                  <option key={index} value={setting}>
                    {setting}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              How barcodes are generated for inventory items
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Low Stock Notifications */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Low Stock Notifications
                </h3>
                <p className="text-xs text-gray-500">
                  Receive alerts when inventory is below threshold
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="lowStockNotifications"
                  id="lowStockNotifications"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="lowStockNotifications"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Inventory Valuation Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Inventory Valuation Method
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={valuationMethods[0]}
              >
                {valuationMethods.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Method used to value your inventory for accounting purposes
            </p>
          </div>

          {/* Multi-location Inventory */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-1">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Multi-location Inventory
                </h3>
                <p className="text-xs text-gray-500">
                  Track inventory across multiple locations
                </p>
              </div>
              <div className="relative inline-block w-10 align-middle select-none">
                <input
                  type="checkbox"
                  name="multiLocationInventory"
                  id="multiLocationInventory"
                  className="sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="multiLocationInventory"
                  className="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
                >
                  <span
                    className={`block h-6 w-6 rounded-full bg-white transform transition-transform duration-200 ease-in-out translate-x-4`}
                  ></span>
                </label>
              </div>
            </div>
          </div>

          {/* Barcode Prefix */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Barcode Prefix
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="TS"
            />
            <p className="text-xs text-gray-500 mt-1">
              Prefix used for auto-generated barcodes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryPreferences;
