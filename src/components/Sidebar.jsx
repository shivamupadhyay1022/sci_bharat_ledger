import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Home,
  PackageOpen,
  ShoppingCart,
  Users,
  FileText,
  BarChart3,
  Settings,
  Receipt,
  Truck,
  Tags,
  Zap,
} from "lucide-react";

const Sidebar = ({toggleSidebar}) => {
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t("dashboard"), icon: <Home className="h-5 w-5" /> },
    {
      path: "/inventory",
      label: t("inventory"),
      icon: <PackageOpen className="h-5 w-5" />,
    },
    {
      path: "/sales",
      label: t("sales"),
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      path: "/individual-sales",
      label: t("individual_sales"),
      icon: <Tags className="h-5 w-5" />,
    },
    {
      path: "/purchases",
      label: t("purchases"),
      icon: <Truck className="h-5 w-5" />,
    },
    {
      path: "/customers",
      label: t("customers"),
      icon: <Users className="h-5 w-5" />,
    },
    { path: "/gst", label: t("gst"), icon: <Receipt className="h-5 w-5" /> },
    {
      path: "/reports",
      label: t("reports"),
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      path: "/documents",
      label: t("documents"),
      icon: <FileText className="h-5 w-5" />,
    },
    {
      path: "/smart-ai",
      label: t("smart_ai"),
      icon: <Zap className="h-5 w-5" />,
    },
    {
      path: "/settings",
      label: t("settings"),
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex h-full w-64 flex-col border-r bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex h-[61px] justify-between items-center border-b border-gray-200 dark:border-gray-800 px-4">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-blue-600 p-1">
            <span className="text-lg font-bold text-white">TS</span>
          </div>
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            TheSci ERP
          </h1>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-log-out-icon lucide-log-out rotate-180"
            onClick={toggleSidebar}
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-blue-100 dark:bg-blue-900 p-2">
            <PackageOpen className="h-5 w-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("version")}
            </p>
            <p className="text-sm font-medium">1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
