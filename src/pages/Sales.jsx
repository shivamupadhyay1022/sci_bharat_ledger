import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Filter, RotateCcw } from "lucide-react";

const Sales = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all_statuses");

  const salesData = [
    {
      id: "INV-2025-001",
      date: "2025-04-12",
      customer: "ABC Electronics",
      amount: "₹28,500",
      gst: "₹4,350",
      payment_mode: "UPI",
      status: "paid",
    },
    {
      id: "INV-2025-002",
      date: "2025-04-10",
      customer: "New Tech Solutions",
      amount: "₹12,600",
      gst: "₹1,920",
      payment_mode: "Bank Transfer",
      status: "pending",
    },
    {
      id: "INV-2025-003",
      date: "2025-04-02",
      customer: "City Retailers",
      amount: "₹45,200",
      gst: "₹6,885",
      payment_mode: "Cheque",
      status: "overdue",
    },
    {
      id: "INV-2025-004",
      date: "2025-04-08",
      customer: "Global Traders",
      amount: "₹34,800",
      gst: "₹5,303",
      payment_mode: "Cash",
      status: "paid",
    },
    {
      id: "INV-2025-005",
      date: "2025-04-05",
      customer: "Modern Enterprises",
      amount: "₹18,200",
      gst: "₹2,773",
      payment_mode: "UPI",
      status: "pending",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0].replace(/-/g, '-');
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "paid":
        return "inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs";
      case "pending":
        return "inline-block rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs";
      case "overdue":
        return "inline-block rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs";
      default:
        return "inline-block rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs";
    }
  };

  const filteredSales = salesData.filter((sale) => {
    const matchesSearch =
      sale.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sale.customer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all_statuses" ||
      sale.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">sales_management</h1>
        <p className="text-gray-500 dark:text-gray-400">sales_description</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:max-w-xl">
            <input
              type="text"
              placeholder="search_sales"
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
                <option value="all_statuses">all_statuses</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
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
              <span>new_sale</span>
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
                      invoice
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                      date
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                      GST
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                      payment_mode
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredSales.map((sale) => (
                    <tr key={sale.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <ShoppingCart className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{sale.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                        {formatDate(sale.date)}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {sale.customer}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {sale.amount}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                        {sale.gst}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {sale.payment_mode}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className={getStatusBadgeClass(sale.status)}>
                          {sale.status}
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

export default Sales;
