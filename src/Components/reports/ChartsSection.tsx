import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import Loader from "@/Components/reports/Loader";

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
  category_id: number;
  supplier_id: number;
}

interface ChartData {
  name: string;
  products: number;
  [key: string]: string | number;
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const ChartsSection: React.FC = () => {
  const [categoryData, setCategoryData] = useState<ChartData[]>([]);
  const [supplierData, setSupplierData] = useState<ChartData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchChartsData = async () => {
      try {
        setIsLoading(true);

        const categoriesRes = await fetch(
          "https://inventory-xtlc.onrender.com/api/categories"
        );
        const categories: Category[] = await categoriesRes.json();

        const productsRes = await fetch(
          "https://inventory-xtlc.onrender.com/api/products"
        );
        const products: Product[] = await productsRes.json();

        const suppliersRes = await fetch(
          "https://inventory-xtlc.onrender.com/api/suppliers"
        );
        const suppliers: Supplier[] = await suppliersRes.json();

        const categoryChart: ChartData[] = categories.map((cat) => ({
          name: cat.name || `Category ${cat.id}`,
          products: products.filter((p) => p.category_id === cat.id).length,
        }));

        const supplierChart: ChartData[] = suppliers.map((sup) => ({
          name: sup.name || `Supplier ${sup.id}`,
          products: products.filter((p) => p.supplier_id === sup.id).length,
        }));

        setCategoryData(categoryChart);
        setSupplierData(supplierChart);
      } catch (err) {
        console.error("Error loading chart data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChartsData();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle>Products by Category</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="products" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle>Products by Supplier</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={supplierData}
                dataKey="products"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {supplierData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsSection;
