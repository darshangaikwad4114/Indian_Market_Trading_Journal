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
        "Record every trade with detailed entry/exit points, profit/loss calculations, and comprehensive analytics tailored for NSE and BSE.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description:
        "Visualize your trading performance with interactive charts, win rate analysis, and trend identification specific to Indian markets.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Setting & Monitoring",
      description:
        "Set realistic trading goals, track progress, and receive AI-powered insights to improve your trading strategy and consistency.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Risk Management",
      description:
        "Monitor position sizes, portfolio allocation, and risk metrics with built-in calculators for Indian market regulations.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Detailed Trading Journal",
      description:
        "Maintain comprehensive trade notes, emotional state tracking, and strategy documentation with market-specific templates.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Insights",
      description:
        "Learn from successful Indian traders, share experiences, and access educational content focused on local market conditions.",
    },
  ];

  const benefits = [
    "Track unlimited trades across NSE, BSE, and commodity markets",
    "Real-time profit/loss calculations in INR with tax implications",
    "Advanced filtering and search capabilities for Indian stocks",
    "Export reports for Income Tax filing and CA consultation",
    "Support for equity, F&O, commodity, and currency trading",
    "Integration with major Indian brokers (Zerodha, Upstox, Angel One)",
    "Automated dividend and bonus tracking for Indian equities",
    "Sector-wise performance analysis for Indian market segments",
    "Mobile-responsive design for trading on-the-go",
    "Bank-level security with encrypted data and 2FA",
    "Real-time NSE/BSE market data integration",
    "Personalized trading insights powered by AI",
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
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive platform provides all the tools and insights you
              need to become a consistently profitable trader.
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
      <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
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
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Navigate the complexities of Indian markets with features tailored
              for NSE, BSE, and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                NSE & BSE Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time data from both major Indian exchanges with automatic
                symbol mapping and corporate action tracking.
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Tax Compliance Made Easy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automatic STCG/LTCG calculations, TDS tracking, and CA-ready
                reports for seamless tax filing.
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Broker Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with Zerodha, Upstox, Angel One, and other major Indian
                brokers for automatic trade import.
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                F&O Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced futures and options tracking with expiry management,
                Greek calculations, and strategy analysis.
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sector Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track performance across Indian sectors like IT, Pharma,
                Banking, and Auto with market-specific insights.
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Indian Data Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Data stored in Indian servers with compliance to local
                regulations and complete privacy protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Competitive Advantage Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
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
              Beyond Basic Trade Journaling
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how MyTradeDiary outperforms traditional journaling methods and competitors
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Features</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        MyTradeDiary
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">Other Platforms</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold">Excel/Manual</th>
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
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">
                        {row[0]}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-2xl ${row[1] === "✅" ? "text-green-500" : row[1] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                          {row[1]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-2xl ${row[2] === "✅" ? "text-green-500" : row[2] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
                          {row[2]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-2xl ${row[3] === "✅" ? "text-green-500" : row[3] === "⚠️" ? "text-yellow-500" : "text-red-500"}`}>
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <BookOpen className="h-4 w-4" />
              Trading Psychology
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Every Successful Trader Keeps a Journal
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your trading with systematic tracking and data-driven insights. 
              Your roadmap to consistent profitability.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Stats Card - Takes 2 columns on large screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between h-full">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                  <div className="text-6xl font-bold mb-2">78%</div>
                  <p className="text-blue-100 text-lg mb-4">
                    Win rate improvement with detailed journals
                  </p>
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <div className="text-center">
                      <div className="text-2xl font-bold">15min</div>
                      <p className="text-blue-200 text-sm">
                        Daily time
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">3x</div>
                      <p className="text-blue-200 text-sm">
                        Faster learning
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trading Psychology Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Psychology
                </h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Target className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-sm">Control emotions</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-3" />
                  <span className="text-sm">Spot patterns</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Shield className="h-4 w-4 text-red-500 mr-3" />
                  <span className="text-sm">Manage risk</span>
                </div>
              </div>
            </motion.div>

            {/* Key Benefits - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <LineChart className="h-5 w-5 text-green-600 mr-2" />
                Trading Analytics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-3">
                  <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Success
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">
                    +45%
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Profit
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
                  <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    -60%
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Losses
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    92%
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Satisfaction
                  </p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg">
                  <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                    2.5x
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Advanced Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="h-5 w-5 text-blue-600 mr-2" />
                Security & Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.slice(4, 8).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Time Investment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 mr-3" />
                <h4 className="text-lg font-bold">Time Investment</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Daily</span>
                  <span className="text-lg font-bold">15min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Weekly</span>
                  <span className="text-lg font-bold">30min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Monthly</span>
                  <span className="text-lg font-bold">1hr</span>
                </div>
                <div className="text-xs text-indigo-200 mt-4">
                  Small time, massive results
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Successful Traders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how our platform has helped traders achieve consistent
              profitability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6"
            >
              <BookOpen className="h-4 w-4" />
              Simple Process
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              From Chaos to Clarity in 4 Steps
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform your trading journey with our proven methodology used by 10,000+ successful Indian traders
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Connect & Auto-Import",
                  description: "Link your broker accounts (Zerodha, Upstox, Angel One, etc.) and let our system automatically import all your trades with zero manual entry.",
                  icon: <TrendingUp className="h-6 w-6" />,
                  color: "from-blue-500 to-purple-600"
                },
                {
                  step: "02",
                  title: "Analyze & Tag",
                  description: "Our AI categorizes trades by strategy, emotions, and market conditions. Add screenshots, notes, and emotional states for complete context.",
                  icon: <Brain className="h-6 w-6" />,
                  color: "from-purple-500 to-pink-600"
                },
                {
                  step: "03",
                  title: "Discover Patterns",
                  description: "Uncover hidden patterns in your trading with 50+ analytics including win rates, profit factors, and psychological biases across different market conditions.",
                  icon: <BarChart3 className="h-6 w-6" />,
                  color: "from-pink-500 to-red-600"
                },
                {
                  step: "04",
                  title: "Optimize & Scale",
                  description: "Get personalized recommendations, backtest strategies, and scale your best-performing approaches with data-driven confidence.",
                  icon: <Target className="h-6 w-6" />,
                  color: "from-red-500 to-orange-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        STEP {item.step}
                      </span>
                      <div className="h-px bg-gray-300 dark:bg-gray-600 flex-1"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Demonstration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="space-y-6">
                  {/* Mock Dashboard */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      Trading Dashboard
                    </h4>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        +₹2,45,000
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Monthly P&L
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        68%
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Win Rate
                      </p>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-4 rounded-xl">
                    <div className="flex items-end gap-2 h-20">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-sm flex-1"
                          style={{
                            height: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Trades */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Recent Trades
                    </h5>
                    {[
                      { symbol: "RELIANCE", pnl: "+₹1,250", status: "profit" },
                      { symbol: "TCS", pnl: "-₹850", status: "loss" },
                      { symbol: "HDFC", pnl: "+₹2,100", status: "profit" }
                    ].map((trade, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {trade.symbol}
                        </span>
                        <span className={`text-sm font-medium ${
                          trade.status === 'profit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trade.pnl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { metric: "10,000+", label: "Active Traders", icon: "👥" },
              { metric: "₹500Cr+", label: "Trades Tracked", icon: "📊" },
              { metric: "78%", label: "Avg. Win Rate Improvement", icon: "🎯" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.metric}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about MyTradeDiary platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
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
