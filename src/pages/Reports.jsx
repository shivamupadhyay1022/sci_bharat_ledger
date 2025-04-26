import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Download, FileText, BarChart3, LineChart, PieChart } from "lucide-react";
import { downloadReport } from "../utils/reportUtils";
import SimpleLineChart from "../components/Reports/SimpleLineChart";
import SimpleBarChart from "../components/Reports/SimpleBarChart";
import SimplePieChart from "../components/Reports/SimplePieChart";
import ReportViewModal from "../components/Reports/ReportViewModal";
import ReportContent from "../components/Reports/ReportContent";

const Reports = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("financial");
  const [timeRange, setTimeRange] = useState("last_30_days");
  const [isDownloading, setIsDownloading] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState(null);
  const [currentReportData, setCurrentReportData] = useState(null);

  // Function to handle report download
  const handleDownload = (reportType) => {
    setIsDownloading(true);

    // Get the appropriate data for the report
    let reportData;
    switch (reportType) {
      case "profit_loss":
        reportData = profitLossData;
        break;
      case "balance_sheet":
        reportData = balanceSheetData;
        break;
      case "cash_flow":
        reportData = cashFlowData;
        break;
      case "sales_by_product":
        reportData = salesByProductData;
        break;
      case "sales_by_customer":
        reportData = salesByCustomerData;
        break;
      case "inventory_valuation":
        reportData = inventoryValuationData;
        break;
      case "stock_movement":
        reportData = stockMovementData;
        break;
      case "gst_summary":
        reportData = gstSummaryData;
        break;
      case "tax_liability":
        reportData = taxLiabilityData;
        break;
      default:
        reportData = [];
    }

    downloadReport(reportType, timeRange, reportData)
      .then(() => {
        setIsDownloading(false);
      })
      .catch((error) => {
        console.error("Download failed:", error);
        setIsDownloading(false);
        alert("Failed to download report. Please try again.");
      });
  };

  // Function to handle report view
  const handleView = (reportType) => {
    setIsViewing(true);

    // Get the appropriate data for the report
    let reportData;
    switch (reportType) {
      case "profit_loss":
        reportData = profitLossData;
        break;
      case "balance_sheet":
        reportData = balanceSheetData;
        break;
      case "cash_flow":
        reportData = cashFlowData;
        break;
      case "sales_by_product":
        reportData = salesByProductData;
        break;
      case "sales_by_customer":
        reportData = salesByCustomerData;
        break;
      case "inventory_valuation":
        reportData = inventoryValuationData;
        break;
      case "stock_movement":
        reportData = stockMovementData;
        break;
      case "gst_summary":
        reportData = gstSummaryData;
        break;
      case "tax_liability":
        reportData = taxLiabilityData;
        break;
      default:
        reportData = [];
    }

    // Set the current report and data
    setCurrentReport(reportType);
    setCurrentReportData(reportData);

    // Open the modal
    setTimeout(() => {
      setModalOpen(true);
      setIsViewing(false);
    }, 500);
  };

  // Sample data for charts
  const profitLossData = [
    { label: 'Jan', value: 250000 },
    { label: 'Feb', value: 320000 },
    { label: 'Mar', value: 280000 },
    { label: 'Apr', value: 360000 },
    { label: 'May', value: 400000 },
    { label: 'Jun', value: 450000 },
    { label: 'Jul', value: 420000 },
  ];

  const balanceSheetData = [
    { label: 'Assets', value: 1250000 },
    { label: 'Liabilities', value: 750000 },
    { label: 'Equity', value: 500000 },
  ];

  const cashFlowData = [
    { label: 'Jan', value: 120000 },
    { label: 'Feb', value: 150000 },
    { label: 'Mar', value: 180000 },
    { label: 'Apr', value: 210000 },
    { label: 'May', value: 240000 },
    { label: 'Jun', value: 270000 },
    { label: 'Jul', value: 300000 },
  ];

  const salesByProductData = [
    { label: 'Electronics', value: 450000, color: '#3b82f6' },
    { label: 'Accessories', value: 250000, color: '#10b981' },
    { label: 'Computers', value: 350000, color: '#f59e0b' },
    { label: 'Mobile', value: 300000, color: '#ef4444' },
  ];

  const salesByCustomerData = [
    { label: 'Business', value: 650000, color: '#3b82f6' },
    { label: 'Individual', value: 350000, color: '#10b981' },
  ];

  const inventoryValuationData = [
    { label: 'Electronics', value: 850000, color: '#3b82f6' },
    { label: 'Accessories', value: 350000, color: '#10b981' },
    { label: 'Computers', value: 550000, color: '#f59e0b' },
    { label: 'Mobile', value: 450000, color: '#ef4444' },
  ];

  const stockMovementData = [
    { label: 'Jan', value: 250 },
    { label: 'Feb', value: 320 },
    { label: 'Mar', value: 280 },
    { label: 'Apr', value: 360 },
    { label: 'May', value: 400 },
    { label: 'Jun', value: 450 },
    { label: 'Jul', value: 420 },
  ];

  const gstSummaryData = [
    { label: 'Q1', value: 120000 },
    { label: 'Q2', value: 150000 },
    { label: 'Q3', value: 180000 },
    { label: 'Q4', value: 210000 },
  ];

  const taxLiabilityData = [
    { label: 'Jan', value: 25000 },
    { label: 'Feb', value: 32000 },
    { label: 'Mar', value: 28000 },
    { label: 'Apr', value: 36000 },
    { label: 'May', value: 40000 },
    { label: 'Jun', value: 45000 },
    { label: 'Jul', value: 42000 },
  ];

  // Sample chart components for each report type
  const ProfitLossChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleLineChart data={profitLossData} height={120} />
    </div>
  );

  const BalanceSheetChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleBarChart data={balanceSheetData} height={120} />
    </div>
  );

  const CashFlowChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleLineChart data={cashFlowData} height={120} />
    </div>
  );

  const SalesByProductChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimplePieChart data={salesByProductData} size={120} />
    </div>
  );

  const SalesByCustomerChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimplePieChart data={salesByCustomerData} size={120} />
    </div>
  );

  const InventoryValuationChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimplePieChart data={inventoryValuationData} size={120} />
    </div>
  );

  const StockMovementChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleLineChart data={stockMovementData} height={120} />
    </div>
  );

  const GSTSummaryChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleBarChart data={gstSummaryData} height={120} />
    </div>
  );

  const TaxLiabilityChart = () => (
    <div className="h-40 flex items-center justify-center">
      <SimpleLineChart data={taxLiabilityData} height={120} />
    </div>
  );

  // Financial reports data
  const financialReports = [
    {
      id: "profit_loss",
      title: "profit_loss",
      description: "profit_loss_description",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
      chart: <ProfitLossChart />
    },
    {
      id: "balance_sheet",
      title: "balance_sheet",
      description: "balance_sheet_description",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      chart: <BalanceSheetChart />
    },
    {
      id: "cash_flow",
      title: "cash_flow",
      description: "cash_flow_description",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
      chart: <CashFlowChart />
    }
  ];

  // Sales reports data
  const salesReports = [
    {
      id: "sales_by_product",
      title: "sales_by_product",
      description: "sales_by_product_description",
      icon: <PieChart className="h-5 w-5 text-blue-500" />,
      chart: <SalesByProductChart />
    },
    {
      id: "sales_by_customer",
      title: "sales_by_customer",
      description: "sales_by_customer_description",
      icon: <PieChart className="h-5 w-5 text-blue-500" />,
      chart: <SalesByCustomerChart />
    }
  ];

  // Inventory reports data
  const inventoryReports = [
    {
      id: "inventory_valuation",
      title: "inventory_valuation",
      description: "inventory_valuation_description",
      icon: <PieChart className="h-5 w-5 text-blue-500" />,
      chart: <InventoryValuationChart />
    },
    {
      id: "stock_movement",
      title: "stock_movement",
      description: "stock_movement_description",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
      chart: <StockMovementChart />
    }
  ];

  // Tax reports data
  const taxReports = [
    {
      id: "gst_summary",
      title: "gst_summary",
      description: "gst_summary_description",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      chart: <GSTSummaryChart />
    },
    {
      id: "tax_liability",
      title: "tax_liability",
      description: "tax_liability_description",
      icon: <LineChart className="h-5 w-5 text-blue-500" />,
      chart: <TaxLiabilityChart />
    }
  ];

  // Get active reports based on selected tab
  const getActiveReports = () => {
    switch (activeTab) {
      case "financial":
        return financialReports;
      case "sales_reports":
        return salesReports;
      case "inventory_reports":
        return inventoryReports;
      case "tax_reports":
        return taxReports;
      default:
        return financialReports;
    }
  };

  return (
    <div className="p-4">
      {/* Report View Modal */}
      <ReportViewModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        reportType={currentReport}
        timeRange={timeRange}
      >
        <ReportContent
          reportType={currentReport}
          timeRange={timeRange}
          data={currentReportData}
        />
      </ReportViewModal>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Reports</h1>
          <p className="text-gray-500 dark:text-gray-400">reports_description</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none pl-8 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="last_7_days">last_7_days</option>
              <option value="last_30_days">last_30_days</option>
              <option value="last_90_days">last_90_days</option>
              <option value="this_year">this_year</option>
              <option value="custom">custom_range</option>
            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Tabs */}
      <div className="flex overflow-x-auto space-x-1 mb-6 border-b">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "financial"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("financial")}
        >
          financial
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "sales_reports"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("sales_reports")}
        >
          sales_reports
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "inventory_reports"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("inventory_reports")}
        >
          inventory_reports
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === "tax_reports"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
          }`}
          onClick={() => setActiveTab("tax_reports")}
        >
          tax_reports
        </button>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getActiveReports().map((report) => (
          <div key={report.id} className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium">{report.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {report.description}
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-md">
                  {report.icon}
                </div>
              </div>

              {/* Chart Placeholder */}
              {report.chart}

              <div className="mt-4 flex justify-between border-t pt-4">
                <button
                  onClick={() => handleView(report.id)}
                  disabled={isViewing}
                  className={`flex items-center text-sm ${
                    isViewing
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  <FileText className="h-4 w-4 mr-1" />
                  {isViewing ? "loading..." : "view"}
                </button>
                <button
                  onClick={() => handleDownload(report.id)}
                  disabled={isDownloading}
                  className={`flex items-center text-sm ${
                    isDownloading
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  <Download className="h-4 w-4 mr-1" />
                  {isDownloading ? "downloading..." : "download"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
