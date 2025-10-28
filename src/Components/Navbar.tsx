import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../DashboardDesign/ThemeContext";
import { Sun, Moon, Menu, X, Sparkles, Bell, ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../Features/auth/authSlice";
import { toast, Toaster } from "sonner";
import type { RootState } from "../App/store";

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.auth
    );

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle click outside profile dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setProfileDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(clearCredentials());
        toast.success("Logged out successfully");
        setProfileDropdownOpen(false);
        setIsMenuOpen(false);
    };

    const toggleProfileDropdown = () => setProfileDropdownOpen((prev) => !prev);

    const handleDashboardClick = () => {
        // Simple dashboard navigation
        window.location.href = "/dashboard/analytics";
        setProfileDropdownOpen(false);
        setIsMenuOpen(false);
    };

    // Generate user initials for avatar fallback
    const getUserInitials = () => {
               if (user?.userName) {
            return user.userName.charAt(0).toUpperCase();
        }
        if (user?.email) {
            return user.email.charAt(0).toUpperCase();
        }
        return "U";
    };

    const navClasses = `fixed top-0 left-0 right-0 z-[100] backdrop-blur-xl border-b transition-all duration-500 ${
        isScrolled 
            ? theme === 'dark' 
                ? 'bg-gray-900/95 border-gray-700/50 shadow-2xl shadow-black/20' 
                : 'bg-white/95 border-gray-200/50 shadow-2xl shadow-blue-200/20'
            : theme === 'dark'
                ? 'bg-gray-900/80 border-gray-700/30 shadow-lg'
                : 'bg-white/80 border-gray-100/50 shadow-lg'
    }`;

    const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
    const hoverTextColor = theme === 'dark' ? 'hover:text-blue-400' : 'hover:text-blue-600';
    const hoverBgColor = theme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-blue-50/80';
    const mobileMenuBg = theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95';

    return (
        <nav className={navClasses}>
            <Toaster richColors position="top-right" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${textColor} ${hoverBgColor}`}
                            aria-label="Main menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Logo with Animation */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-900/50'
                                    : 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30'
                            }`}>
                                <span className="text-lg font-black text-white">J</span>
                                <Sparkles 
                                    className="absolute -top-1 -right-1 text-yellow-400 animate-pulse" 
                                    size={12} 
                                />
                            </div>
                            <span className={`text-2xl font-black bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300 ${
                                theme === 'dark' 
                                    ? 'from-blue-400 via-indigo-400 to-purple-400 group-hover:from-purple-400 group-hover:to-blue-400' 
                                    : 'from-blue-600 via-indigo-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600'
                            }`}>
                                JEDD'S
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-1">
                        <Link
                            to="/"
                            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/features"
                            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                        >
                            Features
                        </Link>
                        <Link
                            to="/contact"
                            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${hoverBgColor} ${
                                theme === 'dark' 
                                    ? 'text-yellow-400 hover:text-yellow-300 hover:rotate-180' 
                                    : 'text-gray-600 hover:text-blue-600 hover:rotate-180'
                            }`}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Notification Bell - Only show when authenticated */}
                        {isAuthenticated && (
                            <button
                                className={`p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${hoverBgColor} ${
                                    theme === 'dark' 
                                        ? 'text-gray-300 hover:text-blue-400' 
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                                aria-label="Notifications"
                            >
                                <Bell size={20} />
                            </button>
                        )}

                        {/* Authentication Buttons */}
                        {!isAuthenticated ? (
                            <>
                                {/* Login Button */}
                                <Link
                                    to="/login"
                                    className={`hidden sm:inline-flex px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${textColor} ${hoverTextColor} ${hoverBgColor} border ${
                                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                                    }`}
                                >
                                    Login
                                </Link>

                                {/* Register Button */}
                                <Link
                                    to="/register"
                                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 hover:shadow-xl ${
                                        theme === 'dark' 
                                            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-blue-900/50' 
                                            : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-blue-500/30'
                                    }`}
                                >
                                    <span>Register</span>
                                    <Sparkles size={14} />
                                </Link>
                            </>
                        ) : (
                            /* User Profile Dropdown */
                            <div className="relative" ref={dropdownRef}>
                                <button 
                                    onClick={toggleProfileDropdown}
                                    className={`flex items-center gap-2 p-2 rounded-xl transition-all duration-300 ${hoverBgColor} ${
                                        profileDropdownOpen ? (theme === 'dark' ? 'bg-gray-800/50' : 'bg-blue-50/80') : ''
                                    }`}
                                >
                                    {/* Profile Picture */}
                                    <div className="relative">
                                        {user?.profileURL ? (
                                            <img
                                                src={user.profileURL}
                                                alt={`${user.userName || 'User'}'s profile`}
                                                className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
                                            />
                                        ) : (
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
                                                theme === 'dark' 
                                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                                                    : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                            }`}>
                                                {getUserInitials()}
                                            </div>
                                        )}
                                        {/* Online indicator */}
                                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>

                                    <ChevronDown 
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        } ${profileDropdownOpen ? 'rotate-180' : ''}`} 
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                {profileDropdownOpen && (
                                    <div 
                                        onMouseLeave={() => setProfileDropdownOpen(false)}
                                        className={`absolute right-0 mt-2 w-56 rounded-xl shadow-xl border backdrop-blur-xl z-50 py-2 ${
                                            theme === 'dark' 
                                                ? 'bg-gray-800/95 border-gray-700/50' 
                                                : 'bg-white/95 border-gray-200/50'
                                        }`}
                                    >
                                        {/* User Info */}
                                        <div className="px-4 py-3 border-b border-gray-200/30">
                                            <p className={`text-sm font-semibold ${
                                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                 {user?.userName || user?.email || "User"}
                                            </p>
                                            <p className={`text-xs ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                            } truncate`}>
                                                {user?.email || "user@example.com"}
                                            </p>
                                        </div>

                                        {/* Dashboard Button */}
                                        <button
                                            onClick={handleDashboardClick}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 ${
                                                theme === 'dark' 
                                                    ? 'hover:bg-gray-700/50 text-gray-200' 
                                                    : 'hover:bg-blue-50/80 text-gray-700'
                                            }`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                theme === 'dark' 
                                                    ? 'bg-blue-600/20 text-blue-400' 
                                                    : 'bg-blue-100 text-blue-600'
                                            }`}>
                                                <Sparkles size={16} />
                                            </div>
                                            <span className="font-medium">Dashboard</span>
                                        </button>

                                        {/* Logout Button */}
                                        <button
                                            onClick={handleLogout}
                                            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-300 ${
                                                theme === 'dark' 
                                                    ? 'hover:bg-red-900/20 text-red-400' 
                                                    : 'hover:bg-red-50 text-red-600'
                                            }`}
                                        >
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                                theme === 'dark' 
                                                    ? 'bg-red-600/20' 
                                                    : 'bg-red-100'
                                            }`}>
                                                <X size={16} />
                                            </div>
                                            <span className="font-medium">Logout</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Smooth Animation */}
            <div
                className={`lg:hidden border-t backdrop-blur-xl transition-all duration-500 ease-out ${
                    theme === 'dark' ? 'border-gray-700/50' : 'border-gray-200/50'
                } ${
                    isMenuOpen
                        ? "max-h-[32rem] opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <div className={`${mobileMenuBg} backdrop-blur-xl`}>
                    <div className="px-4 py-6 space-y-2">
                        <Link
                            to="/"
                            className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        
                        <Link
                            to="/features"
                            className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            to="/contact"
                            className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${textColor} ${hoverTextColor} ${hoverBgColor}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>

                        {/* Mobile Authentication */}
                        {!isAuthenticated ? (
                            <div className="pt-4 space-y-2 border-t mt-4" style={{
                                borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'
                            }}>
                                <Link
                                    to="/login"
                                    className={`block px-4 py-3 text-center text-base font-semibold rounded-xl transition-all duration-300 ${textColor} ${hoverTextColor} ${hoverBgColor} border ${
                                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className={`block px-4 py-3 text-center text-base font-bold text-white rounded-xl transition-all duration-300 shadow-lg ${
                                        theme === 'dark' 
                                            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-blue-900/50' 
                                            : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-blue-500/30'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register Now
                                </Link>
                            </div>
                        ) : (
                            /* Mobile User Profile */
                            <div className="pt-4 space-y-2 border-t mt-4" style={{
                                borderColor: theme === 'dark' ? 'rgba(75, 85, 99, 0.3)' : 'rgba(229, 231, 235, 0.5)'
                            }}>
                                {/* User Info */}
                                <div className={`flex items-center gap-3 p-3 rounded-xl ${
                                    theme === 'dark' ? 'bg-gray-700/50' : 'bg-blue-50/50'
                                }`}>
                                    {user?.profileURL ? (
                                        <img
                                            src={user.profileURL}
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                                        />
                                    ) : (
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                                            theme === 'dark' 
                                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600' 
                                                : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                                        }`}>
                                            {getUserInitials()}
                                        </div>
                                    )}
                                    <div className="flex flex-col">
                                        <span className={`font-semibold ${
                                            theme === 'dark' ? 'text-white' : 'text-gray-800'
                                        }`}>
                                            {user?.userName || user?.email || "User"}
                                        </span>
                                        <span className={`text-xs ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                            {user?.email || "user@example.com"}
                                        </span>
                                    </div>
                                </div>

                                {/* Notification Bell for Mobile */}
                                <button
                                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                                        theme === 'dark' 
                                            ? 'hover:bg-gray-700/50 text-gray-200' 
                                            : 'hover:bg-blue-50/80 text-gray-700'
                                    }`}
                                >
                                    <Bell className="inline w-4 h-4 mr-3" />
                                    <span className="font-medium">Notifications</span>
                                </button>

                                {/* Mobile Dashboard Button */}
                                <button
                                    onClick={handleDashboardClick}
                                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                                        theme === 'dark' 
                                            ? 'hover:bg-gray-700/50 text-gray-200' 
                                            : 'hover:bg-blue-50/80 text-gray-700'
                                    }`}
                                >
                                    <Sparkles className="inline w-4 h-4 mr-3" />
                                    <span className="font-medium">Dashboard</span>
                                </button>

                                {/* Mobile Logout Button */}
                                <button
                                    onClick={handleLogout}
                                    className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                                        theme === 'dark' 
                                            ? 'hover:bg-red-900/20 text-red-400' 
                                            : 'hover:bg-red-50 text-red-600'
                                    }`}
                                >
                                    <X className="inline w-4 h-4 mr-3" />
                                    <span className="font-medium">Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

