import React from "react";
import { useTranslation } from "react-i18next";
import {
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Receipt,
} from "lucide-react";

import StatCard from "../components/Dashboard/StatCard";
import SalesChart from "../components/Dashboard/SalesChart";
import ActivityTimeline from "../components/Dashboard/ActivityTimeline";
import InventoryStatus from "../components/Dashboard/InventoryStatus";

const Dashboard = () => {
  const { t } = useTranslation();

  const invoiceData = [
    {
      number: "INV-2025",
      customer: "Reliance Digital",
      amount: "₹24,500",
      dueDate: "15 Apr 2025",
    },
    {
      number: "INV-2026",
      customer: "Sharma Electronics",
      amount: "₹18,750",
      dueDate: "18 Apr 2025",
    },
    {
      number: "INV-2027",
      customer: "NextGen Computers",
      amount: "₹32,100",
      dueDate: "20 Apr 2025",
    },
    {
      number: "INV-2028",
      customer: "City Mobile Store",
      amount: "₹15,400",
      dueDate: "25 Apr 2025",
    },
  ];

  return (
    <div className="space-y-6 flex flex-col w-full">
      <div>
        <h1 className="text-2xl font-semibold">{t("dashboard")}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {t("dashboard_welcome_message")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t("total_sales")}
          value="₹4,82,500"
          icon={<ShoppingCart className="h-5 w-5" />}
          change={12.5}
          changeText={t("vs_last_month")}
        />
        <StatCard
          title={t("expenses")}
          value="₹2,31,200"
          icon={<DollarSign className="h-5 w-5" />}
          change={-3.2}
          changeText={t("vs_last_month")}
        />
        <StatCard
          title={t("profit")}
          value="₹2,51,300"
          icon={<TrendingUp className="h-5 w-5" />}
          change={18.7}
          changeText={t("vs_last_month")}
        />
        <StatCard
          title={t("gst_due")}
          value="₹42,850"
          icon={<Receipt className="h-5 w-5" />}
          change={0}
          changeText={t("due_this_month")}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <InventoryStatus />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <ActivityTimeline />
        </div>
        <div className="rounded-lg border bg-white dark:bg-gray-900 p-4 shadow">
          <h3 className="mb-4 text-lg font-medium">{t("pending_invoices")}</h3>
          <div className="rounded border">
            <div className="grid grid-cols-5 gap-4 border-b bg-gray-100 dark:bg-gray-800 p-4 font-medium">
              <div>{t("in_no")}</div>
              <div>{t("cust")}</div>
              <div>{t("amnt")}</div>
              <div>{t("due")}</div>
              <div>{t("status")}</div>
            </div>
            <div>
              {invoiceData.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-5 gap-4 p-4 border-t text-sm"
                >
                  <div>{item.number}</div>
                  <div>{item.customer}</div>
                  <div>{item.amount}</div>
                  <div>{item.dueDate}</div>
                  <div>
                    <span className="inline-block rounded-full bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs">
                      {t("pending")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
            {t("view_all_invoices")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
