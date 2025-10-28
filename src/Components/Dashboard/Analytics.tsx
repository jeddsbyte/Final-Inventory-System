// // import { TrendingUp, TrendingDown, Package, Truck, ShoppingCart, DollarSign } from "lucide-react";

// // export const Analytics = () => {
// //   return (
// //     <div className="p-6 space-y-8">
// //       {/* Page Header */}
// //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
// //         <div>
// //           <h1 className="text-2xl font-bold text-blue-600">Inventory Analytics</h1>
// //           <p className="text-sm text-gray-500 mt-1">
// //             Overview of current inventory, sales, and supplier performance
// //           </p>
// //         </div>
// //         <button className="mt-3 sm:mt-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md">
// //           Download Report
// //         </button>
// //       </div>

// //       {/* KPI Cards */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {/* Total Products */}
// //         <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700 hover:shadow-lg transition">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-sm text-gray-500">Total Products</p>
// //               <h2 className="text-2xl font-bold mt-1">1,248</h2>
// //             </div>
// //             <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
// //               <Package className="text-blue-600 dark:text-blue-400" size={22} />
// //             </div>
// //           </div>
// //           <div className="mt-3 flex items-center text-sm text-green-500">
// //             <TrendingUp size={16} className="mr-1" /> +8% since last month
// //           </div>
// //         </div>

// //         {/* Low Stock */}
// //         <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-red-100 dark:border-gray-700 hover:shadow-lg transition">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-sm text-gray-500">Low Stock Items</p>
// //               <h2 className="text-2xl font-bold mt-1">32</h2>
// //             </div>
// //             <div className="p-3 bg-red-100 dark:bg-red-900 rounded-xl">
// //               <Truck className="text-red-600 dark:text-red-400" size={22} />
// //             </div>
// //           </div>
// //           <div className="mt-3 flex items-center text-sm text-red-500">
// //             <TrendingDown size={16} className="mr-1" /> +4 since last week
// //           </div>
// //         </div>

// //         {/* Sales Orders */}
// //         <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-green-100 dark:border-gray-700 hover:shadow-lg transition">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-sm text-gray-500">Monthly Sales</p>
// //               <h2 className="text-2xl font-bold mt-1">₵248,000</h2>
// //             </div>
// //             <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
// //               <ShoppingCart className="text-green-600 dark:text-green-400" size={22} />
// //             </div>
// //           </div>
// //           <div className="mt-3 flex items-center text-sm text-green-500">
// //             <TrendingUp size={16} className="mr-1" /> +15% from last month
// //           </div>
// //         </div>

// //         {/* Revenue */}
// //         <div className="p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-yellow-100 dark:border-gray-700 hover:shadow-lg transition">
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <p className="text-sm text-gray-500">Total Revenue</p>
// //               <h2 className="text-2xl font-bold mt-1">₵1.2M</h2>
// //             </div>
// //             <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-xl">
// //               <DollarSign className="text-yellow-600 dark:text-yellow-400" size={22} />
// //             </div>
// //           </div>
// //           <div className="mt-3 flex items-center text-sm text-green-500">
// //             <TrendingUp size={16} className="mr-1" /> +10% growth
// //           </div>
// //         </div>
// //       </div>

// //       {/* Charts Section */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Sales Overview */}
// //         <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-100 dark:border-gray-700">
// //           <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
// //             Sales Overview
// //           </h3>
// //           <div className="h-56 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
// //             📈 [Sales Chart Placeholder]
// //           </div>
// //         </div>

// //         {/* Stock Level Trends */}
// //         <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-cyan-100 dark:border-gray-700">
// //           <h3 className="text-lg font-semibold mb-4 text-cyan-600 dark:text-cyan-400">
// //             Stock Level Trends
// //           </h3>
// //           <div className="h-56 flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
// //             📊 [Inventory Trend Chart Placeholder]
// //           </div>
// //         </div>
// //       </div>

// //       {/* Supplier Performance */}
// //       <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
// //         <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
// //           Top Performing Suppliers
// //         </h3>
// //         <table className="w-full text-sm">
// //           <thead className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
// //             <tr>
// //               <th className="text-left py-2">Supplier</th>
// //               <th className="text-left py-2">Products Supplied</th>
// //               <th className="text-left py-2">Fulfillment Rate</th>
// //               <th className="text-left py-2">Rating</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {[
// //               { name: "Alpha Traders", products: 220, rate: "98%", rating: "4.9★" },
// //               { name: "Nova Supplies", products: 180, rate: "95%", rating: "4.7★" },
// //               { name: "Skyline Imports", products: 160, rate: "92%", rating: "4.5★" },
// //             ].map((supplier) => (
// //               <tr
// //                 key={supplier.name}
// //                 className="border-b border-gray-100 dark:border-gray-700 hover:bg-blue-50/30 dark:hover:bg-gray-700/40 transition"
// //               >
// //                 <td className="py-2">{supplier.name}</td>
// //                 <td className="py-2">{supplier.products}</td>
// //                 <td className="py-2">{supplier.rate}</td>
// //                 <td className="py-2">{supplier.rating}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// import { useState } from 'react';
// import { 
//   TrendingUp, 
//   TrendingDown, 
//   Package, 
//   Truck, 
//   ShoppingCart, 
//   DollarSign,
//   Download,
//   Filter,
//    MoreVertical,
//   ArrowUpRight,
//   ArrowDownRight,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';

// export const Analytics = () => {
//   const [timeRange, setTimeRange] = useState('30d');

//   // Sample data for charts
//   const salesData = [
//     { month: 'Jan', sales: 45000, orders: 320, revenue: 52000 },
//     { month: 'Feb', sales: 52000, orders: 380, revenue: 58000 },
//     { month: 'Mar', sales: 48000, orders: 350, revenue: 54000 },
//     { month: 'Apr', sales: 61000, orders: 420, revenue: 68000 },
//     { month: 'May', sales: 55000, orders: 390, revenue: 62000 },
//     { month: 'Jun', sales: 67000, orders: 450, revenue: 75000 },
//   ];

//   const categoryData = [
//     { name: 'Electronics', value: 35, color: '#3B82F6' },
//     { name: 'Clothing', value: 25, color: '#10B981' },
//     { name: 'Food', value: 20, color: '#F59E0B' },
//     { name: 'Books', value: 12, color: '#8B5CF6' },
//     { name: 'Others', value: 8, color: '#EF4444' },
//   ];

//   const stockData = [
//     { week: 'Week 1', inStock: 850, lowStock: 45, outOfStock: 12 },
//     { week: 'Week 2', inStock: 920, lowStock: 38, outOfStock: 8 },
//     { week: 'Week 3', inStock: 880, lowStock: 52, outOfStock: 15 },
//     { week: 'Week 4', inStock: 940, lowStock: 32, outOfStock: 10 },
//   ];

//   const revenueData = [
//     { day: 'Mon', revenue: 8400 },
//     { day: 'Tue', revenue: 9200 },
//     { day: 'Wed', revenue: 7800 },
//     { day: 'Thu', revenue: 10500 },
//     { day: 'Fri', revenue: 11200 },
//     { day: 'Sat', revenue: 9800 },
//     { day: 'Sun', revenue: 8900 },
//   ];

//   const topProducts = [
//     { name: 'Laptop Dell XPS', sales: 145, revenue: '₵98,500', trend: '+12%', status: 'up' },
//     { name: 'iPhone 15 Pro', sales: 132, revenue: '₵87,200', trend: '+8%', status: 'up' },
//     { name: 'Samsung TV 55"', sales: 98, revenue: '₵65,400', trend: '-3%', status: 'down' },
//     { name: 'Nike Air Max', sales: 87, revenue: '₵45,800', trend: '+15%', status: 'up' },
//     { name: 'Sony Headphones', sales: 76, revenue: '₵38,900', trend: '+5%', status: 'up' },
//   ];

//   return (
//     <div className="space-y-6">
//       {/* Page Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Inventory Analytics
//           </h1>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//             Real-time insights and performance metrics
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm flex items-center gap-2">
//             <Filter size={16} />
//             Filter
//           </button>
//           <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center gap-2">
//             <Download size={16} />
//             Export Report
//           </button>
//         </div>
//       </div>

//       {/* Time Range Selector */}
//       <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-fit">
//         {['7d', '30d', '90d', '1y'].map((range) => (
//           <button
//             key={range}
//             onClick={() => setTimeRange(range)}
//             className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
//               timeRange === range
//                 ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
//                 : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
//             }`}
//           >
//             {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : range === '90d' ? 'Last 90 Days' : 'Last Year'}
//           </button>
//         ))}
//       </div>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {[
//           { 
//             title: 'Total Products', 
//             value: '1,248', 
//             change: '+8%', 
//             trend: 'up', 
//             icon: Package, 
//             color: 'blue',
//             bgColor: 'from-blue-500 to-cyan-500',
//             lightBg: 'bg-blue-50 dark:bg-blue-900/20',
//             borderColor: 'border-blue-200 dark:border-blue-800'
//           },
//           { 
//             title: 'Low Stock Items', 
//             value: '32', 
//             change: '+4', 
//             trend: 'down', 
//             icon: Truck, 
//             color: 'red',
//             bgColor: 'from-red-500 to-orange-500',
//             lightBg: 'bg-red-50 dark:bg-red-900/20',
//             borderColor: 'border-red-200 dark:border-red-800'
//           },
//           { 
//             title: 'Monthly Sales', 
//             value: '₵248K', 
//             change: '+15%', 
//             trend: 'up', 
//             icon: ShoppingCart, 
//             color: 'green',
//             bgColor: 'from-green-500 to-emerald-500',
//             lightBg: 'bg-green-50 dark:bg-green-900/20',
//             borderColor: 'border-green-200 dark:border-green-800'
//           },
//           { 
//             title: 'Total Revenue', 
//             value: '₵1.2M', 
//             change: '+10%', 
//             trend: 'up', 
//             icon: DollarSign, 
//             color: 'purple',
//             bgColor: 'from-purple-500 to-pink-500',
//             lightBg: 'bg-purple-50 dark:bg-purple-900/20',
//             borderColor: 'border-purple-200 dark:border-purple-800'
//           },
//         ].map((kpi, index) => {
//           const Icon = kpi.icon;
//           const TrendIcon = kpi.trend === 'up' ? ArrowUpRight : ArrowDownRight;
//           return (
//             <div
//               key={index}
//               className={`relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border ${kpi.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden group`}
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" 
//                    style={{ background: `linear-gradient(to bottom right, ${kpi.color === 'blue' ? '#3B82F6' : kpi.color === 'red' ? '#EF4444' : kpi.color === 'green' ? '#10B981' : '#8B5CF6'}, transparent)` }}></div>
//               <div className="relative">
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex-1">
//                     <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{kpi.title}</p>
//                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{kpi.value}</h2>
//                   </div>
//                   <div className={`p-3 ${kpi.lightBg} rounded-xl`}>
//                     <Icon className={`text-${kpi.color}-600 dark:text-${kpi.color}-400`} size={24} />
//                   </div>
//                 </div>
//                 <div className={`flex items-center text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
//                   <TrendIcon size={16} className="mr-1" />
//                   <span>{kpi.change}</span>
//                   <span className="text-gray-400 dark:text-gray-500 ml-1">vs last period</span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Sales Trend - Large Chart */}
//         <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sales Trend</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">Monthly sales performance</p>
//             </div>
//             <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
//               <MoreVertical size={20} className="text-gray-400" />
//             </button>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <AreaChart data={salesData}>
//               <defs>
//                 <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
//                   <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.3} />
//               <XAxis dataKey="month" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <Tooltip 
//                 contentStyle={{ 
//                   backgroundColor: '#1F2937', 
//                   border: 'none', 
//                   borderRadius: '12px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                 }}
//               />
//               <Area type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Category Distribution - Pie Chart */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white">Categories</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">Product distribution</p>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={categoryData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={90}
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {categoryData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="mt-4 space-y-2">
//             {categoryData.map((category, index) => (
//               <div key={index} className="flex items-center justify-between text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
//                   <span className="text-gray-600 dark:text-gray-400">{category.name}</span>
//                 </div>
//                 <span className="font-semibold text-gray-900 dark:text-white">{category.value}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stock Levels and Revenue */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Stock Levels */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white">Stock Levels</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">Weekly inventory status</p>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={280}>
//             <BarChart data={stockData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.3} />
//               <XAxis dataKey="week" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <Tooltip 
//                 contentStyle={{ 
//                   backgroundColor: '#1F2937', 
//                   border: 'none', 
//                   borderRadius: '12px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                 }}
//               />
//               <Legend />
//               <Bar dataKey="inStock" fill="#10B981" radius={[8, 8, 0, 0]} />
//               <Bar dataKey="lowStock" fill="#F59E0B" radius={[8, 8, 0, 0]} />
//               <Bar dataKey="outOfStock" fill="#EF4444" radius={[8, 8, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Daily Revenue */}
//         <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white">Daily Revenue</h3>
//               <p className="text-sm text-gray-500 dark:text-gray-400">This week's performance</p>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={revenueData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.3} />
//               <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
//               <Tooltip 
//                 contentStyle={{ 
//                   backgroundColor: '#1F2937', 
//                   border: 'none', 
//                   borderRadius: '12px',
//                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                 }}
//               />
//               <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', r: 5 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Top Products Table */}
//       <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h3 className="text-lg font-bold text-gray-900 dark:text-white">Top Performing Products</h3>
//             <p className="text-sm text-gray-500 dark:text-gray-400">Best sellers this month</p>
//           </div>
//           <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
//             View All
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200 dark:border-gray-700">
//                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Product</th>
//                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Sales</th>
//                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Revenue</th>
//                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Trend</th>
//                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topProducts.map((product, index) => (
//                 <tr key={index} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
//                   <td className="py-4 px-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
//                         {index + 1}
//                       </div>
//                       <span className="font-medium text-gray-900 dark:text-white">{product.name}</span>
//                     </div>
//                   </td>
//                   <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{product.sales} units</td>
//                   <td className="py-4 px-4 font-semibold text-gray-900 dark:text-white">{product.revenue}</td>
//                   <td className="py-4 px-4">
//                     <span className={`flex items-center gap-1 ${product.status === 'up' ? 'text-green-600' : 'text-red-600'}`}>
//                       {product.status === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
//                       {product.trend}
//                     </span>
//                   </td>
//                   <td className="py-4 px-4">
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                       product.status === 'up' 
//                         ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
//                         : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
//                     }`}>
//                       {product.status === 'up' ? 'Growing' : 'Declining'}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Truck, 
  ShoppingCart, 
  DollarSign,
  Download,
  Filter,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useTheme } from '../../DashboardDesign/ThemeContext';

export const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const { theme } = useTheme();

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 320, revenue: 52000 },
    { month: 'Feb', sales: 52000, orders: 380, revenue: 58000 },
    { month: 'Mar', sales: 48000, orders: 350, revenue: 54000 },
    { month: 'Apr', sales: 61000, orders: 420, revenue: 68000 },
    { month: 'May', sales: 55000, orders: 390, revenue: 62000 },
    { month: 'Jun', sales: 67000, orders: 450, revenue: 75000 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 25, color: '#10B981' },
    { name: 'Food', value: 20, color: '#F59E0B' },
    { name: 'Books', value: 12, color: '#8B5CF6' },
    { name: 'Others', value: 8, color: '#EF4444' },
  ];

  const stockData = [
    { week: 'Week 1', inStock: 850, lowStock: 45, outOfStock: 12 },
    { week: 'Week 2', inStock: 920, lowStock: 38, outOfStock: 8 },
    { week: 'Week 3', inStock: 880, lowStock: 52, outOfStock: 15 },
    { week: 'Week 4', inStock: 940, lowStock: 32, outOfStock: 10 },
  ];

  const revenueData = [
    { day: 'Mon', revenue: 8400 },
    { day: 'Tue', revenue: 9200 },
    { day: 'Wed', revenue: 7800 },
    { day: 'Thu', revenue: 10500 },
    { day: 'Fri', revenue: 11200 },
    { day: 'Sat', revenue: 9800 },
    { day: 'Sun', revenue: 8900 },
  ];

  const topProducts = [
    { name: 'Laptop Dell XPS', sales: 145, revenue: '₵98,500', trend: '+12%', status: 'up' },
    { name: 'iPhone 15 Pro', sales: 132, revenue: '₵87,200', trend: '+8%', status: 'up' },
    { name: 'Samsung TV 55"', sales: 98, revenue: '₵65,400', trend: '-3%', status: 'down' },
    { name: 'Nike Air Max', sales: 87, revenue: '₵45,800', trend: '+15%', status: 'up' },
    { name: 'Sony Headphones', sales: 76, revenue: '₵38,900', trend: '+5%', status: 'up' },
  ];

  // Theme-based styles
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const cardBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const chartGridColor = theme === 'dark' ? '#374151' : '#E5E7EB';
  const chartTextColor = theme === 'dark' ? '#9CA3AF' : '#6B7280';
  const tooltipBg = theme === 'dark' ? '#1F2937' : '#FFFFFF';
  const tooltipText = theme === 'dark' ? '#F9FAFB' : '#111827';

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className={`text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ${theme === 'dark' ? 'brightness-125' : ''}`}>
            Inventory Analytics
          </h1>
          <p className={`text-sm ${textSecondary} mt-1`}>
            Real-time insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <button className={`px-4 py-2 ${cardBg} border ${cardBorder} ${textSecondary} text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm flex items-center gap-2`}>
            <Filter size={16} />
            Filter
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center gap-2">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </div>

      {/* Time Range Selector */}
      <div className={`flex gap-2 p-1 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl w-fit`}>
        {['7d', '30d', '90d', '1y'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              timeRange === range
                ? `${theme === 'dark' ? 'bg-gray-600 text-blue-400' : 'bg-white text-blue-600'} shadow-md`
                : `${textSecondary} hover:text-blue-600 dark:hover:text-blue-400`
            }`}
          >
            {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : range === '90d' ? 'Last 90 Days' : 'Last Year'}
          </button>
        ))}
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: 'Total Products', 
            value: '1,248', 
            change: '+8%', 
            trend: 'up', 
            icon: Package, 
            color: 'blue',
            lightBg: theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-50',
            borderColor: theme === 'dark' ? 'border-blue-800' : 'border-blue-200'
          },
          { 
            title: 'Low Stock Items', 
            value: '32', 
            change: '+4', 
            trend: 'down', 
            icon: Truck, 
            color: 'red',
            lightBg: theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50',
            borderColor: theme === 'dark' ? 'border-red-800' : 'border-red-200'
          },
          { 
            title: 'Monthly Sales', 
            value: '₵248K', 
            change: '+15%', 
            trend: 'up', 
            icon: ShoppingCart, 
            color: 'green',
            lightBg: theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50',
            borderColor: theme === 'dark' ? 'border-green-800' : 'border-green-200'
          },
          { 
            title: 'Total Revenue', 
            value: '₵1.2M', 
            change: '+10%', 
            trend: 'up', 
            icon: DollarSign, 
            color: 'purple',
            lightBg: theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-50',
            borderColor: theme === 'dark' ? 'border-purple-800' : 'border-purple-200'
          },
        ].map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === 'up' ? ArrowUpRight : ArrowDownRight;
          return (
            <div
              key={index}
              className={`relative p-6 ${cardBg} rounded-2xl shadow-lg border ${kpi.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden group`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" 
                   style={{ background: `linear-gradient(to bottom right, ${kpi.color === 'blue' ? '#3B82F6' : kpi.color === 'red' ? '#EF4444' : kpi.color === 'green' ? '#10B981' : '#8B5CF6'}, transparent)` }}></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className={`text-sm ${textSecondary} mb-1`}>{kpi.title}</p>
                    <h2 className={`text-3xl font-bold ${textPrimary}`}>{kpi.value}</h2>
                  </div>
                  <div className={`p-3 ${kpi.lightBg} rounded-xl`}>
                    <Icon className={`text-${kpi.color}-600 dark:text-${kpi.color}-400`} size={24} />
                  </div>
                </div>
                <div className={`flex items-center text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  <TrendIcon size={16} className="mr-1" />
                  <span>{kpi.change}</span>
                  <span className={`${textSecondary} ml-1`}>vs last period</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trend - Large Chart */}
        <div className={`lg:col-span-2 p-6 ${cardBg} rounded-2xl shadow-lg border ${cardBorder}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${textPrimary}`}>Sales Trend</h3>
              <p className={`text-sm ${textSecondary}`}>Monthly sales performance</p>
            </div>
            <button className={`p-2 hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg transition-colors`}>
              <MoreVertical size={20} className={textSecondary} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} opacity={0.3} />
              <XAxis dataKey="month" stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <YAxis stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: tooltipText
                }}
              />
              <Area type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution - Pie Chart */}
        <div className={`p-6 ${cardBg} rounded-2xl shadow-lg border ${cardBorder}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${textPrimary}`}>Categories</h3>
              <p className={`text-sm ${textSecondary}`}>Product distribution</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: tooltipText
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                  <span className={textSecondary}>{category.name}</span>
                </div>
                <span className={`font-semibold ${textPrimary}`}>{category.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stock Levels and Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock Levels */}
        <div className={`p-6 ${cardBg} rounded-2xl shadow-lg border ${cardBorder}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${textPrimary}`}>Stock Levels</h3>
              <p className={`text-sm ${textSecondary}`}>Weekly inventory status</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} opacity={0.3} />
              <XAxis dataKey="week" stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <YAxis stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: tooltipText
                }}
              />
              <Legend />
              <Bar dataKey="inStock" fill="#10B981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="lowStock" fill="#F59E0B" radius={[8, 8, 0, 0]} />
              <Bar dataKey="outOfStock" fill="#EF4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Revenue */}
        <div className={`p-6 ${cardBg} rounded-2xl shadow-lg border ${cardBorder}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-bold ${textPrimary}`}>Daily Revenue</h3>
              <p className={`text-sm ${textSecondary}`}>This week's performance</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartGridColor} opacity={0.3} />
              <XAxis dataKey="day" stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <YAxis stroke={chartTextColor} style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  border: 'none', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: tooltipText
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Products Table */}
      <div className={`p-6 ${cardBg} rounded-2xl shadow-lg border ${cardBorder}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-lg font-bold ${textPrimary}`}>Top Performing Products</h3>
            <p className={`text-sm ${textSecondary}`}>Best sellers this month</p>
          </div>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${textSecondary}`}>Product</th>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${textSecondary}`}>Sales</th>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${textSecondary}`}>Revenue</th>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${textSecondary}`}>Trend</th>
                <th className={`text-left py-3 px-4 text-sm font-semibold ${textSecondary}`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'} hover:${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'} transition-colors`}>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <span className={`font-medium ${textPrimary}`}>{product.name}</span>
                    </div>
                  </td>
                  <td className={`py-4 px-4 ${textSecondary}`}>{product.sales} units</td>
                  <td className={`py-4 px-4 font-semibold ${textPrimary}`}>{product.revenue}</td>
                  <td className="py-4 px-4">
                    <span className={`flex items-center gap-1 ${product.status === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {product.status === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                      {product.trend}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.status === 'up' 
                        ? `${theme === 'dark' ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`
                        : `${theme === 'dark' ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`
                    }`}>
                      {product.status === 'up' ? 'Growing' : 'Declining'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};