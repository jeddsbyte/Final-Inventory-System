import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Package,
  Layers,
  DollarSign,
  TrendingDown,
  BarChart3,
} from "lucide-react";

interface Product {
  id: number;
  price: number;
  stock_quantity: number;
  reorder_level: number;
}

interface Category {
  id: number;
  name: string;
}

interface KPIs {
  totalProducts: number;
  totalCategories: number;
  totalStockValue: number;
  totalSales: number;
  lowStockItems: number;
}

const KPICards: React.FC = () => {
  const [kpis, setKpis] = useState<KPIs>({
    totalProducts: 0,
    totalCategories: 0,
    totalStockValue: 0,
    totalSales: 0,
    lowStockItems: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchKPIs = async () => {
      try {
        setIsLoading(true);

        const [catRes, prodRes] = await Promise.all([
          fetch("https://inventory-xtlc.onrender.com/api/categories"),
          fetch("https://inventory-xtlc.onrender.com/api/products"),
        ]);

        const [categories, products]: [Category[], Product[]] =
          await Promise.all([catRes.json(), prodRes.json()]);

        if (Array.isArray(categories) && Array.isArray(products)) {
          const totalProducts = products.length;
          const totalCategories = categories.length;

          const totalStockValue = products.reduce(
            (sum, p) => sum + p.price * p.stock_quantity,
            0
          );

          const lowStockItems = products.filter(
            (p) => p.stock_quantity <= p.reorder_level
          ).length;

          const totalSales = 66890;

          setKpis({
            totalProducts,
            totalCategories,
            totalStockValue,
            totalSales,
            lowStockItems,
          });
        }
      } catch (error) {
        console.error("Error fetching KPI data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchKPIs();
  }, []);

  const {
    totalProducts,
    totalCategories,
    totalStockValue,
    totalSales,
    lowStockItems,
  } = kpis;

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: <Package className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500/10 to-blue-500/5",
    },
    {
      title: "Total Categories",
      value: totalCategories,
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500/10 to-purple-500/5",
    },
    {
      title: "Total Stock Value",
      value: `$${totalStockValue.toLocaleString()}`,
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      color: "from-green-500/10 to-green-500/5",
    },
    {
      title: "Total Sales",
      value: `$${totalSales.toLocaleString()}`,
      icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
      color: "from-amber-500/10 to-amber-500/5",
    },
    {
      title: "Low Stock Items",
      value: lowStockItems,
      icon: <TrendingDown className="w-6 h-6 text-red-500" />,
      color: "from-red-500/10 to-red-500/5",
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 animate-pulse">
        {cards.map((_, index) => (
          <Card
            key={index}
            className="bg-linear-to-br from-gray-700/10 to-gray-800/5 border-gray-700/30 h-28"
          >
            <CardContent className="flex flex-col justify-center items-center h-full">
              <div className="w-10 h-10 bg-gray-300/30 rounded-full mb-2"></div>
              <div className="h-4 w-20 bg-gray-300/30 rounded mb-1"></div>
              <div className="h-3 w-12 bg-gray-300/20 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`bg-linear-to-br ${card.color} border border-gray-200 shadow-md hover:shadow-lg transition`}
        >
          <CardContent className="flex justify-between items-center p-4">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="text-xl font-semibold">{card.value}</h3>
            </div>
            <div className="p-2 bg-white/70 rounded-full">{card.icon}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;
