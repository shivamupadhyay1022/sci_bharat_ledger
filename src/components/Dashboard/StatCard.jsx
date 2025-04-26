import React from "react";
import { ArrowDown, ArrowUp } from 'lucide-react';


const StatCard = ({ title, value, icon, change, changeText }) => {
    const isPositive = change > 0;
    const isNegative = change < 0;
  
    return (
      <div className="border rounded p-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">{title}</p>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">{icon}</div>
        </div>
        <div className="mt-2 text-2xl font-bold">{value}</div>
        {change !== undefined && (
          <div className="mt-1 text-xs flex items-center">
            <span className={`flex items-center gap-1 ${isPositive ? 'text-green-600' : isNegative ? 'text-red-600' : 'text-gray-600'}`}>
              {isPositive && <ArrowUp className="h-3 w-3" />}
              {isNegative && <ArrowDown className="h-3 w-3" />}
              {change}%
            </span>
            {changeText && <span className="ml-1 text-gray-500">{changeText}</span>}
          </div>
        )}
      </div>
    );
  };

  export default StatCard