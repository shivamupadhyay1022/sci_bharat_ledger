import React from 'react';

const SimpleLineChart = ({ data, height = 150 }) => {
  // Find the maximum value in the data to scale the chart
  const maxValue = Math.max(...data.map(point => point.value));
  
  // Calculate the width of each point based on the number of data points
  const pointWidth = 100 / (data.length - 1);
  
  return (
    <div style={{ height: `${height}px`, width: '100%', position: 'relative' }}>
      {/* Chart grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
        <div className="border-t border-gray-200 dark:border-gray-700 h-0"></div>
      </div>
      
      {/* SVG for the line chart */}
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Line connecting all points */}
        <polyline
          points={data.map((point, index) => 
            `${index * pointWidth},${100 - (point.value / maxValue * 100)}`
          ).join(' ')}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
        />
        
        {/* Data points */}
        {data.map((point, index) => (
          <circle
            key={index}
            cx={index * pointWidth}
            cy={100 - (point.value / maxValue * 100)}
            r="1.5"
            fill="#3b82f6"
          />
        ))}
      </svg>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
        {data.filter((_, i) => i % Math.ceil(data.length / 5) === 0 || i === data.length - 1).map((point, index) => (
          <div key={index} className="text-center" style={{ width: '20%' }}>
            {point.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleLineChart;
