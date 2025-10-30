
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../../DashboardDesign/ThemeContext";

interface Item {
  id: number;
  name: string;
  category: string;
  price_per_unit: number;
}

interface SaleItem {
  itemId: number;
  name: string;
  category: string;
  price_per_unit: number;
  quantity: number;
  total: number;
}

export const SalesOrders: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [itemNames, setItemNames] = useState<string[]>([]);
  const [categories, setCategories] = useState<Item[]>([]);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([]);
  const [finalTotal, setFinalTotal] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [selectedItemName, setSelectedItemName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [pricePerUnit, setPricePerUnit] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  // Fetch distinct item names
  useEffect(() => {
    axios
      .get("http://localhost:5000/items/names")
      .then((res) => setItemNames(res.data.map((it: any) => it.name)))
      .catch((err) => console.error("Error fetching item names:", err));
  }, []);

  // When item name changes, fetch its categories
  const handleItemSelect = (name: string) => {
    setSelectedItemName(name);
    setSelectedCategory("");
    setPricePerUnit(0);

    if (name) {
      axios
        .get(`http://localhost:5000/items/categories/${name}`)
        .then((res) => setCategories(res.data))
        .catch((err) => console.error("Error fetching categories:", err));
    } else {
      setCategories([]);
    }
  };

  // When category changes, update price automatically
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const found = categories.find((c) => c.category === category);
    if (found) {
      setPricePerUnit(found.price_per_unit);
    }
  };

  // Add selected item to basket
  const handleAddToBasket = () => {
    if (!selectedItemName || !selectedCategory) {
      alert("Please select both item and category!");
      return;
    }

    const total = Number(pricePerUnit) * Number(quantity);

    const newItem: SaleItem = {
      itemId:
        categories.find(
          (c) =>
            c.name === selectedItemName && c.category === selectedCategory
        )?.id || 0,
      name: selectedItemName,
      category: selectedCategory,
      price_per_unit: pricePerUnit,
      quantity,
      total,
    };

    setSaleItems((prev) => {
      const updated = [...prev, newItem];
      calculateFinalTotal(updated);
      return updated;
    });

    // Reset form
    setSelectedItemName("");
    setSelectedCategory("");
    setPricePerUnit(0);
    setQuantity(1);
  };

  const handleRemoveItem = (index: number) => {
    setSaleItems((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      calculateFinalTotal(updated);
      return updated;
    });
  };

  const calculateFinalTotal = (items: SaleItem[]) => {
    const total = items.reduce((acc, cur) => acc + Number(cur.total || 0), 0);
    setFinalTotal(total);
  };

  const handleSubmit = async () => {
    if (saleItems.length === 0) {
      alert("Please add items to the basket first!");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:5000/sales", {
        items: saleItems,
        final_total: finalTotal,
      });
      alert("Sale recorded successfully!");
      setSaleItems([]);
      setFinalTotal(0);
    } catch (error) {
      console.error("Error submitting sale:", error);
      alert("Failed to record sale.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl transition-all duration-200 ${
    isDark 
      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-emerald-500' 
      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50 focus:border-emerald-500'
  } focus:ring-2 focus:ring-emerald-500/20 focus:outline-none`;

  const labelClasses = `block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className="p-4 lg:p-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="mb-6">
        <h2 className={`text-2xl lg:text-3xl font-bold ${
          isDark ? 'text-white' : 'text-gray-900'
        } mb-1`}>
          Sales Orders
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Create sales orders and manage customer transactions
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: FORM */}
        <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800/50 border border-gray-700/50 shadow-xl backdrop-blur-sm' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-emerald-500/20' : 'bg-emerald-100'
              }`}>
                <svg className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Add Item to Basket
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Select items to sell
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Item Name */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Item
                  </span>
                </label>
                <select
                  value={selectedItemName}
                  onChange={(e) => handleItemSelect(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select item</option>
                  {itemNames.map((name, index) => (
                    <option key={index} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Category
                  </span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategorySelect(e.target.value)}
                  disabled={!selectedItemName}
                  className={inputClasses}
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.category}>
                      {c.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Price per Unit (Ksh)
                  </span>
                </label>
                <input
                  type="number"
                  value={pricePerUnit}
                  readOnly
                  className={`${inputClasses} cursor-not-allowed opacity-75`}
                />
              </div>

              {/* Quantity */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className={inputClasses}
                />
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddToBasket}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transform hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add to Basket
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: BASKET */}
        <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-gray-800/50 border border-gray-700/50 shadow-xl backdrop-blur-sm' 
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-amber-500/20' : 'bg-amber-100'
                }`}>
                  <svg className={`w-6 h-6 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Shopping Basket
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {saleItems.length} {saleItems.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
            </div>

            {/* Basket Items */}
            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {saleItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <svg className={`w-10 h-10 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    No items added yet
                  </p>
                </div>
              ) : (
                saleItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-200 animate-slideUp ${
                      isDark ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </h4>
                        <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.category}
                        </p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            Qty: <span className="font-semibold">{item.quantity}</span>
                          </span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>×</span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            Ksh {item.price_per_unit.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-sm font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                          Ksh {item.total.toLocaleString()}
                        </span>
                        <button
                          onClick={() => handleRemoveItem(index)}
                          className={`p-1 rounded-lg transition-all duration-200 ${
                            isDark 
                              ? 'hover:bg-red-500/20 text-red-400' 
                              : 'hover:bg-red-100 text-red-600'
                          }`}
                          title="Remove"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total and Submit */}
            <div className="space-y-4">
              <div className={`p-5 rounded-xl ${
                isDark 
                  ? 'bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-500/30' 
                  : 'bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Final Total:
                  </span>
                  <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Ksh {finalTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting || saleItems.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Complete Sale & Generate Receipt
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};