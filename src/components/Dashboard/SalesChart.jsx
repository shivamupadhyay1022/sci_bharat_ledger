import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  ArrowUp,
  ShoppingCart,
  CreditCard,
  Package,
  Users,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const SalesChart = () => {
  const { t } = useTranslation();
  const [period, setPeriod] = React.useState("month");

  const dailyData = [
    { date: "04/01", sales: 12500, expenses: 7800 },
    { date: "04/02", sales: 14200, expenses: 8100 },
    { date: "04/03", sales: 15800, expenses: 7500 },
    { date: "04/04", sales: 16200, expenses: 7900 },
    { date: "04/05", sales: 18900, expenses: 8500 },
    { date: "04/06", sales: 17500, expenses: 8200 },
    { date: "04/07", sales: 19200, expenses: 8700 },
    { date: "04/08", sales: 20500, expenses: 9100 },
    { date: "04/09", sales: 21800, expenses: 9600 },
    { date: "04/10", sales: 22900, expenses: 10200 },
    { date: "04/11", sales: 23500, expenses: 10500 },
    { date: "04/12", sales: 21200, expenses: 9800 },
    { date: "04/13", sales: 19800, expenses: 9200 },
    { date: "04/14", sales: 20100, expenses: 9400 },
  ];

  const monthlyData = [
    { date: "Jan", sales: 320000, expenses: 180000 },
    { date: "Feb", sales: 340000, expenses: 190000 },
    { date: "Mar", sales: 360000, expenses: 195000 },
    { date: "Apr", sales: 400000, expenses: 210000 },
    { date: "May", sales: 450000, expenses: 230000 },
    { date: "Jun", sales: 420000, expenses: 215000 },
    { date: "Jul", sales: 380000, expenses: 200000 },
    { date: "Aug", sales: 390000, expenses: 205000 },
    { date: "Sep", sales: 430000, expenses: 220000 },
    { date: "Oct", sales: 460000, expenses: 235000 },
    { date: "Nov", sales: 480000, expenses: 245000 },
    { date: "Dec", sales: 520000, expenses: 260000 },
  ];

  const yearlyData = [
    { date: "2020", sales: 4200000, expenses: 2100000 },
    { date: "2021", sales: 4800000, expenses: 2400000 },
    { date: "2022", sales: 5300000, expenses: 2650000 },
    { date: "2023", sales: 5900000, expenses: 2950000 },
    { date: "2024", sales: 6500000, expenses: 3250000 },
  ];

  const getData = () => {
    switch (period) {
      case "day":
        return dailyData;
      case "year":
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  return (
    <div className="border rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{t("sales_overview")}</h2>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="border dark:bg-gray-900 px-2 py-1 rounded"
        >
          <option value="day">{t("daily")}</option>
          <option value="month">{t("monthly")}</option>
          <option value="year">{t("yearly")}</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>{t("date")}</th>
              <th>{t("sales")}</th>
              <th>{t("expenses")}</th>
            </tr>
          </thead>
          <tbody>
            {getData().map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>₹{item.sales.toLocaleString("en-IN")}</td>
                <td>₹{item.expenses.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesChart;
