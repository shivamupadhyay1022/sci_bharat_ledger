import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/darkTheme.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import IndividualSales from "./pages/individual_sales";
import Purchases from "./pages/Purchases";
import Customers from "./pages/Customers";
import GST from "./pages/GST";
import Reports from "./pages/Reports";
import Documents from "./pages/Documents";
import SmartAI from "./pages/SmartAI";
import Settings from "./settings/Settings";

function App() {
  // Apply stored theme on load
  const [sidebarOpen, setSidebarOpen] = useState(false); // Changed default to false

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`flex flex-col flex-1 transition-all duration-300 md:${
        sidebarOpen ? "ml-64" : "ml-0"
      } h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
    >
      {/* Sidebar */}
      <div
        className={`fixed block inset-y-0 left-0 z-30 w-64 transform bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 transition-all duration-300 h-full">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/individual-sales" element={<IndividualSales />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/gst" element={<GST />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/smart-ai" element={<SmartAI />} />
            <Route path="/settings" element={<Settings />} />
            {/* other routes here */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
