import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Shield,
  Target,
  BookOpen,
  Users,
  CheckCircle,
  Star,
  Plus,
  Minus,
  Clock,
  Brain,
  Trophy,
  LineChart,
} from "lucide-react";
import Logo from "../components/Logo";

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Advanced Trade Tracking",
      description:
        "Record trades with detailed entry/exit points, P/L calculations, and analytics for NSE/BSE.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description:
        "Visualize performance with interactive charts, win rate analysis, and trend identification.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Setting",
      description:
        "Set trading goals, track progress, and get AI-powered insights to improve your strategy.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description:
        "Monitor position sizes, portfolio allocation, and risk metrics for Indian market regulations.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Detailed Journal",
      description:
        "Maintain trade notes, track emotions, and document strategies with market-specific templates.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Insights",
      description:
        "Learn from successful traders and access educational content focused on Indian markets.",
    },
  ];



  const faqs = [
    {
      question: "What is a Trading Journal and why do I need one?",
      answer:
        "A trading journal is a detailed record of all your trades, including entry/exit points, reasons for trades, emotions, and outcomes. It's essential for identifying patterns in your trading behavior, understanding what works and what doesn't, and continuously improving your trading strategy. Studies show that traders who maintain journals perform significantly better than those who don't.",
    },
    {
      question: "How does MyTradeDiary help improve my trading?",
      answer:
        "Our platform provides comprehensive analytics that help you identify your strengths and weaknesses. You can track win rates, analyze profit/loss patterns, monitor risk metrics, and identify which strategies work best for you. The visual charts and reports make it easy to spot trends and make data-driven decisions to improve your trading performance.",
    },
    {
      question: "Is my trading data secure and private?",
      answer:
        "Absolutely. We use bank-level encryption (256-bit SSL) to protect your data both in transit and at rest. Your trading information is stored securely in our encrypted databases, and we never share your personal trading data with third parties. You have full control over your data and can export or delete it at any time.",
    },
    {
      question: "What markets and instruments are supported?",
      answer:
        "Our platform supports all major Indian markets including NSE, BSE, MCX, and NCDEX. You can track equity trades, F&O (futures and options), commodities, currencies, and mutual fund investments. We also support international markets for global traders.",
    },
    {
      question: "How much does it cost to use the platform?",
      answer:
        "We offer a free tier that includes basic trade tracking and analytics for up to 50 trades per month. Our premium plans start at ₹999/month and include unlimited trades, advanced analytics, portfolio management, and premium support. We also offer annual plans with significant discounts.",
    },
  ];

  const testimonials = [
    {
      name: "Shrinivas Hatte",
      role: "Day Trader",
      content:
        "This platform transformed my trading. I identified my weak points and improved my win rate from 45% to 68% in just 3 months!",
      rating: 5,
    },
    {
      name: "Shubham Jangid",
      role: "Swing Trader",
      content:
        "The analytics are incredible. I can see exactly which strategies work and which don't. It's like having a trading coach 24/7.",
      rating: 5,
    },
    {
      name: "Raghav Bhandari",
      role: "Options Trader",
      content:
        "Finally, a journal that understands Indian markets. The P&L tracking and tax reports save me hours every month.",
      rating: 5,
    },
    {
      name: "Dhanashri Chorghe",
      role: "Crypto Trader",
      content:
        "Finally, a journal that understands Indian markets. The P&L tracking and tax reports save me hours every month.",
      rating: 5,
    },
    {
      name: "Sakshi Parbhat",
      role: "Forex Trader",
      content:
        "Finally, a journal that understands Indian markets. The P&L tracking and tax reports save me hours every month.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Logo size="md" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Logo Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <Trophy className="h-4 w-4 mr-2" />
                #1 Trading Journal Platform in India
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
            >
              Master the{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Indian Markets
              </span>
              <br />
              with Data-Driven Trading
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Transform your trading performance with our comprehensive journal
              platform designed specifically for Indian stock markets. Track
              trades, analyze patterns, and make data-driven decisions to become
              a consistently profitable trader.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Start Your Trading Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 inline-flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Secure & Private</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Indian Market Focused</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>10,000+ Active Traders</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our platform provides the tools and insights to become a consistently profitable trader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-6 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Market Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-green-600 text-white px-8 py-4 rounded-full text-base font-semibold mb-8 shadow-lg"
            >
              🇮🇳 Built for Indian Markets
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Designed Specifically for Indian Traders
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Navigate Indian markets with features tailored for NSE, BSE, and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                NSE & BSE Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Real-time data from major Indian exchanges with automatic symbol mapping.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tax Compliance Made Easy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Automatic STCG/LTCG calculations and CA-ready reports for seamless tax filing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Broker Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Connect with Zerodha, Upstox, Angel One and more for automatic trade import.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                F&O Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Advanced futures and options tracking with expiry management and strategy analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Sector Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Track performance across Indian sectors like IT, Pharma, Banking, and Auto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Indian Data Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Data stored in Indian servers with compliance to local regulations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Competitive Advantage Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
            >
              <Trophy className="h-4 w-4" />
              Why Choose MyTradeDiary
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Beyond Basic Journaling
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how MyTradeDiary outperforms traditional methods and competitors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-base font-semibold">Features</th>
                    <th className="px-4 py-3 text-center text-base font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        MyTradeDiary
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center text-base font-semibold">Other Platforms</th>
                    <th className="px-4 py-3 text-center text-base font-semibold">Excel/Manual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    ["Auto-import from 15+ Indian brokers", "✅", "❌", "❌"],
                    ["Real-time NSE/BSE data integration", "✅", "❌", "❌"],
                    ["Indian tax-optimized P&L reports", "✅", "❌", "❌"],
                    ["Psychology & emotion tracking", "✅", "⚠️", "❌"],
                    ["AI-powered trade recommendations", "✅", "❌", "❌"],
                    ["Strategy backtesting engine", "✅", "❌", "❌"],
                    ["Social trading insights", "✅", "❌", "❌"],
                    ["Screenshot & video analysis", "✅", "⚠️", "❌"],
                    ["50+ advanced analytics", "✅", "⚠️", "❌"],
                    ["Bank-grade security", "✅", "✅", "❌"],
                    ["24/7 customer support", "✅", "⚠️", "❌"],
                    ["Educational content library", "✅", "❌", "❌"],
                  ].map((row: string[], index: number) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium text-sm">
                        {row[0]}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xl ${row[1] === "✅" ? "text-green-500" : row[1] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                          {row[1]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xl ${row[2] === "✅" ? "text-green-500" : row[2] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                          {row[2]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-xl ${row[3] === "✅" ? "text-green-500" : row[3] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                          {row[3]}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 px-8 py-4 rounded-2xl border border-green-200 dark:border-green-700">
              <div className="text-green-600 dark:text-green-400 font-bold text-lg">
                ✅ = Full Support
              </div>
              <div className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">
                ⚠️ = Limited Support
              </div>
              <div className="text-red-600 dark:text-red-400 font-bold text-lg">
                ❌ = Not Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Trading Journal Matters */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Every Trader Needs a Journal
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Successful trading is not about luck; it's about discipline,
              strategy, and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Identify Patterns
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Discover your winning and losing patterns to capitalize on
                strengths and eliminate weaknesses.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Control Emotions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                By logging your emotional state, you can learn to control fear
                and greed, leading to more rational decisions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Refine Strategies
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track the performance of different trading strategies to see
                what works best in various market conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real stories from traders who have leveled up their game with
              MyTradeDiary.
            </p>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
            }}
          >
            <motion.div
              className="flex gap-8"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A simple, streamlined process to elevate your trading.
            </p>
          </div>

          <div className="relative">
            {/* Dotted line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 dark:bg-gray-700" style={{transform: 'translateY(-50%)'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Import Trades",
                  description: "Connect your broker and automatically sync your trading history.",
                  icon: <TrendingUp className="h-8 w-8" />,
                },
                {
                  step: "02",
                  title: "Analyze Performance",
                  description: "Use our powerful analytics to find your edge in the market.",
                  icon: <BarChart3 className="h-8 w-8" />,
                },
                {
                  step: "03",
                  title: "Refine Strategy",
                  description: "Identify patterns and adjust your approach with data-driven insights.",
                  icon: <Target className="h-8 w-8" />,
                },
                {
                  step: "04",
                  title: "Achieve Goals",
                  description: "Set targets, track your progress, and reach new trading heights.",
                  icon: <Trophy className="h-8 w-8" />,
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center bg-white dark:bg-gray-900 px-4"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold border-4 border-white dark:border-gray-900">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your trading style and volume
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Starter
                </h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  ₹0
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Perfect for beginners
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Up to 50 trades/month
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Mobile app access
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Email support
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center block"
              >
                Get Started Free
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-white relative transform scale-105 shadow-2xl"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-1">₹999</div>
                <p className="text-blue-100 mb-6">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Unlimited trades
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Broker integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Tax reports
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                  Custom alerts
                </li>
              </ul>
              <Link
                to="/register"
                className="w-full bg-white text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center block"
              >
                Start 14-Day Trial
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                  ₹2,999
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  per month
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Everything in Pro
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Team collaboration
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  API access
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  White-label options
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center block"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include 14-day free trial • No setup fees • Cancel
              anytime
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Secure & Private
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                99.9% Uptime
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Have questions? We've got answers.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 dark:text-white"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MyTradeDiary</h3>
              <p className="text-gray-400">
                Empowering traders with data-driven insights for consistent
                profitability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/api" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MyTradeDiary. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
