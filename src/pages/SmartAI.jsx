import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Lightbulb,
  TrendingUp,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Send,
  Clock,
  Package,
  DollarSign,
  ThumbsUp,
  Calendar,
  ShoppingCart,
  Search,
  Gift,
  Shirt,
  Sparkles,
  FileText,
  MessageSquare,
  BarChart2,
  Tag,
  Settings,
  ToggleLeft,
  ToggleRight,
  User,
  Save
} from "lucide-react";

const SmartAI = () => {
  const { t } = useTranslation();
  const [chatMessage, setChatMessage] = useState("");

  // Sample data for the revenue vs expense chart
  const chartData = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    revenue: [6000, 4500, 11800, 6500, 6200, 6800, 7500],
    expenses: [3000, 3200, 3000, 2800, 3100, 3300, 3500]
  };

  // Sample data for top performing products
  const topProducts = [
    { name: "Premium T-Shirt", change: "+32%", value: "₹18,420" },
    { name: "Cotton Jeans", change: "+18%", value: "₹12,760" },
    { name: "Summer Dress", change: "+12%", value: "₹9,830" }
  ];

  // Sample data for underperforming SKUs
  const underperformingProducts = [
    { name: "Winter Jacket", change: "-15%", value: "₹4,120" },
    { name: "Formal Shoes", change: "-8%", value: "₹6,540" }
  ];

  // Sample suggestions
  const suggestions = [
    {
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
      text: "Increase stock of Diwali Gift Boxes before October 15",
      color: "bg-yellow-50"
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-green-500" />,
      text: "Sales of Summer Wear are trending up — promote these items",
      color: "bg-green-50"
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-red-500" />,
      text: "Profit margin is decreasing for Cotton Jeans — review vendor rates",
      color: "bg-red-50"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
      text: "Low inventory alert for Premium T-Shirt — reorder soon",
      color: "bg-orange-50"
    }
  ];

  // Sample quick questions
  const quickQuestions = [
    "What's my most profitable product?",
    "Should I increase my marketing budget?",
    "Generate a purchase order for summer inventory",
    "Show me trends for the last quarter"
  ];

  // AI Inventory Planner data
  const predictiveRestocking = [
    { name: "Premium T-Shirt (L)", color: "bg-red-100", text: "Restock 50 units before Diwali" },
    { name: "Cotton Jeans (32)", color: "bg-yellow-100", text: "Restock 30 units within 2 weeks" },
    { name: "Silk Saree", color: "bg-green-100", text: "Consider adding 15 units before wedding season" }
  ];

  const inventoryBurnRate = [
    { name: "Premium T-Shirt (M)", days: 4, progress: 20 },
    { name: "Cotton Jeans (30)", days: 12, progress: 60 },
    { name: "Summer Dress", days: 23, progress: 85 }
  ];

  const overstockAlert = [
    { name: "Winter Jacket", units: 235, suggestion: "Consider 15% discount" },
    { name: "Formal Shoes", units: 120, suggestion: "Bundle with formal shirts" }
  ];

  // Smart Expense & Purchase Suggestions data
  const expenseSuggestions = [
    {
      title: "Vendor Cost Comparison",
      description: "Buying Cotton Fabric from Vendor B has been 12% costlier — try Vendor A",
      action: "View Vendors",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Packaging Cost Reduction",
      description: "Reduce packaging cost by 8% using bulk buy option from Global Packaging Co.",
      action: "Create Order",
      icon: <Package className="h-5 w-5" />
    },
    {
      title: "Payment Splitting",
      description: "Split payment for invoice #3482 to manage cash flow better",
      action: "Split Payment",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Discount Opportunity",
      description: "Order inventory worth ₹50,000+ from TextilePro to avail 15% bulk discount",
      action: "Plan Order",
      icon: <ShoppingCart className="h-5 w-5" />
    }
  ];

  // Festival & Seasonal Preparation data
  const [activeTab, setActiveTab] = useState("Diwali");
  const festivalTabs = ["Diwali", "Raksha Bandhan", "Winter Season"];

  const festivalRecommendations = {
    Diwali: {
      date: "Oct 31, 2024 (28 days away)",
      recommendations: [
        "Stock Diwali gift boxes and festive packaging",
        "Prepare for high demand of traditional wear",
        "Order decorative items and LED lights"
      ]
    },
    "Raksha Bandhan": {
      date: "Aug 19, 2024 (3 months away)",
      recommendations: [
        "Stock rakhi gift hampers and premium rakhis",
        "Order special packaging for rakhi gifts",
        "Prepare for increased demand of sweets"
      ]
    },
    "Winter Season": {
      date: "Nov 15, 2024 (6 weeks away)",
      recommendations: [
        "Stock winter wear collection",
        "Prepare winter-themed gift packages",
        "Order winter accessories and thermal wear"
      ]
    }
  };

  // AI Trend Explorer data
  const [searchQuery, setSearchQuery] = useState("");
  const trendingCategories = [
    "Cotton T-Shirt", "Jeans", "Summer Dress", "Formal Shirt", "Casual Shoes"
  ];

  // Magic Actions data
  const magicActions = [
    {
      title: "Generate Purchase Order",
      description: "Auto-create PO for restocking top 10 fast-moving items",
      icon: <FileText className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Draft Customer Message",
      description: "Create WhatsApp message for upcoming sale or promotion",
      icon: <MessageSquare className="h-5 w-5 text-green-500" />
    },
    {
      title: "Create Sales Summary",
      description: "Generate monthly report with key metrics and insights",
      icon: <BarChart2 className="h-5 w-5 text-purple-500" />
    },
    {
      title: "Suggest Clearance Items",
      description: "Identify slow-moving items to put on clearance sale",
      icon: <Tag className="h-5 w-5 text-orange-500" />
    }
  ];

  // Admin Controls data
  const moduleControls = [
    { name: "Business Insights", enabled: true },
    { name: "Inventory Planning", enabled: true },
    { name: "Expense Suggestions", enabled: true },
    { name: "Festival Calendar", enabled: true },
    { name: "Magic Actions", enabled: true },
    { name: "Chat Assistant", enabled: true }
  ];

  const recentAIActions = [
    {
      action: "Generated Purchase Order",
      details: "#PO123",
      time: "2 hours ago",
      user: "Raj Sharma"
    },
    {
      action: "Created Monthly Sales Report",
      details: "",
      time: "Yesterday, 13:30",
      user: "Priya Patel"
    },
    {
      action: "Generated Clearance Items List",
      details: "",
      time: "Yesterday, 10:15",
      user: "Raj Sharma"
    },
    {
      action: "Created Customer Message Draft",
      details: "",
      time: "2 days ago",
      user: "Sunita Kumar"
    }
  ];

  // Function to render the area chart
  const renderAreaChart = () => {
    // Use viewBox for responsive scaling
    const viewBoxWidth = 400;
    const viewBoxHeight = 200;
    const maxValue = Math.max(...chartData.revenue);

    // Calculate points for the revenue area
    let revenuePoints = "";
    let expensePoints = "";

    chartData.months.forEach((month, index) => {
      const x = (index / (chartData.months.length - 1)) * viewBoxWidth;
      const revenueY = viewBoxHeight - (chartData.revenue[index] / maxValue) * viewBoxHeight;
      const expenseY = viewBoxHeight - (chartData.expenses[index] / maxValue) * viewBoxHeight;

      revenuePoints += `${x},${revenueY} `;
      expensePoints += `${x},${expenseY} `;
    });

    // Create the area paths
    const revenuePath = `M0,${viewBoxHeight} ${revenuePoints} ${viewBoxWidth},${viewBoxHeight} Z`;
    const expensePath = `M0,${viewBoxHeight} ${expensePoints} ${viewBoxWidth},${viewBoxHeight} Z`;

    return (
      <div className="w-full h-full mt-4">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full"
          style={{ minHeight: '200px', maxHeight: '300px' }}
        >
          {/* Expense area (purple) */}
          <path d={expensePath} fill="#a78bfa" opacity="0.7" />

          {/* Revenue area (orange) */}
          <path d={revenuePath} fill="#fb923c" opacity="0.7" />

          {/* X-axis labels */}
          {chartData.months.map((month, index) => (
            <text
              key={index}
              x={(index / (chartData.months.length - 1)) * viewBoxWidth}
              y={viewBoxHeight - 5}
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              {month}
            </text>
          ))}

          {/* Y-axis labels */}
          <text x="5" y="15" fontSize="10" fill="#6b7280">12000</text>
          <text x="5" y="55" fontSize="10" fill="#6b7280">9000</text>
          <text x="5" y="95" fontSize="10" fill="#6b7280">6000</text>
          <text x="5" y="135" fontSize="10" fill="#6b7280">3000</text>
          <text x="5" y="175" fontSize="10" fill="#6b7280">0</text>
        </svg>
      </div>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">SmartAI Assistant</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Main Content */}
        <div className="w-full lg:w-7/12 space-y-6">
          {/* AI Inventory Planner */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold">AI Inventory Planner</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">AI-powered inventory recommendations</p>

            {/* Predictive Restocking */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Predictive Restocking
              </h3>
              <div className="space-y-2">
                {predictiveRestocking.map((item, index) => (
                  <div key={index} className={`${item.color} p-3 rounded-md`}>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inventory Burn Rate */}
            <div className="mb-6">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Inventory Burn Rate
              </h3>
              <div className="space-y-3">
                {inventoryBurnRate.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{item.name}</span>
                      <span className="text-sm">{item.days} days left</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          item.progress < 30 ? 'bg-red-500' :
                          item.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overstock Alert */}
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Overstock Alert
              </h3>
              <div className="space-y-2">
                {overstockAlert.map((item, index) => (
                  <div key={index} className="bg-white border rounded-md p-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-700 font-medium">{item.units} units</span>
                    </div>
                    <div className="text-gray-500 text-sm">Suggestion: {item.suggestion}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Smart Expense & Purchase Suggestions */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <h2 className="text-lg font-semibold">Smart Expense & Purchase Suggestions</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">AI-recommended ways to optimize costs and purchases</p>

            <div className="space-y-4">
              {expenseSuggestions.map((suggestion, index) => (
                <div key={index} className="border rounded-md p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 mt-0.5 text-blue-500">
                      {suggestion.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{suggestion.title}</h4>
                      <p className="text-sm text-gray-600">{suggestion.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-sm text-blue-600 font-medium flex items-center gap-1">
                      {suggestion.action} <ArrowUp className="h-3 w-3 rotate-45" />
                    </button>
                    <button className="text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Business Insights Dashboard */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <h2 className="text-lg font-semibold">AI Business Insights Dashboard</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">Today's AI-generated business summary and recommendations</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue vs Expense Trend */}
              <div className="w-full">
                <h3 className="font-medium mb-2">Revenue vs Expense Trend</h3>
                {renderAreaChart()}

                <div className="mt-4">
                  <p className="text-sm font-medium">AI Analysis:</p>
                  <p className="text-sm text-gray-600">
                    Your revenue has been increasing since May, while expenses are stabilizing. Continue the current strategy.
                  </p>
                </div>
              </div>

              {/* Top Performing Products */}
              <div>
                <h3 className="font-medium mb-2">Top Performing Products</h3>
                <div className="space-y-2">
                  {topProducts.map((product, index) => (
                    <div key={index} className="bg-white border rounded-md p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-green-500 font-medium">{product.change}</span>
                      </div>
                      <div className="text-gray-500 text-sm">{product.value}</div>
                    </div>
                  ))}
                </div>

                <h3 className="font-medium mt-6 mb-2">Underperforming SKUs</h3>
                <div className="space-y-2">
                  {underperformingProducts.map((product, index) => (
                    <div key={index} className="bg-white border rounded-md p-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-red-500 font-medium">{product.change}</span>
                      </div>
                      <div className="text-gray-500 text-sm">{product.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Smart Suggestions */}
            <div className="mt-8">
              <h3 className="font-medium mb-4">Smart Suggestions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className={`${suggestion.color} p-4 rounded-md flex items-start gap-3`}>
                    <div className="flex-shrink-0 mt-0.5">{suggestion.icon}</div>
                    <p className="text-sm">{suggestion.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Festival & Seasonal Preparation */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="h-5 w-5 text-purple-500" />
                <h2 className="text-lg font-semibold">Festival & Seasonal Preparation</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">AI-powered recommendations for upcoming festivals and seasons</p>

              {/* Tabs */}
              <div className="flex border-b mb-4">
                {festivalTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 text-sm font-medium ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
                <div className="ml-auto">
                  <button className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" /> Calendar View
                  </button>
                </div>
              </div>

              {/* Active Tab Content */}
              <div>
                <h3 className="font-medium text-lg">{activeTab}</h3>
                <p className="text-sm text-gray-500 mb-4">{festivalRecommendations[activeTab].date}</p>

                <div className="mb-2 font-medium">AI Recommendations:</div>
                <div className="space-y-2">
                  {festivalRecommendations[activeTab].recommendations.map((rec, index) => (
                    <div key={index} className="border rounded-md p-3 flex items-start gap-3">
                      <div className="flex-shrink-0 bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">{index + 1}</span>
                      </div>
                      <p>{rec}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
                    One-Click Stock Plan <ArrowUp className="h-4 w-4 ml-1 rotate-45" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row - Two Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* AI Trend Explorer */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <h2 className="text-lg font-semibold">AI Trend Explorer</h2>
                </div>
                <p className="text-sm text-gray-500 mb-4">Analyze product trends and forecasts</p>

                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Enter product name or category"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-1 rounded">
                    <Search className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {trendingCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-md px-3 py-1 text-sm cursor-pointer hover:bg-gray-200"
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>

              {/* Magic Actions */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  <h2 className="text-lg font-semibold">Magic Actions</h2>
                </div>
                <p className="text-sm text-gray-500 mb-4">One-click AI-powered business actions</p>

                <div className="space-y-3">
                  {magicActions.map((action, index) => (
                    <div key={index} className="border rounded-md p-3">
                      <div className="flex justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            {action.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{action.title}</h4>
                            <p className="text-xs text-gray-500">{action.description}</p>
                          </div>
                        </div>
                        <button className="text-blue-600">
                          <ArrowUp className="h-4 w-4 rotate-45" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Admin Controls */}
            <div className="bg-white rounded-lg shadow p-6 mt-8">
              <div className="flex items-center gap-2 mb-2">
                <Settings className="h-5 w-5 text-gray-700" />
                <h2 className="text-lg font-semibold">Admin Controls</h2>
              </div>
              <p className="text-sm text-gray-500 mb-6">Manage AI features and review actions</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Module Controls */}
                <div>
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <Settings className="h-4 w-4" /> Module Controls
                  </h3>
                  <div className="space-y-3">
                    {moduleControls.map((module, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{module.name}</span>
                        <button className="text-blue-600">
                          {module.enabled ?
                            <ToggleRight className="h-5 w-5" /> :
                            <ToggleLeft className="h-5 w-5" />
                          }
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent AI Actions */}
                <div>
                  <h3 className="font-medium mb-4 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Recent AI Actions
                  </h3>
                  <div className="space-y-3">
                    {recentAIActions.map((item, index) => (
                      <div key={index} className="border-b pb-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{item.action}</span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <Save className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">{item.details}</span>
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3 text-gray-500" />
                            <span className="text-xs text-gray-500">{item.user}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - AI Chat Assistant */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-6 self-start">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-5 w-5 bg-blue-500 rounded-md flex items-center justify-center text-white">
                  <span className="text-xs font-bold">AI</span>
                </div>
                <h2 className="text-lg font-semibold">AI Chat Assistant</h2>
              </div>
              <p className="text-sm text-gray-500">Ask anything about your business</p>
            </div>

            <div className="h-[30vh] min-h-[250px] max-h-[400px] overflow-y-auto p-4">
              {/* AI Message */}
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                  <p className="text-sm">Hello! I'm your AI assistant. How can I help with your business today?</p>
                </div>
                <div className="text-xs text-gray-500 mt-1">05:42 am</div>
              </div>

              {/* More messages would go here */}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t">
              <p className="text-sm font-medium mb-3">Try asking:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="text-xs border rounded-md p-2 cursor-pointer hover:bg-gray-50 truncate"
                  >
                    {question}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask any business question..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="w-full border rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAI;
