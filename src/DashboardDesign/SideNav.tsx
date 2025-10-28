
import { useState, useEffect, useMemo } from "react";
import {
  BarChart2,
  Package,
  Layers,
  Truck,
  FileText,
  ShoppingCart,
  Receipt,
  Settings,
  User,
  Menu,
  X,
  LogOut,
  type LucideIcon
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useTheme } from "./ThemeContext";
import type { RootState } from "../App/store";

interface NavItem {
  path: string;
  icon: LucideIcon;
  label: string;
  color: string;
  group: "overview" | "inventory" | "orders" | "reports" | "settings";
}

type NavGroups = Record<NavItem["group"], NavItem[]>;

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const { theme } = useTheme();

  const logout = () => ({ type: "LOGOUT" });

  const navItems: NavItem[] = useMemo(
    () => [
      { path: "/dashboard/analytics", icon: BarChart2, label: "Analytics", color: "#10B981", group: "overview" },
      { path: "/dashboard/products", icon: Package, label: "Products", color: "#8B5CF6", group: "inventory" },
      { path: "/dashboard/categories", icon: Layers, label: "Categories", color: "#F59E0B", group: "inventory" },
      { path: "/dashboard/suppliers", icon: Truck, label: "Suppliers", color: "#EF4444", group: "inventory" },
      { path: "/dashboard/purchases", icon: ShoppingCart, label: "Purchase Orders", color: "#06B6D4", group: "orders" },
      { path: "/dashboard/sales", icon: Receipt, label: "Sales Orders", color: "#D946EF", group: "orders" },
      { path: "/dashboard/reports", icon: FileText, label: "Reports", color: "#84CC16", group: "reports" },
      { path: "/dashboard/settings", icon: Settings, label: "Settings", color: "#6B7280", group: "settings" },
      { path: "/dashboard/profile", icon: User, label: "Profile", color: "#F97316", group: "settings" },
    ],
    []
  );

  const filteredNavItems = useMemo(() => navItems, [navItems]);

  const groupedItems = useMemo<[string, NavItem[]][]>(
    () => {
      const groups: NavGroups = {
        overview: [],
        inventory: [],
        orders: [],
        reports: [],
        settings: [],
      };
      filteredNavItems.forEach((item) => {
        groups[item.group].push(item);
      });
      return Object.entries(groups).filter(([_, items]) => items.length > 0);
    },
    [filteredNavItems]
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Theme-based classes
  const sidebarBg = theme === "dark" 
    ? "bg-gradient-to-b from-gray-900/95 to-gray-800/95" 
    : "bg-gradient-to-b from-white to-blue-50";
  
  const borderColor = theme === "dark" ? "border-gray-700" : "border-blue-200";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-700";
  const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-blue-100";
  const activeBg = theme === "dark" 
    ? "bg-gradient-to-r from-blue-600 to-indigo-600" 
    : "bg-gradient-to-r from-blue-500 to-indigo-500";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden p-3 fixed top-4 left-4 z-50 rounded-lg shadow-md transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700"
            : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
        }`}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
          className={`${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } lg:translate-x-0 transform transition-transform duration-300 ease-in-out fixed lg:static top-0 left-0 h-full w-64 p-4 shadow-lg border-r z-40  mt-0 lg:mt-16 flex flex-col ${sidebarBg} ${borderColor} pt-16 lg:pt-4`}
      >
        {/* Logo/Branding Section */}
        <div className={`mb-8 p-4 border-b rounded-lg ${
          theme === "dark" 
            ? "bg-gray-800 border-gray-700" 
            : "bg-blue-50 border-blue-200"
        }`}>
          <h2 className={`text-xl font-bold ${
            theme === "dark" ? "text-white" : "text-blue-600"
          }`}>
            BUSINESS PORTAL
          </h2>
          <p className={`text-xs mt-1 font-semibold ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}>
            Smart Inventory Management
          </p>
        </div>

        {/* Navigation Sections */}
        <nav className="flex flex-col gap-2 flex-grow">
          {groupedItems.map(([group, items]) => (
            <div key={group} className="mb-4">
              {/* Group Header */}
              <div className={`px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                theme === "dark" ? "text-gray-400" : "text-blue-600"
              }`}>
                <div className={`h-px flex-1 ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-200"
                }`}></div>
                <span>{group}</span>
                <div className={`h-px flex-1 ${
                  theme === "dark" ? "bg-gray-700" : "bg-blue-200"
                }`}></div>
              </div>
              
              {/* Group Items */}
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    data-tooltip-id={`tooltip-${item.path}`}
                    data-tooltip-content={item.label}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? `${activeBg} text-white font-semibold shadow-md transform scale-105`
                        : `${textColor} ${hoverBg} hover:shadow-sm`
                    }`}
                  >
                    <Icon 
                      size={20} 
                      color={isActive ? "#FFFFFF" : item.color}
                    />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* User Profile/Footer */}
        <div className={`mt-auto pt-4 border-t ${
          theme === "dark" ? "border-gray-700" : "border-blue-200"
        }`}>
          {/* User Profile Card */}
          <div className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-3 ${
            theme === "dark" 
              ? "bg-gray-800 text-gray-200" 
              : "bg-blue-50 text-gray-700"
          }`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-600 to-gray-700"
                : "bg-gradient-to-br from-blue-500 to-indigo-600"
            }`}>
              {user?.userName?.[0] || "U"}
            </div>
            <div>
              <p className="text-sm font-medium">{user?.userName || "User"}</p>
              <p className={`text-xs ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}>
                Administrator
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
              theme === "dark"
                ? "bg-red-900/20 text-red-400 hover:bg-red-900/30 hover:text-red-300 border border-red-800/30"
                : "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200/50"
            }`}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Tooltips for Desktop */}
      {!isMobile &&
        filteredNavItems.map((item) => (
          <Tooltip
            key={item.path}
            id={`tooltip-${item.path}`}
            place="right"
            delayShow={300}
            className={`z-50 shadow-lg border rounded-lg px-3 py-2 ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-gray-800 border-gray-200"
            }`}
          />
        ))}
    </>
  );
};