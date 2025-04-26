/**
 * Utility functions for report generation and download
 */

/**
 * Format a date as YYYY-MM-DD
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Generate a filename for a report download
 * @param {string} reportType - The type of report
 * @param {string} extension - The file extension (default: html)
 * @returns {string} Formatted filename with current date
 */
export const generateReportFilename = (reportType, extension = 'html') => {
  const today = new Date();
  const formattedDate = formatDate(today);
  return `${reportType}_${formattedDate}.${extension}`;
};

/**
 * Function to download a report as HTML
 * This creates an HTML file and triggers a download
 * @param {string} reportType - The type of report to download
 * @param {string} timeRange - The time range for the report
 * @param {Array} data - The data for the report
 * @returns {Promise} A promise that resolves when the download is complete
 */
export const downloadReport = (reportType, timeRange, data) => {
  return new Promise((resolve, reject) => {
    try {
      const filename = generateReportFilename(reportType);
      console.log(`Generating ${filename}...`);

      // Format the report title
      const formattedTitle = reportType.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const formattedTimeRange = timeRange.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      // Company information
      const companyName = "TheSci Bharat Ledger";
      const companyAddress = "123 Tech Park, Bangalore, Karnataka, India - 560001";
      const companyPhone = "+91 9876543210";
      const companyEmail = "info@scibharatledger.com";
      const companyGSTIN = "29AABCT1234Z1Z5";

      // Create an HTML content for the report
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${formattedTitle} Report</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 2px solid #3b82f6;
              padding-bottom: 20px;
            }
            .company-name {
              font-size: 24px;
              font-weight: bold;
              color: #3b82f6;
              margin-bottom: 5px;
            }
            .company-info {
              font-size: 12px;
              margin-bottom: 3px;
            }
            .report-title {
              font-size: 20px;
              font-weight: bold;
              margin: 20px 0 10px;
              color: #1f2937;
            }
            .report-subtitle {
              font-size: 14px;
              color: #6b7280;
              margin-bottom: 20px;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-title {
              font-size: 16px;
              font-weight: bold;
              margin-bottom: 10px;
              color: #1f2937;
            }
            .summary {
              background-color: #f9fafb;
              padding: 15px;
              border-radius: 5px;
              margin-bottom: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #e5e7eb;
              padding: 8px 12px;
              text-align: left;
            }
            th {
              background-color: #f3f4f6;
              font-weight: bold;
            }
            tr:nth-child(even) {
              background-color: #f9fafb;
            }
            .footer {
              margin-top: 50px;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
              border-top: 1px solid #e5e7eb;
              padding-top: 20px;
            }
            @media print {
              body {
                padding: 0;
                margin: 20px;
              }
              .print-button {
                display: none;
              }
            }
            .print-button {
              background-color: #3b82f6;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              margin-bottom: 20px;
            }
            .print-button:hover {
              background-color: #2563eb;
            }
          </style>
        </head>
        <body>
          <button class="print-button" onclick="window.print()">Print Report</button>

          <div class="header">
            <div class="company-name">${companyName}</div>
            <div class="company-info">${companyAddress}</div>
            <div class="company-info">Phone: ${companyPhone} | Email: ${companyEmail}</div>
            <div class="company-info">GSTIN: ${companyGSTIN}</div>
          </div>

          <div class="report-title">${formattedTitle} Report</div>
          <div class="report-subtitle">Period: ${formattedTimeRange} | Generated on: ${new Date().toLocaleDateString()}</div>

          <div class="section">
            <div class="section-title">Summary</div>
            <div class="summary">
              <p>This report provides an overview of ${formattedTitle.toLowerCase()} for the selected time period.
              ${reportType.includes('profit') ? ' It shows the company\'s revenue, expenses, and resulting profit or loss.' : ''}
              ${reportType.includes('balance') ? ' It presents the company\'s assets, liabilities, and equity.' : ''}
              ${reportType.includes('flow') ? ' It tracks the inflow and outflow of cash in the business.' : ''}
              ${reportType.includes('product') ? ' It breaks down sales by different product categories.' : ''}
              ${reportType.includes('customer') ? ' It segments sales by customer types.' : ''}
              ${reportType.includes('valuation') ? ' It shows the current value of inventory by category.' : ''}
              ${reportType.includes('movement') ? ' It tracks changes in inventory levels over time.' : ''}
              ${reportType.includes('gst') ? ' It summarizes GST collected and paid during the period.' : ''}
              ${reportType.includes('liability') ? ' It shows tax obligations over time.' : ''}</p>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Visualization</div>
            <div style="display: flex; justify-content: center; margin-bottom: 20px;">
              ${generateChartHtml(reportType, data)}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Detailed Data</div>
            <table>
              <thead>
                <tr>
                  ${getTableHeaders(reportType).map(header => `<th>${header}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${getTableRows(reportType, data)}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <p>This is an automatically generated report. For any queries, please contact our support team.</p>
            <p>© ${new Date().getFullYear()} ${companyName}. All rights reserved.</p>
          </div>

          <script>
            // You can add any JavaScript functionality here if needed
            document.addEventListener('DOMContentLoaded', function() {
              console.log('Report loaded successfully');
            });
          </script>
        </body>
        </html>
      `;

      // Create a Blob from the HTML content
      const blob = new Blob([htmlContent], { type: 'text/html' });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;

      // Append the link to the body
      document.body.appendChild(link);

      // Trigger the download
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      console.log(`Download complete: ${filename}`);
      resolve(filename);
    } catch (error) {
      console.error('Error downloading report:', error);
      reject(error);
    }
  });
};

/**
 * Get table headers based on report type
 * @param {string} reportType - The type of report
 * @returns {Array} Array of header strings
 */
function getTableHeaders(reportType) {
  if (reportType.includes('by_product') || reportType.includes('valuation')) {
    return ['Category', 'Value', 'Percentage'];
  } else if (reportType.includes('profit') || reportType.includes('flow') || reportType.includes('movement')) {
    return ['Period', 'Value', 'Change', 'Trend'];
  } else {
    return ['Category', 'Value', 'Percentage'];
  }
}

/**
 * Generate HTML for chart visualization based on report type and data
 * @param {string} reportType - The type of report
 * @param {Array} data - The data for the report
 * @returns {string} HTML string for chart visualization
 */
function generateChartHtml(reportType, data) {
  if (!data || data.length === 0) {
    return '<div>No data available for visualization</div>';
  }

  // For pie charts (product or valuation reports)
  if (reportType.includes('by_product') || reportType.includes('valuation') || reportType.includes('customer')) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let pieHtml = `
      <div style="width: 400px; height: 300px; position: relative;">
        <svg width="400" height="300" viewBox="0 0 400 300">
          <g transform="translate(200, 150)">
    `;

    let startAngle = 0;
    data.forEach((item, index) => {
      const percentage = item.value / total;
      const endAngle = startAngle + percentage * Math.PI * 2;

      // Calculate the SVG arc path
      const radius = 100;
      const x1 = Math.cos(startAngle) * radius;
      const y1 = Math.sin(startAngle) * radius;
      const x2 = Math.cos(endAngle) * radius;
      const y2 = Math.sin(endAngle) * radius;

      // Determine if the arc should be drawn as a large arc (more than 180 degrees)
      const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

      // Create the SVG path
      const path = `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

      // Get color
      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'];
      const color = colors[index % colors.length];

      pieHtml += `<path d="${path}" fill="${color}" stroke="white" stroke-width="1"></path>`;

      startAngle = endAngle;
    });

    pieHtml += `
          </g>
        </svg>
        <div style="position: absolute; top: 300px; left: 0; width: 100%;">
          <div style="display: flex; flex-wrap: wrap; justify-content: center; margin-top: 10px;">
    `;

    data.forEach((item, index) => {
      const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'];
      const color = colors[index % colors.length];
      const percentage = ((item.value / total) * 100).toFixed(1);

      pieHtml += `
        <div style="display: flex; align-items: center; margin: 5px 10px;">
          <div style="width: 12px; height: 12px; background-color: ${color}; margin-right: 5px;"></div>
          <span style="font-size: 12px;">${item.label} (${percentage}%)</span>
        </div>
      `;
    });

    pieHtml += `
          </div>
        </div>
      </div>
    `;

    return pieHtml;
  }

  // For bar charts (balance sheet, gst summary)
  else if (reportType.includes('balance_sheet') || reportType.includes('gst_summary')) {
    const maxValue = Math.max(...data.map(item => item.value));
    const barWidth = 400 / data.length;

    let barHtml = `
      <div style="width: 400px; height: 300px; position: relative;">
        <svg width="400" height="250" viewBox="0 0 400 250">
          <!-- Y-axis -->
          <line x1="40" y1="10" x2="40" y2="220" stroke="#ccc" />
          <!-- X-axis -->
          <line x1="40" y1="220" x2="390" y2="220" stroke="#ccc" />
    `;

    // Add grid lines
    for (let i = 0; i < 5; i++) {
      const y = 220 - i * 52.5;
      barHtml += `<line x1="40" y1="${y}" x2="390" y2="${y}" stroke="#eee" stroke-dasharray="2,2" />`;
      barHtml += `<text x="35" y="${y}" text-anchor="end" font-size="10" fill="#666">₹${((i * maxValue) / 4).toLocaleString('en-IN')}</text>`;
    }

    // Add bars
    data.forEach((item, index) => {
      const barHeight = (item.value / maxValue) * 200;
      const x = 40 + index * barWidth + barWidth * 0.1;
      const y = 220 - barHeight;
      const width = barWidth * 0.8;

      barHtml += `
        <rect x="${x}" y="${y}" width="${width}" height="${barHeight}" fill="#3b82f6" opacity="0.8" />
        <text x="${x + width/2}" y="235" text-anchor="middle" font-size="10" fill="#666">${item.label}</text>
      `;
    });

    barHtml += `
        </svg>
      </div>
    `;

    return barHtml;
  }

  // For line charts (profit/loss, cash flow, stock movement, tax liability)
  else {
    const maxValue = Math.max(...data.map(item => item.value));
    const pointWidth = 360 / (data.length - 1);

    let lineHtml = `
      <div style="width: 400px; height: 300px; position: relative;">
        <svg width="400" height="250" viewBox="0 0 400 250">
          <!-- Y-axis -->
          <line x1="40" y1="10" x2="40" y2="220" stroke="#ccc" />
          <!-- X-axis -->
          <line x1="40" y1="220" x2="390" y2="220" stroke="#ccc" />
    `;

    // Add grid lines
    for (let i = 0; i < 5; i++) {
      const y = 220 - i * 52.5;
      lineHtml += `<line x1="40" y1="${y}" x2="390" y2="${y}" stroke="#eee" stroke-dasharray="2,2" />`;
      lineHtml += `<text x="35" y="${y}" text-anchor="end" font-size="10" fill="#666">₹${((i * maxValue) / 4).toLocaleString('en-IN')}</text>`;
    }

    // Create the polyline points
    let points = '';
    data.forEach((item, index) => {
      const x = 40 + index * pointWidth;
      const y = 220 - (item.value / maxValue) * 200;
      points += `${x},${y} `;
    });

    // Add the line
    lineHtml += `<polyline points="${points}" fill="none" stroke="#3b82f6" stroke-width="2" />`;

    // Add the points
    data.forEach((item, index) => {
      const x = 40 + index * pointWidth;
      const y = 220 - (item.value / maxValue) * 200;
      lineHtml += `<circle cx="${x}" cy="${y}" r="4" fill="#3b82f6" />`;

      // Add x-axis labels
      if (index % Math.ceil(data.length / 8) === 0 || index === data.length - 1) {
        lineHtml += `<text x="${x}" y="235" text-anchor="middle" font-size="10" fill="#666">${item.label}</text>`;
      }
    });

    lineHtml += `
        </svg>
      </div>
    `;

    return lineHtml;
  }
}

/**
 * Generate table rows HTML based on report type and data
 * @param {string} reportType - The type of report
 * @param {Array} data - The data for the report
 * @returns {string} HTML string for table rows
 */
function getTableRows(reportType, data) {
  if (!data || data.length === 0) {
    return '<tr><td colspan="4">No data available</td></tr>';
  }

  let rows = '';

  if (reportType.includes('by_product') || reportType.includes('valuation')) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    data.forEach(item => {
      const percentage = ((item.value / total) * 100).toFixed(1);
      rows += `
        <tr>
          <td>${item.label}</td>
          <td>₹${item.value.toLocaleString('en-IN')}</td>
          <td>${percentage}%</td>
        </tr>
      `;
    });
  } else if (reportType.includes('profit') || reportType.includes('flow') || reportType.includes('movement')) {
    data.forEach((item, index) => {
      const prevValue = index > 0 ? data[index - 1].value : item.value;
      const change = ((item.value - prevValue) / prevValue * 100).toFixed(1);
      const trend = item.value > prevValue ? 'Up' : 'Down';
      rows += `
        <tr>
          <td>${item.label}</td>
          <td>₹${item.value.toLocaleString('en-IN')}</td>
          <td>${change}%</td>
          <td>${trend}</td>
        </tr>
      `;
    });
  } else {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    data.forEach(item => {
      const percentage = ((item.value / total) * 100).toFixed(1);
      rows += `
        <tr>
          <td>${item.label}</td>
          <td>₹${item.value.toLocaleString('en-IN')}</td>
          <td>${percentage}%</td>
        </tr>
      `;
    });
  }

  return rows;
}

/**
 * Mock function to simulate viewing a report
 * In a real application, this would open a modal or navigate to a report view
 * @param {string} reportType - The type of report to view
 * @param {string} timeRange - The time range for the report
 * @returns {Promise} A promise that resolves when the report is ready to view
 */
export const viewReport = (reportType, timeRange) => {
  return new Promise((resolve) => {
    console.log(`Preparing ${reportType} report for ${timeRange}...`);

    // Simulate API call delay
    setTimeout(() => {
      console.log(`Report ready: ${reportType}`);

      // In a real application, this would open a modal or navigate to a report view
      // For now, we'll just show an alert
      alert(`Viewing ${reportType} report for ${timeRange}`);

      resolve(true);
    }, 500);
  });
};
