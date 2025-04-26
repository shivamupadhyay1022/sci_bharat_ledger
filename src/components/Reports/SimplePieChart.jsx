import React from 'react';

const SimplePieChart = ({ data, size = 150 }) => {
  // Calculate the total value
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate the segments
  let startAngle = 0;
  const segments = data.map((item, index) => {
    const percentage = item.value / total;
    const endAngle = startAngle + percentage * 360;
    
    // Convert angles to radians for calculations
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (endAngle - 90) * Math.PI / 180;
    
    // Calculate the SVG arc path
    const radius = 50;
    const x1 = radius + radius * Math.cos(startRad);
    const y1 = radius + radius * Math.sin(startRad);
    const x2 = radius + radius * Math.cos(endRad);
    const y2 = radius + radius * Math.sin(endRad);
    
    // Determine if the arc should be drawn as a large arc (more than 180 degrees)
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    // Create the SVG path
    const path = `M ${radius} ${radius} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    
    // Store the current end angle as the start angle for the next segment
    const segment = {
      path,
      color: item.color || getColorByIndex(index),
      label: item.label,
      percentage: (percentage * 100).toFixed(1)
    };
    
    startAngle = endAngle;
    return segment;
  });
  
  // Function to get a color based on index
  function getColorByIndex(index) {
    const colors = [
      '#3b82f6', // blue
      '#10b981', // green
      '#f59e0b', // yellow
      '#ef4444', // red
      '#8b5cf6', // purple
      '#ec4899', // pink
      '#06b6d4', // cyan
      '#f97316', // orange
    ];
    return colors[index % colors.length];
  }
  
  return (
    <div className="flex flex-col items-center" style={{ width: `${size}px`, height: `${size}px` }}>
      {/* SVG for the pie chart */}
      <svg width={size} height={size} viewBox="0 0 100 100">
        {segments.map((segment, index) => (
          <path
            key={index}
            d={segment.path}
            fill={segment.color}
            stroke="#fff"
            strokeWidth="1"
          />
        ))}
      </svg>
      
      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs w-full">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 mr-1 rounded-sm"
              style={{ backgroundColor: segment.color }}
            ></div>
            <span className="truncate">{segment.label} ({segment.percentage}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimplePieChart;
