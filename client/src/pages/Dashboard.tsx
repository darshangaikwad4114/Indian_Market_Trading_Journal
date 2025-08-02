import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Dashboard: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="space-y-4"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome to your MyTradeDiary dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stats Cards */}
        <div className="card p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                <span className="text-primary-600 font-semibold">₹</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Investment
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹0
              </div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-success-100 rounded-lg flex items-center justify-center">
                <span className="text-success-600 font-semibold">+</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total P&L
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                ₹0
              </div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">#</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Total Trades
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                0
              </div>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-purple-600 font-semibold">%</span>
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Win Rate
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                0%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="card">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Recent Trades
          </h3>
        </div>
        <div className="p-4">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No trades found. Start by creating your first trade!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
