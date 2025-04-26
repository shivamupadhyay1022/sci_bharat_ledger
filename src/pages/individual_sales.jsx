import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Filter, RotateCcw, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const IndividualSales = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all_statuses");
  const [categoryFilter, setcategoryFilter] = useState("All Categories");
  const [dateFilter, setDateFilter] = useState("");
  // Set all dates to be expanded by default
  const [expandedDates, setExpandedDates] = useState([
    "Tuesday 15 April, 2025",
    "Monday 14 April, 2025",
    "Sunday 13 April, 2025"
  ]);

  // Sample data for sales grouped by date
  const salesByDate = [
    {
      date: "Tuesday 15 April, 2025",
      count: 2,
      sales: [
        {
          id: "INV-2025-1001",
          customer: "Rahul Sharma",
          status: "paid",
          total: "₹52,156",
          items: [
            {
              name: "Premium Laptop",
              category: "Electronics",
              qty: 1,
              price: "₹45,000",
              discount: "₹2,000",
              gst: "₹7,740",
              total: "₹50,740"
            },
            {
              name: "Wireless Mouse",
              category: "Electronics",
              qty: 1,
              price: "₹1,200",
              discount: "₹0",
              gst: "₹216",
              total: "₹1,416"
            }
          ]
        },
        {
          id: "INV-2025-1002",
          customer: "Priya Patel",
          status: "paid",
          total: "₹12,390",
          items: [
            {
              name: "Bluetooth Speaker",
              category: "Electronics",
              qty: 1,
              price: "₹10,500",
              discount: "₹0",
              gst: "₹1,890",
              total: "₹12,390"
            }
          ]
        }
      ]
    },
    {
      date: "Monday 14 April, 2025",
      count: 3,
      sales: [
        {
          id: "INV-2025-1003",
          customer: "Vikram Singh",
          status: "paid",
          total: "₹78,340",
          items: [
            {
              name: "Gaming Laptop",
              category: "Electronics",
              qty: 1,
              price: "₹65,000",
              discount: "₹3,000",
              gst: "₹11,160",
              total: "₹73,160"
            },
            {
              name: "Gaming Mouse",
              category: "Electronics",
              qty: 1,
              price: "₹4,500",
              discount: "₹500",
              gst: "₹720",
              total: "₹4,720"
            },
            {
              name: "Mouse Pad",
              category: "Accessories",
              qty: 1,
              price: "₹400",
              discount: "₹0",
              gst: "₹60",
              total: "₹460"
            }
          ]
        },
        {
          id: "INV-2025-1004",
          customer: "Neha Gupta",
          status: "pending",
          total: "₹35,400",
          items: [
            {
              name: "Smartphone",
              category: "Electronics",
              qty: 1,
              price: "₹30,000",
              discount: "₹0",
              gst: "₹5,400",
              total: "₹35,400"
            }
          ]
        },
        {
          id: "INV-2025-1005",
          customer: "Rajesh Kumar",
          status: "overdue",
          total: "₹18,880",
          items: [
            {
              name: "Office Chair",
              category: "Furniture",
              qty: 1,
              price: "₹12,000",
              discount: "₹1,000",
              gst: "₹1,980",
              total: "₹12,980"
            },
            {
              name: "Desk Lamp",
              category: "Accessories",
              qty: 2,
              price: "₹2,500",
              discount: "₹0",
              gst: "₹900",
              total: "₹5,900"
            }
          ]
        }
      ]
    },
    {
      date: "Sunday 13 April, 2025",
      count: 1,
      sales: [
        {
          id: "INV-2025-1006",
          customer: "Ananya Desai",
          status: "paid",
          total: "₹64,900",
          items: [
            {
              name: "4K Smart TV",
              category: "Electronics",
              qty: 1,
              price: "₹55,000",
              discount: "₹0",
              gst: "₹9,900",
              total: "₹64,900"
            }
          ]
        }
      ]
    }
  ];

  const toggleDateExpansion = (date) => {
    if (expandedDates.includes(date)) {
      setExpandedDates(expandedDates.filter(d => d !== date));
    } else {
      setExpandedDates([...expandedDates, date]);
    }
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

  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">individual_sales_management</h1>
        <p className="text-gray-500 dark:text-gray-400">individual_sales_description</p>
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

            <div className="relative w-full sm:w-auto">
              <select
                value={categoryFilter}
                onChange={(e) => setcategoryFilter(e.target.value)}
                className="appearance-none pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 w-full"
              >
                <option value="All Categories">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
                <option value="Software">Software</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="pl-3 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 w-full"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
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

        <div className="space-y-4">
          {salesByDate.map((dateGroup) => (
            <div key={dateGroup.date} className="border rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 cursor-pointer"
                onClick={() => toggleDateExpansion(dateGroup.date)}
              >
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="font-medium">{dateGroup.date}</span>
                  <span className="ml-2 text-sm text-gray-500">{dateGroup.count} Sales</span>
                </div>
                <div>
                  {expandedDates.includes(dateGroup.date) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>

              {expandedDates.includes(dateGroup.date) && dateGroup.sales.map((sale) => (
                <div key={sale.id} className="border-t p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                        <ShoppingCart className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{sale.id}</div>
                        <div className="text-xs text-gray-500">{sale.customer}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={getStatusBadgeClass(sale.status)}>
                        {sale.status}
                      </span>
                      <span className="font-medium">{sale.total}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        view_bill
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        edit
                      </button>
                      <button className="text-red-500 hover:text-red-700 text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        delete
                      </button>
                    </div>
                  </div>

                  {sale.items.length > 0 && (
                    <div className="mt-4 overflow-x-auto">
                      <div className="min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                              <tr>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  Item
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                                  Category
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  qty
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  Price
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                                  discount
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                                  GST
                                </th>
                                <th scope="col" className="px-2 md:px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  total
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                              {sale.items.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {item.name}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                                    {item.category}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {item.qty}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {item.price}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
                                    {item.discount}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                                    {item.gst}
                                  </td>
                                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                    {item.total}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndividualSales;
