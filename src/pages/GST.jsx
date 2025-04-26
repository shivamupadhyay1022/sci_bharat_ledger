import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Receipt, Filter, FileText, Download } from "lucide-react";

const GST = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all_statuses");

  const gstReturnsData = [
    {
      id: "1",
      return_type: "GSTR-1",
      period: "March 2025",
      due_date: "2025-04-11",
      tax_liability: "₹15,250",
      input_credit: "₹12,800",
      balance: "₹2,450",
      status: "filed"
    },
    {
      id: "2",
      return_type: "GSTR-3B",
      period: "March 2025",
      due_date: "2025-04-20",
      tax_liability: "₹15,250",
      input_credit: "₹12,800",
      balance: "₹2,450",
      status: "pending"
    },
    {
      id: "3",
      return_type: "GSTR-1",
      period: "February 2025",
      due_date: "2025-03-11",
      tax_liability: "₹18,650",
      input_credit: "₹14,200",
      balance: "₹4,450",
      status: "filed"
    },
    {
      id: "4",
      return_type: "GSTR-3B",
      period: "February 2025",
      due_date: "2025-03-20",
      tax_liability: "₹18,650",
      input_credit: "₹14,200",
      balance: "₹4,450",
      status: "filed"
    },
    {
      id: "5",
      return_type: "GSTR-1",
      period: "January 2025",
      due_date: "2025-02-11",
      tax_liability: "₹12,850",
      input_credit: "₹10,200",
      balance: "₹2,650",
      status: "filed"
    }
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "filed":
        return "inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs";
      case "pending":
        return "inline-block rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs";
      case "overdue":
        return "inline-block rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs";
      default:
        return "inline-block rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs";
    }
  };

  const filteredReturns = gstReturnsData.filter((gstReturn) => {
    const matchesSearch =
      gstReturn.return_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gstReturn.period.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all_statuses" ||
      gstReturn.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Count returns by status
  const allReturnsCount = gstReturnsData.length;
  const filedReturnsCount = gstReturnsData.filter(item => item.status === "filed").length;
  const pendingReturnsCount = gstReturnsData.filter(item => item.status === "pending").length;
  const overdueReturnsCount = gstReturnsData.filter(item => item.status === "overdue").length;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">gst_management</h1>
        <p className="text-gray-500 dark:text-gray-400">gst_description</p>
      </div>

      {/* GST Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">current_month_due</p>
          <h2 className="text-2xl font-bold mt-2">₹15,250</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Due Date: April 20, 2025</p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">input_tax_credit</p>
          <h2 className="text-2xl font-bold mt-2">₹12,800</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">available_credit</p>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">net_payable</p>
          <h2 className="text-2xl font-bold mt-2">₹2,450</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">after_input_credit</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">gst_returns</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">gst_returns_description</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
            all_returns ({allReturnsCount})
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border">
            filed ({filedReturnsCount})
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border">
            Pending ({pendingReturnsCount})
          </button>
          <button className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border">
            overdue ({overdueReturnsCount})
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="relative w-full md:max-w-xl">
            <input
              type="text"
              placeholder="search_returns"
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
                <option value="filed">Filed</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center whitespace-nowrap">
            <span className="mr-2">+</span>
            <span>new_return</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      return_type
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Period
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      tax_liability
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      input_credit
                    </th>
                    <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      balance
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
                  {filteredReturns.map((gstReturn) => (
                    <tr key={gstReturn.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                            <FileText className="h-4 w-4 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{gstReturn.return_type}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {gstReturn.period}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {gstReturn.due_date}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {gstReturn.tax_liability}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {gstReturn.input_credit}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {gstReturn.balance}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className={getStatusBadgeClass(gstReturn.status)}>
                          {gstReturn.status}
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
                          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                            <Download className="h-5 w-5" />
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

export default GST;
