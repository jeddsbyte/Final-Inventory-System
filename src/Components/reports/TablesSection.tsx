import React, { useEffect, useState } from "react";

interface TablesSectionProps {
  filters: {
    category_id?: string;
    supplier_id?: string;
  };
  onDataReady?: (data: Product[]) => void;
}

interface Category {
  id: number;
  name: string;
}

interface Supplier {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  sku: string;
  price: number;
  stock_quantity: number;
  reorder_level: number;
  category_id: number;
  supplier_id: number;
  category?: Category;
  supplier?: Supplier;
}

const TablesSection: React.FC<TablesSectionProps> = ({
  filters,
  onDataReady,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://inventory-xtlc.onrender.com/api/products"
        );
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

if (filters.category_id) {
  result = result.filter(
    (item) => item.category_id === parseInt(filters.category_id ?? "")
  );
}

if (filters.supplier_id) {
  result = result.filter(
    (item) => item.supplier_id === parseInt(filters.supplier_id ?? "")
  );
}

    setFilteredData(result);
    if (onDataReady) onDataReady(result);
  }, [filters, products]);

  return (
    <div className="bg-white mt-6 p-6 shadow-lg rounded-lg overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Products Table</h2>

      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Description</th>
            <th className="border p-3">SKU</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Supplier</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Stock</th>
            <th className="border p-3">Reorder Level</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.description}</td>
                <td className="border p-3">{item.sku}</td>
                <td className="border p-3">{item.category?.name}</td>
                <td className="border p-3">{item.supplier?.name}</td>
                <td className="border p-3">${item.price}</td>
                <td className="border p-3">{item.stock_quantity}</td>
                <td className="border p-3">{item.reorder_level}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-3 text-center" colSpan={8}>
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablesSection;
