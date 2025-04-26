import React from "react";
import { Download, Upload, Save, Database, FileJson, File, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const DataExport = () => {
  const { t } = useTranslation();
  // Backup destination options
  const backupDestinationOptions = [
    "Local Storage",
    "Google Drive",
    "Dropbox",
    "OneDrive",
    "Custom FTP",
  ];

  // Backup frequency options
  const backupFrequencyOptions = ["Daily", "Weekly", "Bi-weekly", "Monthly"];

  // Retain backups options
  const retainBackupsOptions = [
    "7 Days",
    "14 Days",
    "30 Days",
    "60 Days",
    "90 Days",
    "1 Year",
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("data_export")}</h2>
          <p className="text-gray-500 text-sm">
            {t("data_export_description")}
          </p>
        </div>
      </div>

      {/* Export Data Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">{t("export_data")}</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Export as JSON */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
            <FileJson className="h-6 w-6 text-gray-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-800 mb-1">
              {t("export_format")}: JSON
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Full data backup
            </p>
            <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
              <Download className="h-3 w-3" /> {t("export_now")}
            </button>
          </div>

          {/* Export as CSV */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
            <File className="h-6 w-6 text-gray-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-800 mb-1">
              {t("export_format")}: CSV
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Spreadsheet compatible
            </p>
            <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
              <Download className="h-3 w-3" /> {t("export_now")}
            </button>
          </div>

          {/* Export as PDF */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col items-center justify-center">
            <File className="h-6 w-6 text-gray-500 mb-2" />
            <h4 className="text-sm font-medium text-gray-800 mb-1">
              {t("export_format")}: PDF
            </h4>
            <p className="text-xs text-gray-500 text-center mb-3">
              Reports and documents
            </p>
            <button className="text-blue-600 text-xs font-medium flex items-center gap-1">
              <Download className="h-3 w-3" /> {t("export_now")}
            </button>
          </div>
        </div>
      </div>

      {/* Backup Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-gray-800">{t("auto_backup_settings")}</h3>
          <button className="px-3 py-1.5 bg-gray-900 text-white rounded-md text-xs font-medium flex items-center gap-1">
            <Save className="h-3 w-3" /> {t("export_now")}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Auto Backup Destination */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("backup_location")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={backupDestinationOptions[0]}
              >
                {backupDestinationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("backup_location_desc")}
            </p>
          </div>

          {/* Backup Frequency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("backup_frequency")}
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={backupFrequencyOptions[0]}
              >
                {backupFrequencyOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("backup_frequency_desc")}
            </p>
          </div>

          {/* Retain Backups */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Retain Backups
            </label>
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                defaultValue={retainBackupsOptions[2]}
              >
                {retainBackupsOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              How long to keep old backups
            </p>
          </div>
        </div>
      </div>

      {/* Import Data Section */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">{t("export_data")}</h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Import Full Backup */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <div className="flex items-center mb-3">
              <Database className="h-5 w-5 text-gray-500 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">
                Import Full Backup
              </h4>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Restore your system from a previous backup file
            </p>
            <button className="w-full py-2 border border-gray-300 rounded-md text-xs font-medium flex items-center justify-center gap-1 bg-white">
              <Upload className="h-3 w-3" /> Select Backup File
            </button>
          </div>

          {/* Import from CSV */}
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <div className="flex items-center mb-3">
              <File className="h-5 w-5 text-gray-500 mr-2" />
              <h4 className="text-sm font-medium text-gray-800">
                Import from CSV
              </h4>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Import customers, inventory, or other data from CSV files
            </p>
            <button className="w-full py-2 border border-gray-300 rounded-md text-xs font-medium flex items-center justify-center gap-1 bg-white">
              <Upload className="h-3 w-3" /> Upload CSV File
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataExport;
