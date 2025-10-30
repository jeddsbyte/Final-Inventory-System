import React from "react";
import { Button } from "@/Components/ui/button";
import { FileDown, FileSpreadsheet } from "lucide-react";
import { exportToPDF } from "@/utils/exportPDF";
import { exportToExcel } from "@/utils/exportExcel";

interface ExportButtonsProps {
  data?: any[]; 
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ data = [] }) => {
  const handlePDF = () =>
    exportToPDF(data, "inventory_report.pdf", "charts-section");

  const handleExcel = () => exportToExcel(data);

  return (
    <div className="flex flex-wrap gap-3 justify-end mb-6">
      <Button
        onClick={handlePDF}
        className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
      >
        <FileDown className="w-4 h-4" /> Export PDF
      </Button>
      <Button
        onClick={handleExcel}
        className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
      >
        <FileSpreadsheet className="w-4 h-4" /> Export Excel
      </Button>
    </div>
  );
};

export default ExportButtons;
