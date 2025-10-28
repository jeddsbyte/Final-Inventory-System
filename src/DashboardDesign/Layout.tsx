import { Outlet } from 'react-router-dom'
import Card from './Card'
import { SideNav } from './SideNav'
import { useTheme } from './ThemeContext'

export const Layout = () => {
    const { theme } = useTheme()

    const layoutClasses = `flex min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-blue-50 via-[#F0F9FF] to-cyan-50'
    }`

    const cardClasses = `min-h-[calc(100vh-2rem)] transition-all duration-300 ${
        theme === 'dark'
            ? 'border border-gray-700 bg-gray-800/80 backdrop-blur-sm shadow-xl'
            : 'border border-[#B8E6F8] bg-white/80 backdrop-blur-sm shadow-sm'
    }`

    return (
        <div className={layoutClasses}>
            <SideNav />
                <div className='flex-1 p-4 lg:p-3 overflow-x-hidden mt-0 lg:mt-16'>
                <div className="max-w-full mx-auto">
                    <Card className={cardClasses}>
                        <Outlet />
                    </Card>
                </div>
            </div>
        </div>
    )
}