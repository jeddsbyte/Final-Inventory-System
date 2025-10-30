import React, { useState } from "react";
import FilterBar from "@/Components/reports/FilterBar";
import TablesSection from "@/Components/reports/TablesSection";
import KPICards from "@/Components/reports/KPICards";
import ChartsSection from "@/Components/reports/ChartsSection";
import ExportButtons from "@/Components/reports/ExportButtons";

interface Filters {
  category_id?: string;
  supplier_id?: string;
  [key: string]: any;
}

interface Product {
  id: number;
  name: string;
  category_id: number;
  supplier_id: number;
  price: number;
  stock_quantity: number;
  reorder_level: number;
  [key: string]: any;
}

const Reports: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [tableData, setTableData] = useState<Product[]>([]);

  const handleFilterChange = (updatedFilters: Filters): void => {
    setFilters(updatedFilters);
  };

  const handleDataReady = (data: Product[]): void => {
    setTableData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <KPICards />

      <FilterBar onFilterChange={handleFilterChange} />

      <ExportButtons data={tableData} />

      <div id="charts-section">
        <ChartsSection />
      </div>

      <TablesSection filters={filters} onDataReady={handleDataReady} />
    </div>
  );
};

export default Reports;
