import React from "react";
import SimpleLineChart from "./SimpleLineChart";
import SimpleBarChart from "./SimpleBarChart";
import SimplePieChart from "./SimplePieChart";

// Company information
const companyName = "TheSci Bharat Ledger";
const companyAddress = "123 Tech Park, Bangalore, Karnataka, India - 560001";
const companyPhone = "+91 9876543210";
const companyEmail = "info@scibharatledger.com";
const companyGSTIN = "29AABCT1234Z1Z5";

const ReportContent = ({ reportType, timeRange, data }) => {
  // Format the report title
  const formatReportTitle = (type) => {
    return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Get the appropriate chart component based on report type and data
  const getChartComponent = () => {
    if (!data) return null;

    // Determine chart type based on report type
    if (reportType.includes('by_product') || reportType.includes('valuation')) {
      return <SimplePieChart data={data} size={300} />;
    } else if (reportType.includes('balance_sheet') || reportType.includes('gst_summary')) {
      return <SimpleBarChart data={data} height={300} />;
    } else {
      return <SimpleLineChart data={data} height={300} />;
    }
  };

  // Generate sample table data based on report type
  const getTableData = () => {
    if (!data) return [];

    // For pie charts, return the data as is
    if (reportType.includes('by_product') || reportType.includes('valuation')) {
      return data.map(item => ({
        category: item.label,
        value: `₹${item.value.toLocaleString('en-IN')}`,
        percentage: `${((item.value / data.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%`
      }));
    }

    // For line charts, add some calculated columns
    if (reportType.includes('profit') || reportType.includes('flow') || reportType.includes('movement')) {
      return data.map(item => ({
        period: item.label,
        value: `₹${item.value.toLocaleString('en-IN')}`,
        change: `${Math.floor(Math.random() * 20) - 10}%`, // Random change percentage
        trend: Math.random() > 0.5 ? 'Up' : 'Down' // Random trend
      }));
    }

    // For bar charts, add some calculated columns
    return data.map(item => ({
      category: item.label,
      value: `₹${item.value.toLocaleString('en-IN')}`,
      percentage: `${((item.value / data.reduce((sum, d) => sum + d.value, 0)) * 100).toFixed(1)}%`
    }));
  };

  // Get table headers based on report type
  const getTableHeaders = () => {
    if (reportType.includes('by_product') || reportType.includes('valuation')) {
      return ['Category', 'Value', 'Percentage'];
    } else if (reportType.includes('profit') || reportType.includes('flow') || reportType.includes('movement')) {
      return ['Period', 'Value', 'Change', 'Trend'];
    } else {
      return ['Category', 'Value', 'Percentage'];
    }
  };

  // Map table data to table headers
  const mapDataToHeaders = (item) => {
    if (reportType.includes('by_product') || reportType.includes('valuation')) {
      return [item.category, item.value, item.percentage];
    } else if (reportType.includes('profit') || reportType.includes('flow') || reportType.includes('movement')) {
      return [item.period, item.value, item.change, item.trend];
    } else {
      return [item.category, item.value, item.percentage];
    }
  };

  const tableData = getTableData();
  const tableHeaders = getTableHeaders();

  return (
    <div className="space-y-8">
      {/* Company Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-2xl font-bold text-blue-600">{companyName}</h1>
        <p className="text-sm text-gray-600">{companyAddress}</p>
        <p className="text-sm text-gray-600">Phone: {companyPhone} | Email: {companyEmail}</p>
        <p className="text-sm text-gray-600">GSTIN: {companyGSTIN}</p>
      </div>

      {/* Report Title */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{formatReportTitle(reportType)} Report</h2>
        <p className="text-gray-500">
          Period: {timeRange.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </p>
        <p className="text-gray-500">
          Generated on: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Chart Section */}
      <div className="flex justify-center">
        {getChartComponent()}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This report provides an overview of {formatReportTitle(reportType).toLowerCase()} for the selected time period.
          {reportType.includes('profit') && ' It shows the company\'s revenue, expenses, and resulting profit or loss.'}
          {reportType.includes('balance') && ' It presents the company\'s assets, liabilities, and equity.'}
          {reportType.includes('flow') && ' It tracks the inflow and outflow of cash in the business.'}
          {reportType.includes('product') && ' It breaks down sales by different product categories.'}
          {reportType.includes('customer') && ' It segments sales by customer types.'}
          {reportType.includes('valuation') && ' It shows the current value of inventory by category.'}
          {reportType.includes('movement') && ' It tracks changes in inventory levels over time.'}
          {reportType.includes('gst') && ' It summarizes GST collected and paid during the period.'}
          {reportType.includes('liability') && ' It shows tax obligations over time.'}
        </p>
      </div>

      {/* Data Table */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Detailed Data</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {tableData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  {mapDataToHeaders(item).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-4 border-t text-center text-sm text-gray-500">
        <p>This is an automatically generated report. For any queries, please contact our support team.</p>
        <p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ReportContent;
