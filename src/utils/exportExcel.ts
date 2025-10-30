import * as XLSX from "xlsx";

interface ExportItem {
  name?: string;
  description?: string;
  sku?: string;
  category?: { name?: string };
  supplier?: { name?: string };
  price?: number;
  stock_quantity?: number;
  reorder_level?: number;
  [key: string]: any;
}

export const exportToExcel = (
  data: ExportItem[] = [],
  filename: string = "inventory_report.xlsx"
): void => {
  if (!data || data.length === 0) {
    alert("No data available for export!");
    return;
  }

  const formattedData = data.map((item) => ({
    Name: item.name ?? "",
    Description: item.description ?? "",
    SKU: item.sku ?? "",
    Category: item.category?.name ?? "",
    Supplier: item.supplier?.name ?? "",
    "Price ($)": item.price ?? 0,
    Stock: item.stock_quantity ?? 0,
    "Reorder Level": item.reorder_level ?? 0,
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory");
  XLSX.writeFile(workbook, filename);
};
