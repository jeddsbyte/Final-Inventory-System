

import React, { useState, useEffect } from "react";
import { useTheme } from "../../DashboardDesign/ThemeContext";

export const PurchaseOrders: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [quantity, setQuantity] = useState<number | "">("");
  const [pricePerUnit, setPricePerUnit] = useState<number | "">("");
  const [dateOfDelivery, setDateOfDelivery] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [status, setStatus] = useState("Not Delivered");
  const [total, setTotal] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-calculate total
  useEffect(() => {
    if (quantity && pricePerUnit) {
      setTotal(Number(quantity) * Number(pricePerUnit));
    } else {
      setTotal(0);
    }
  }, [quantity, pricePerUnit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: itemName,
      category: itemCategory,
      sname: supplierName,
      quantity,
      price: pricePerUnit,
      date_time: dateOfDelivery,
      total,
      method: paymentMethod,
      status,
    };

    try {
      const response = await fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save purchase");
      }

      const result = await response.json();
      alert(`Purchase saved successfully for ${result.data.name}!`);

      // Clear form fields after successful submission
      setItemName("");
      setItemCategory("");
      setSupplierName("");
      setQuantity("");
      setPricePerUnit("");
      setDateOfDelivery("");
      setPaymentMethod("Cash");
      setStatus("Not Delivered");
      setTotal(0);
    } catch (error) {
      console.error(error);
      alert("Failed to save purchase. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl transition-all duration-200 ${
    isDark 
      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:bg-gray-600 focus:border-indigo-500' 
      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-gray-50 focus:border-indigo-500'
  } focus:ring-2 focus:ring-indigo-500/20 focus:outline-none`;

  const labelClasses = `block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`;

  return (
    <div className="p-4 lg:p-8 space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="mb-6">
        <h2 className={`text-2xl lg:text-3xl font-bold ${
          isDark ? 'text-white' : 'text-gray-900'
        } mb-1`}>
          Purchase Orders
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Create new purchase orders and manage inventory procurement
        </p>
      </div>

      {/* Form Container */}
      <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800/50 border border-gray-700/50 shadow-xl backdrop-blur-sm' 
          : 'bg-white border border-gray-200 shadow-lg'
      }`}>
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'
            }`}>
              <svg className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                New Purchase Order
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Fill in the details below
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Item Name */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Item Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Item Category */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Item Category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter item category"
                  value={itemCategory}
                  onChange={(e) => setItemCategory(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Supplier Name */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Supplier's Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter supplier name"
                  value={supplierName}
                  onChange={(e) => setSupplierName(e.target.value)}
                  className={inputClasses}
                  required
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
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value ? Number(e.target.value) : "")}
                  className={inputClasses}
                  min="1"
                  required
                />
              </div>

              {/* Price per Unit */}
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
                  placeholder="Enter price per unit"
                  value={pricePerUnit}
                  onChange={(e) => setPricePerUnit(e.target.value ? Number(e.target.value) : "")}
                  className={inputClasses}
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              {/* Date of Delivery */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Date of Delivery
                  </span>
                </label>
                <input
                  type="date"
                  value={dateOfDelivery}
                  onChange={(e) => setDateOfDelivery(e.target.value)}
                  className={inputClasses}
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Payment Method
                  </span>
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className={inputClasses}
                >
                  <option value="Cash">Cash</option>
                  <option value="M-Pesa">M-Pesa</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className={labelClasses}>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Status
                  </span>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={inputClasses}
                >
                  <option value="Not Delivered">Not Delivered</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>

            {/* Total Display */}
            <div className={`p-6 rounded-xl ${
              isDark 
                ? 'bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30' 
                : 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-indigo-500/20' : 'bg-indigo-100'
                  }`}>
                    <svg className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Amount
                    </p>
                    <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Ksh {total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  setItemName("");
                  setItemCategory("");
                  setSupplierName("");
                  setQuantity("");
                  setPricePerUnit("");
                  setDateOfDelivery("");
                  setPaymentMethod("Cash");
                  setStatus("Not Delivered");
                }}
                className={`flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                Clear Form
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Purchase 
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};