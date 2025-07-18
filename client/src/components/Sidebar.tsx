import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  TrendingUp, 
  PlusCircle, 
  PieChart, 
  FileText,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { RootState, AppDispatch } from '../store';
import { logout } from '../store/slices/authSlice';
import { cn } from '../utils';
import Logo from './Logo';

const navigation = [
  { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
  { name: 'Trades', href: '/app/trades', icon: TrendingUp },
  { name: 'New Trade', href: '/app/trades/new', icon: PlusCircle },
  { name: 'Portfolio', href: '/app/portfolio', icon: PieChart },
  { name: 'Reports', href: '/app/reports', icon: FileText },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen || window.innerWidth >= 1024 ? 0 : -256,
        }}
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-64 bg-white dark:bg-gray-800 shadow-xl",
          "lg:translate-x-0 lg:shadow-none lg:border-r border-gray-200 dark:border-gray-700"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          {/* Header */}
          <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-700 px-6">
            <Logo size="sm" showText={false} />
            <span className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
              MyTradeDiary
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5 transition-colors",
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300"
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name || 'User'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
