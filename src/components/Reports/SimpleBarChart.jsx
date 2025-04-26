import React from 'react';

const SimpleBarChart = ({ data, height = 150 }) => {
  // Find the maximum value in the data to scale the chart
  const maxValue = Math.max(...data.map(item => item.value));
  
  // Calculate the width of each bar based on the number of data points
  const barWidth = 100 / data.length;
  
  return (
    <div style={{ height: `${height}px`, width: '100%', position: 'relative' }}>
      {/* Chart grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
      </div>
      
      {/* SVG for the bar chart */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Bars */}
        {data.map((item, index) => {
          const barHeight = (item.value / maxValue) * 100;
          const x = index * barWidth;
          const y = 100 - barHeight;
          
          return (
            <rect
              key={index}
              x={x + barWidth * 0.1} // Add some spacing between bars
              y={y}
              width={barWidth * 0.8} // Make bars slightly narrower than the available space
              height={barHeight}
              fill="#3b82f6"
              opacity="0.8"
            />
          );
        })}
      </svg>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
        {data.map((item, index) => (
          <div key={index} className="text-center" style={{ width: `${barWidth}%` }}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleBarChart;
