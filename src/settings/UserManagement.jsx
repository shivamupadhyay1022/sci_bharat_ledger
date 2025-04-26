import React from "react";
import { UserPlus, MoreVertical, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const UserManagement = () => {
  const { t } = useTranslation();
  // User data
  const users = [
    {
      name: "Admin User",
      email: "admin@example.com",
      role: "Owner",
      lastActive: "2 hours ago",
    },
    {
      name: "Sales Agent",
      email: "sales@example.com",
      role: "Sales",
      lastActive: "1 day ago",
    },
    {
      name: "Accounts Manager",
      email: "accounts@example.com",
      role: "Accountant",
      lastActive: "3 days ago",
    },
  ];

  // User roles
  const userRoles = [
    "Owner",
    "Admin",
    "Manager",
    "Sales",
    "Accountant",
    "Inventory Manager",
    "Cashier",
    "Viewer",
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-1">{t("user_management")}</h2>
          <p className="text-gray-500 text-sm">
            {t("user_management_description")}
          </p>
        </div>
        <button className="px-3 py-2 bg-gray-900 text-white rounded-md text-sm font-medium flex items-center gap-1">
          <UserPlus className="h-4 w-4" /> {t("add_user")}
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-md border border-gray-200 overflow-hidden mb-6">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                {t("name")}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                {t("email")}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                {t("role")}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                {t("last_active")}
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">
                {t("actions")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-sm text-blue-600">
                  {user.email}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.role === "Owner"
                        ? "bg-gray-100 text-gray-800"
                        : user.role === "Sales"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {user.lastActive}
                </td>
                <td className="py-3 px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Management */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("role_management")}
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Add New Role */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-3">
              {t("add_new_role")}
            </h4>
            <div className="space-y-3">
              <div>
                <label
                  htmlFor="roleName"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  {t("role_name")}
                </label>
                <input
                  type="text"
                  id="roleName"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter role name"
                />
              </div>
              <div>
                <label
                  htmlFor="roleDescription"
                  className="block text-xs font-medium text-gray-700 mb-1"
                >
                  {t("description")}
                </label>
                <input
                  type="text"
                  id="roleDescription"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter role description"
                />
              </div>
              <button className="w-full py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
                {t("add_role")}
              </button>
            </div>
          </div>

          {/* Existing Roles */}
          <div className="bg-white p-4 border border-gray-200 rounded-md">
            <h4 className="text-sm font-medium text-gray-800 mb-3">
              {t("existing_roles")}
            </h4>
            <div className="space-y-2">
              {userRoles.map((role, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-gray-700">{role}</span>
                  <button className="text-xs text-blue-600">{t("edit")}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Permission Settings */}
      <div>
        <h3 className="text-sm font-medium text-gray-800 mb-3">
          {t("permission_settings")}
        </h3>
        <div className="bg-white p-4 border border-gray-200 rounded-md">
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t("select_role_configure")}
            </label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10">
                {userRoles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Sales Permissions */}
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">
                {t("sales_permissions")}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="viewSales"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="viewSales"
                    className="text-xs text-gray-700"
                  >
                    {t("view_sales")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="createSales"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="createSales"
                    className="text-xs text-gray-700"
                  >
                    {t("create_sales")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="editSales"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="editSales"
                    className="text-xs text-gray-700"
                  >
                    {t("edit_sales")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="deleteSales"
                    className="mr-2"
                  />
                  <label
                    htmlFor="deleteSales"
                    className="text-xs text-gray-700"
                  >
                    {t("delete_sales")}
                  </label>
                </div>
              </div>
            </div>

            {/* Inventory Permissions */}
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">
                {t("inventory_permissions")}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="viewInventory"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="viewInventory"
                    className="text-xs text-gray-700"
                  >
                    {t("view_inventory")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="createInventory"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="createInventory"
                    className="text-xs text-gray-700"
                  >
                    {t("create_inventory")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="editInventory"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="editInventory"
                    className="text-xs text-gray-700"
                  >
                    {t("edit_inventory")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="deleteInventory"
                    className="mr-2"
                  />
                  <label
                    htmlFor="deleteInventory"
                    className="text-xs text-gray-700"
                  >
                    {t("delete_inventory")}
                  </label>
                </div>
              </div>
            </div>

            {/* Settings Permissions */}
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-2">
                {t("settings_permissions")}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="viewSettings"
                    className="mr-2"
                    defaultChecked
                  />
                  <label
                    htmlFor="viewSettings"
                    className="text-xs text-gray-700"
                  >
                    {t("view_settings")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="editSettings"
                    className="mr-2"
                  />
                  <label
                    htmlFor="editSettings"
                    className="text-xs text-gray-700"
                  >
                    {t("edit_settings")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="manageUsers"
                    className="mr-2"
                  />
                  <label
                    htmlFor="manageUsers"
                    className="text-xs text-gray-700"
                  >
                    {t("manage_users")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="manageRoles"
                    className="mr-2"
                  />
                  <label
                    htmlFor="manageRoles"
                    className="text-xs text-gray-700"
                  >
                    {t("manage_roles")}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium">
              {t("save_permissions")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserManagement;
