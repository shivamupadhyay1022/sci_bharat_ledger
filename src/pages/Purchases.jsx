import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Truck, Filter, RotateCcw } from "lucide-react";

const Purchases = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all_statuses");

  const purchasesData = [
    {
      id: "PO-2025-001",
      date: "2025-04-10",
      supplier: "Samsung India Ltd",
      amount: "₹1,45,000",
      gst: "₹22,093",
      invoice: "SINV-45678",
      status: "received",
    },
    {
      id: "PO-2025-002",
      date: "2025-04-08",
      supplier: "HP India",
      amount: "₹28,600",
      gst: "₹4,358",
      invoice: "-",
      status: "pending",
    },
    {
      id: "PO-2025-003",
      date: "2025-04-05",
      supplier: "Dell India Pvt Ltd",
      amount: "₹89,500",
      gst: "₹13,636",
      invoice: "-",
      status: "ordered",
    },
    {
      id: "PO-2025-004",
      date: "2025-04-01",
      supplier: "Max Peripherals Ltd",
      amount: "₹12,400",
      gst: "₹1,889",
      invoice: "MAX-78945",
      status: "received",
    },
    {
      id: "PO-2025-005",
      date: "2025-03-28",
      supplier: "Microsoft India",
      amount: "₹32,500",
      gst: "₹4,952",
      invoice: "-",
      status: "pending",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0].replace(/-/g, '-');
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "received":
        return "inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs";
      case "pending":
        return "inline-block rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs";
      case "ordered":
        return "inline-block rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs";
      default:
        return "inline-block rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs";
    }
  };

  const filteredPurchases = purchasesData.filter((purchase) => {
    const matchesSearch =
      purchase.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      purchase.supplier.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all_statuses" ||
      purchase.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">{t("purchase_management")}</h1>
        <p className="text-gray-500 dark:text-gray-400">{t("purchase_description")}</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:max-w-xl">
            <input
              type="text"
              placeholder={t("search_purchases")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 w-full"
              >
                <option value="all_statuses">{t("all_statuses")}</option>
                <option value="received">{t("received")}</option>
                <option value="pending">{t("pending")}</option>
                <option value="ordered">{t("ordered")}</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <button className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
              <RotateCcw className="h-5 w-5 text-gray-500" />
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center whitespace-nowrap">
              <span className="mr-2">+</span>
              <span>{t("new_purchase")}</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("po_number")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                      {t("date")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("supplier")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("amount")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                      GST
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                      {t("invoice")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("status")}
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {t("actions")}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredPurchases.map((purchase) => (
                    <tr key={purchase.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <Truck className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{purchase.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                        {formatDate(purchase.date)}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {purchase.supplier}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {purchase.amount}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                        {purchase.gst}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {purchase.invoice}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className={getStatusBadgeClass(purchase.status)}>
                          {t(purchase.status === 'received' ? 'received' : purchase.status === 'pending' ? 'pending' : 'ordered')}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hidden sm:block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </button>
                          <button className="text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
