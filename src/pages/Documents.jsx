import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Search,
  Filter,
  RotateCcw,
  Upload,
  Eye,
  Download,
  Trash2,
  FileText,
  FileSpreadsheet,
  FileImage,
  File
} from "lucide-react";

const Documents = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all_types");

  // Sample documents data
  const documentsData = [
    {
      id: "1",
      name: "Sales Invoice - ABC Electronics.pdf",
      type: "Invoice",
      date: "2025-04-10",
      size: "245 KB",
      uploaded_by: "Admin",
      tags: ["sales", "invoice", "customer"],
      icon: <FileText className="h-5 w-5 text-blue-500" />
    },
    {
      id: "2",
      name: "Purchase Receipt - HP India.pdf",
      type: "Receipt",
      date: "2025-04-08",
      size: "320 KB",
      uploaded_by: "Admin",
      tags: ["purchase", "receipt", "supplier"],
      icon: <FileText className="h-5 w-5 text-green-500" />
    },
    {
      id: "3",
      name: "Office Rent Agreement.pdf",
      type: "Contract",
      date: "2025-04-01",
      size: "1.2 MB",
      uploaded_by: "Admin",
      tags: ["legal", "contract", "rent"],
      icon: <FileImage className="h-5 w-5 text-purple-500" />
    },
    {
      id: "4",
      name: "GST Return - March 2025.pdf",
      type: "Report",
      date: "2025-04-05",
      size: "450 KB",
      uploaded_by: "Admin",
      tags: ["tax", "gst", "return"],
      icon: <FileSpreadsheet className="h-5 w-5 text-yellow-500" />
    },
    {
      id: "5",
      name: "Company Registration Certificate.pdf",
      type: "Other",
      date: "2025-03-20",
      size: "2.1 MB",
      uploaded_by: "Admin",
      tags: ["legal", "registration", "certificate"],
      icon: <File className="h-5 w-5 text-gray-500" />
    }
  ];

  // Filter documents based on search query and type filter
  const filteredDocuments = documentsData.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = typeFilter === "all_types" || doc.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesType;
  });

  // Function to get tag color based on tag name
  const getTagColor = (tag) => {
    const tagColors = {
      sales: "bg-blue-100 text-blue-800",
      invoice: "bg-blue-100 text-blue-800",
      customer: "bg-blue-100 text-blue-800",
      purchase: "bg-green-100 text-green-800",
      receipt: "bg-green-100 text-green-800",
      supplier: "bg-green-100 text-green-800",
      legal: "bg-purple-100 text-purple-800",
      contract: "bg-purple-100 text-purple-800",
      rent: "bg-purple-100 text-purple-800",
      tax: "bg-yellow-100 text-yellow-800",
      gst: "bg-yellow-100 text-yellow-800",
      return: "bg-yellow-100 text-yellow-800",
      registration: "bg-gray-100 text-gray-800",
      certificate: "bg-gray-100 text-gray-800"
    };

    return tagColors[tag] || "bg-gray-100 text-gray-800";
  };

  // Handle document upload
  const handleUpload = () => {
    alert("Upload document functionality would be implemented here");
  };

  // Handle document view
  const handleView = (document) => {
    alert(`Viewing ${document.name}`);
  };

  // Handle document download
  const handleDownload = (document) => {
    alert(`Downloading ${document.name}`);
  };

  // Handle document delete
  const handleDelete = (document) => {
    alert(`Deleting ${document.name}`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">{t("document_management")}</h1>
          <p className="text-gray-500 dark:text-gray-400">{t("document_description")}</p>
        </div>
        <button
          onClick={handleUpload}
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Upload className="h-4 w-4 mr-2" />
          {t("upload_document")}
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t("search_documents")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <div className="relative">
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="appearance-none pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all_types">{t("all_types")}</option>
                  <option value="invoice">{t("invoice")}</option>
                  <option value="receipt">{t("receipt")}</option>
                  <option value="contract">{t("contract")}</option>
                  <option value="report">{t("report")}</option>
                  <option value="other">{t("other")}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <Filter className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <button className="p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700">
                <RotateCcw className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("document")}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("type")}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("date")}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("size")}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("uploaded_by")}
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("tags")}
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t("actions")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredDocuments.map((document) => (
                <tr key={document.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        {document.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {document.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{document.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {document.date.split('-')[0]}-{document.date.split('-')[1]}-{document.date.split('-')[2]}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{document.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">{document.uploaded_by}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {document.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleView(document)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDownload(document)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <Download className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(document)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Documents;
