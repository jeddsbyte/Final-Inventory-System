import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas-pro";

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

export const exportToPDF = async (
  data: ExportItem[] = [],
  filename: string = "inventory_report.pdf",
  chartContainerId: string = "charts-section"
): Promise<void> => {
  if (!data || data.length === 0) {
    alert("No data available for export!");
    return;
  }

  const doc = new jsPDF("p", "pt", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFontSize(18);
  doc.text("Inventory Report", 40, 40);
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 40, 60);

  const chartContainer = document.getElementById(chartContainerId);

  if (chartContainer) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      const chartCanvas = await html2canvas(chartContainer, {
        scale: 2,
        useCORS: true,
        foreignObjectRendering: false,
        logging: false,
      });

      const imgData = chartCanvas.toDataURL("image/png");
      const imgWidth = pageWidth - 80;
      const imgHeight = (chartCanvas.height * imgWidth) / chartCanvas.width;

      doc.addImage(imgData, "PNG", 40, 80, imgWidth, imgHeight);
      doc.addPage();
    } catch (error) {
      console.error("⚠️ Error capturing chart:", error);
      doc.text("Charts could not be included in the PDF.", 40, 90);
    }
  } else {
    doc.text("No charts found to include in the PDF.", 40, 90);
  }

  const tableColumn: string[] = [
    "Name",
    "Description",
    "SKU",
    "Category",
    "Supplier",
    "Price ($)",
    "Stock",
    "Reorder Level",
  ];

  const tableRows: (string | number)[][] = data.map((item) => [
    item.name || "",
    item.description || "",
    item.sku || "",
    item.category?.name || "",
    item.supplier?.name || "",
    item.price ?? 0,
    item.stock_quantity ?? 0,
    item.reorder_level ?? 0,
  ]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 60,
    styles: { fontSize: 8, cellPadding: 3 },
    headStyles: { fillColor: [66, 66, 66], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    margin: { left: 40, right: 40 },
    didDrawPage: () => {
      const pageCount = doc.internal.getNumberOfPages();
      doc.setFontSize(8);
      doc.text(
        `Page ${pageCount}`,
        pageWidth - 60,
        doc.internal.pageSize.getHeight() - 20
      );
    },
  });

  doc.save(filename);
};
