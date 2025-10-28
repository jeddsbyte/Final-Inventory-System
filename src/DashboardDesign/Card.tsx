import React, { type ReactNode } from "react";
import { useTheme } from "./ThemeContext";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) =>  {
    const { theme } = useTheme();

    const baseClasses = `p-3 rounded-lg shadow-sm border transition-colors duration-300 ${
        theme === 'dark' 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-100'
    }`;

    return (
        <div className={`${baseClasses} ${className}`}>
            {children}
        </div>
    )
}

export default Card;