import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from './store';
import { getCurrentUser } from './store/slices/authSlice';
import { pageTransition } from './animations';

// Layout Components
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';

// Main Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Trades from './pages/Trades';
import TradeForm from './pages/TradeForm';
import TradeDetail from './pages/TradeDetail';
import Portfolio from './pages/Portfolio';
import Reports from './pages/Reports';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, token, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Auto-login if token exists
    if (token && !isAuthenticated) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token, isAuthenticated]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#10B981',
            },
          },
          error: {
            style: {
              background: '#EF4444',
            },
          },
        }}
      />
      
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            !isAuthenticated ? (
              <motion.div
                key="home"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            ) : (
              <Navigate to="/app/dashboard" replace />
            )
          } />
          
          <Route path="/login" element={
            !isAuthenticated ? (
              <motion.div
                key="login"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Login />
              </motion.div>
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } />
          
          <Route path="/register" element={
            !isAuthenticated ? (
              <motion.div
                key="register"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Register />
              </motion.div>
            ) : (
              <Navigate to="/app/dashboard" replace />
            )
          } />

          {/* Protected Routes */}
          <Route path="/app" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="trades" element={<Trades />} />
            <Route path="trades/new" element={<TradeForm />} />
            <Route path="trades/:id" element={<TradeDetail />} />
            <Route path="trades/:id/edit" element={<TradeForm />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="reports" element={<Reports />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
