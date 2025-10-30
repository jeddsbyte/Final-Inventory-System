import React, { useEffect, useState, type ChangeEvent } from "react";

interface FilterBarProps {
  onFilterChange: (filters: Filters) => void;
}

interface Category {
  id: number;
  name: string;
}

interface Supplier {
  id: number;
  name: string;
}

interface Filters {
  category_id: string;
  supplier_id: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category_id: "",
    supplier_id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, supRes] = await Promise.all([
          fetch("https://inventory-xtlc.onrender.com/api/categories"),
          fetch("https://inventory-xtlc.onrender.com/api/suppliers"),
        ]);

        const [catData, supData] = await Promise.all([
          catRes.json(),
          supRes.json(),
        ]);

        setCategories(Array.isArray(catData) ? catData : []);
        setSuppliers(Array.isArray(supData) ? supData : []);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  return (
    <div className="my-6 flex flex-wrap gap-4 items-center bg-white p-4 shadow rounded-lg">
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category_id"
          value={filters.category_id}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Supplier</label>
        <select
          name="supplier_id"
          value={filters.supplier_id}
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="">All Suppliers</option>
          {suppliers.map((sup) => (
            <option key={sup.id} value={sup.id}>
              {sup.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
