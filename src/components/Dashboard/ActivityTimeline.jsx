import React from "react";
import {  ShoppingCart, CreditCard, Package, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from "react-i18next";

const ActivityTimeline = () => {
    const { t } = useTranslation();
    const activities = [
      { id: '1', title: t('sale_recorded'), description: t('order_id', { id: 'ORD-7845' }), time: '10:25 AM', type: 'sale' },
      { id: '2', title: t('payment_received'), description: '₹25,000.00 - via UPI', time: '9:40 AM', type: 'payment' },
      { id: '3', title: t('inventory_updated'), description: t('item_qty_changed', { name: 'Samsung Galaxy A54', qty: '+10' }), time: 'Yesterday', type: 'inventory' },
      { id: '4', title: t('low_stock_alert'), description: t('item_low_stock', { name: 'HP Printer Ink', threshold: '5' }), time: 'Yesterday', type: 'alert' },
      { id: '5', title: t('customer_added'), description: 'Rahul Sharma - rahul@example.com', time: '2 days ago', type: 'customer' },
      { id: '6', title: t('gst_filing_reminder'), description: t('gst_due_date', { date: 'April 20, 2025' }), time: '3 days ago', type: 'alert' },
    ];
  
    const getIcon = (type) => {
      switch (type) {
        case 'sale': return <ShoppingCart className="h-4 w-4" />;
        case 'payment': return <CreditCard className="h-4 w-4" />;
        case 'inventory': return <Package className="h-4 w-4" />;
        case 'customer': return <Users className="h-4 w-4" />;
        case 'alert': return <AlertCircle className="h-4 w-4" />;
        case 'success': return <CheckCircle className="h-4 w-4" />;
        default: return <AlertCircle className="h-4 w-4" />;
      }
    };
  
    return (
      <div className="border rounded p-4">
        <h3 className="font-medium mb-4">{t('recent_activity')}</h3>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex gap-3 items-start">
              <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">{getIcon(activity.type)}</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium">{activity.title}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
 export default ActivityTimeline  