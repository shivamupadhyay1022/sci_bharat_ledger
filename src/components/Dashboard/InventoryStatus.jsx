import React from "react";
import { useTranslation } from "react-i18next";

const InventoryStatus = () => {
    const { t } = useTranslation();
    const inventoryItems = [
      { id: '1', name: 'Samsung Galaxy A54', currentStock: 25, reorderLevel: 10, totalCapacity: 50 },
      { id: '2', name: 'HP Printer Ink', currentStock: 4, reorderLevel: 5, totalCapacity: 20 },
      { id: '3', name: 'Dell Latitude Laptop', currentStock: 12, reorderLevel: 5, totalCapacity: 30 },
      { id: '4', name: 'Wireless Mouse', currentStock: 8, reorderLevel: 10, totalCapacity: 40 },
      { id: '5', name: 'USB-C Cable', currentStock: 27, reorderLevel: 15, totalCapacity: 50 },
    ];
  
    const getProgress = (item) => ((item.currentStock / item.totalCapacity) * 100).toFixed(0);
  
    return (
      <div className="border rounded p-4">
        <h3 className="font-medium mb-4">{t('inventory_status')}</h3>
        <div className="space-y-4">
          {inventoryItems.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between mb-1">
                <span>{item.name}</span>
                <span className="text-sm text-gray-500">{item.currentStock}/{item.totalCapacity}</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded">
                <div
                  className={`h-2 rounded ${item.currentStock <= item.reorderLevel ? 'bg-red-500' : 'bg-green-500'}`}
                  style={{ width: `${getProgress(item)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InventoryStatus