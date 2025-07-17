export interface Trade {
  _id: string;
  userId: string;
  portfolioId: Portfolio;
  symbol: string;
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  tradeType: 'buy' | 'sell';
  status: 'open' | 'closed';
  entryDate: string;
  exitDate?: string;
  strategy: string;
  notes?: string;
  profitLoss?: number;
  brokerage?: number;
  taxes?: number;
  exchange: 'NSE' | 'BSE';
  totalInvestment: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTradeData {
  portfolioId: string;
  symbol: string;
  entryPrice: number;
  quantity: number;
  tradeType: 'buy' | 'sell';
  entryDate?: string;
  strategy: string;
  notes?: string;
  exchange: 'NSE' | 'BSE';
  brokerage?: number;
  taxes?: number;
}

export interface UpdateTradeData extends Partial<CreateTradeData> {
  exitPrice?: number;
  exitDate?: string;
  status?: 'open' | 'closed';
}

export interface TradeFilters {
  portfolioId?: string;
  status?: 'open' | 'closed';
  symbol?: string;
  strategy?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}

export interface TradesResponse {
  success: boolean;
  data: {
    trades: Trade[];
    pagination: {
      current: number;
      pages: number;
      total: number;
    };
  };
}

export interface WatchlistItem {
  symbol: string;
  targetPrice?: number;
  notes?: string;
  addedAt: string;
}

export interface Portfolio {
  _id: string;
  userId: string;
  name: string;
  description?: string;
  trades: string[];
  watchlist: WatchlistItem[];
  totalInvestment: number;
  currentValue: number;
  totalProfitLoss: number;
  returnPercentage: number;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TradeStats {
  totalTrades: number;
  openTrades: number;
  closedTrades: number;
  totalInvestment: number;
  totalProfitLoss: number;
  winRate: number;
  averageProfit: number;
  averageLoss: number;
  bestTrade: number;
  worstTrade: number;
}

export interface TradeState {
  trades: Trade[];
  currentTrade: Trade | null;
  loading: boolean;
  error: string | null;
  pagination: {
    current: number;
    pages: number;
    total: number;
  };
  filters: TradeFilters;
  stats: TradeStats | null;
}
