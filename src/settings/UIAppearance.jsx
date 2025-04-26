import React from "react";
import { ChevronDown, Upload, Sun, Moon, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";

const UIAppearance = () => {
  const { t } = useTranslation();

  // Theme options
  const themeOptions = [
    { id: "light", label: t("light"), icon: Sun },
    { id: "dark", label: t("dark"), icon: Moon },
    { id: "system", label: t("system"), icon: Monitor },
  ];

  // Font size options
  const fontSizeOptions = [t("small"), t("medium"), t("large"), t("extra_large")];

  // Dashboard layout options
  const dashboardLayoutOptions = [
    t("grid_view"),
    t("list_view"),
    t("compact_view"),
    t("detailed_view"),
  ];

  // Sidebar position options
  const sidebarPositionOptions = [t("left"), t("right"), t("hidden")];

  // Card border radius options
  const cardBorderRadiusOptions = [
    t("none"),
    t("small"),
    t("medium"),
    t("large"),
    t("extra_large"),
  ];

  // Table density options
  const tableDensityOptions = [t("compact"), t("default"), t("comfortable"), t("spacious")];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("ui_appearance")}</h2>
          <p className="text-gray-500 text-sm">
            {t("ui_appearance_description")}
          </p>
        </div>
      </div>

      {/* Theme Selection */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">{t("theme")}</h3>
        <div className="grid grid-cols-3 gap-4 mb-1">
          {themeOptions.map((theme) => (
            <div
              key={theme.id}
              className={`border ${
                theme.id === "light"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              } rounded-md p-4 flex flex-col items-center justify-center cursor-pointer`}
            >
              <theme.icon
                className={`h-6 w-6 ${
                  theme.id === "light" ? "text-blue-500" : "text-gray-500"
                } mb-2`}
              />
              <span
                className={`text-sm ${
                  theme.id === "light"
                    ? "font-medium text-blue-700"
                    : "text-gray-700"
                }`}
              >
                {theme.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500">
          {t("select_theme")}
        </p>
      </div>

      {/* Font Size */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">{t("font_size")}</h3>
        <div className="relative mb-1">
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            defaultValue={fontSizeOptions[1]}
          >
            {fontSizeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">
          {t("text_size")}
        </p>
      </div>

      {/* Dashboard Layout */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("dashboard_layout")}
        </h3>
        <div className="relative mb-1">
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            defaultValue={dashboardLayoutOptions[0]}
          >
            {dashboardLayoutOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">
          {t("preferred_layout")}
        </p>
      </div>

      {/* Sidebar Position */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("sidebar_position")}
        </h3>
        <div className="relative mb-1">
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            defaultValue={sidebarPositionOptions[0]}
          >
            {sidebarPositionOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">
          {t("sidebar_position_desc")}
        </p>
      </div>

      {/* Primary Color */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("primary_color")}
        </h3>
        <div className="flex items-center gap-3 mb-1">
          <div className="w-6 h-6 bg-blue-600 rounded-full border border-gray-300"></div>
          <input
            type="text"
            className="w-24 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="#3F51B5"
            readOnly
          />
        </div>
        <p className="text-xs text-gray-500">
          {t("main_accent_color")}
        </p>
      </div>

      {/* Card Border Radius */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("card_border_radius")}
        </h3>
        <div className="relative mb-1">
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            defaultValue={cardBorderRadiusOptions[2]}
          >
            {cardBorderRadiusOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">
          {t("roundness")}
        </p>
      </div>

      {/* App Logo */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-800 mb-3">{t("app_logo")}</h3>
        <div className="flex items-start gap-4 mb-1">
          <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 font-semibold">
            TS
          </div>
          <div>
            <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
              <Upload className="h-4 w-4" /> {t("upload_logo")}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          {t("logo_desc")}
        </p>
      </div>

      {/* Table Density */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("table_density")}
        </h3>
        <div className="relative mb-1">
          <select
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            defaultValue={tableDensityOptions[1]}
          >
            {tableDensityOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        <p className="text-xs text-gray-500">{t("table_spacing")}</p>
      </div>
    </>
  );
};

export default UIAppearance;
