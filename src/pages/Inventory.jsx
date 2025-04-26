import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/card-updated";

const Inventory = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const products = [
    { id: '1', name: 'Samsung Galaxy A54', sku: 'SAMS-A54-8GB', category: 'Electronics', stock: 25, price: 28999 },
    { id: '2', name: 'HP Printer Ink Cartridge', sku: 'HP-INK-BK-21', category: 'Accessories', stock: 4, price: 1200 },
    { id: '3', name: 'Dell Latitude 3420 Laptop', sku: 'DELL-LAT-3420', category: 'Electronics', stock: 12, price: 68500 },
    { id: '4', name: 'Wireless Mouse Microsoft', sku: 'MS-WL-MOUSE', category: 'Accessories', stock: 8, price: 1800 },
  ];

  const categories = ['Electronics', 'Accessories'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{t('inventory')}</h1>
          <p className="text-muted-foreground">{t('inventory_welcome_message')}</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 whitespace-nowrap dark:bg-blue-700 dark:hover:bg-blue-800">
          + {t('add_product')}
        </button>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div>
            <CardTitle>{t('inventory')}</CardTitle>
            <CardDescription>{t('inventory_welcome_message')}</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="text"
              placeholder={t('search_inventory')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border px-3 py-2 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border px-3 py-2 rounded-md w-full sm:w-auto dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="all">{t('all_categories')}</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </CardHeader>

        <CardContent className="overflow-x-auto p-0">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
                <thead className="bg-muted text-muted-foreground dark:bg-gray-700 dark:text-gray-200">
                  <tr>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold">{t('product_name')}</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold hidden md:table-cell">SKU</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold hidden sm:table-cell">{t('category')}</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold">{t('stock')}</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold">{t('price')}</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold hidden lg:table-cell">GST</th>
                    <th className="px-4 md:px-6 py-3 text-left font-semibold">{t('actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-t hover:bg-muted/50">
                      <td className="px-4 md:px-6 py-4 font-medium">{product.name}</td>
                      <td className="px-4 md:px-6 py-4 hidden md:table-cell">{product.sku}</td>
                      <td className="px-4 md:px-6 py-4 hidden sm:table-cell">{product.category}</td>
                      <td className="px-4 md:px-6 py-4">
                        {product.stock > 10 ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                            {t('in_stock')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                            {t('low_stock')}
                          </span>
                        )}
                      </td>
                      <td className="px-4 md:px-6 py-4">₹{product.price.toLocaleString('en-IN')}</td>
                      <td className="px-4 md:px-6 py-4 hidden lg:table-cell">18%</td>
                      <td className="px-4 md:px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-muted-foreground hover:text-primary">👁️</button>
                          <button className="text-muted-foreground hover:text-primary">✏️</button>
                          <button className="text-red-600 hover:text-red-800">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Inventory;
