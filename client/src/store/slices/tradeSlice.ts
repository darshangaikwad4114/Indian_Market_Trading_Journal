import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TradeState, Trade, CreateTradeData, UpdateTradeData, TradeFilters } from '../../types';
import { tradeApi } from '../../services/api';

const initialState: TradeState = {
  trades: [],
  currentTrade: null,
  loading: false,
  error: null,
  pagination: {
    current: 1,
    pages: 1,
    total: 0,
  },
  filters: {},
  stats: null,
};

// Async thunks
export const fetchTrades = createAsyncThunk(
  'trades/fetchTrades',
  async (filters: TradeFilters = {}, { rejectWithValue }) => {
    try {
      const response = await tradeApi.getTrades(filters);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch trades');
    }
  }
);

export const fetchTrade = createAsyncThunk(
  'trades/fetchTrade',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await tradeApi.getTrade(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch trade');
    }
  }
);

export const createTrade = createAsyncThunk(
  'trades/createTrade',
  async (tradeData: CreateTradeData, { rejectWithValue }) => {
    try {
      const response = await tradeApi.createTrade(tradeData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create trade');
    }
  }
);

export const updateTrade = createAsyncThunk(
  'trades/updateTrade',
  async ({ id, data }: { id: string; data: UpdateTradeData }, { rejectWithValue }) => {
    try {
      const response = await tradeApi.updateTrade(id, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update trade');
    }
  }
);

export const deleteTrade = createAsyncThunk(
  'trades/deleteTrade',
  async (id: string, { rejectWithValue }) => {
    try {
      await tradeApi.deleteTrade(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete trade');
    }
  }
);

const tradeSlice = createSlice({
  name: 'trades',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setFilters: (state, action: PayloadAction<TradeFilters>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {};
    },
    setCurrentTrade: (state, action: PayloadAction<Trade | null>) => {
      state.currentTrade = action.payload;
    },
    calculateStats: (state) => {
      const trades = state.trades;
      const closedTrades = trades.filter(trade => trade.status === 'closed');
      const openTrades = trades.filter(trade => trade.status === 'open');
      
      const totalInvestment = trades.reduce((sum, trade) => sum + trade.totalInvestment, 0);
      const totalProfitLoss = closedTrades.reduce((sum, trade) => sum + (trade.profitLoss || 0), 0);
      
      const winningTrades = closedTrades.filter(trade => (trade.profitLoss || 0) > 0);
      const losingTrades = closedTrades.filter(trade => (trade.profitLoss || 0) < 0);
      
      const winRate = closedTrades.length > 0 ? (winningTrades.length / closedTrades.length) * 100 : 0;
      const averageProfit = winningTrades.length > 0 
        ? winningTrades.reduce((sum, trade) => sum + (trade.profitLoss || 0), 0) / winningTrades.length 
        : 0;
      const averageLoss = losingTrades.length > 0 
        ? losingTrades.reduce((sum, trade) => sum + (trade.profitLoss || 0), 0) / losingTrades.length 
        : 0;
      
      const profits = closedTrades.map(trade => trade.profitLoss || 0);
      const bestTrade = profits.length > 0 ? Math.max(...profits) : 0;
      const worstTrade = profits.length > 0 ? Math.min(...profits) : 0;
      
      state.stats = {
        totalTrades: trades.length,
        openTrades: openTrades.length,
        closedTrades: closedTrades.length,
        totalInvestment,
        totalProfitLoss,
        winRate,
        averageProfit,
        averageLoss,
        bestTrade,
        worstTrade,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch trades
      .addCase(fetchTrades.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrades.fulfilled, (state, action) => {
        state.loading = false;
        state.trades = action.payload.trades;
        state.pagination = action.payload.pagination;
        state.error = null;
      })
      .addCase(fetchTrades.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch single trade
      .addCase(fetchTrade.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrade.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTrade = action.payload.trade;
        state.error = null;
      })
      .addCase(fetchTrade.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create trade
      .addCase(createTrade.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTrade.fulfilled, (state, action) => {
        state.loading = false;
        state.trades.unshift(action.payload.trade);
        state.error = null;
      })
      .addCase(createTrade.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update trade
      .addCase(updateTrade.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTrade.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.trades.findIndex(trade => trade._id === action.payload.trade._id);
        if (index !== -1) {
          state.trades[index] = action.payload.trade;
        }
        if (state.currentTrade?._id === action.payload.trade._id) {
          state.currentTrade = action.payload.trade;
        }
        state.error = null;
      })
      .addCase(updateTrade.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete trade
      .addCase(deleteTrade.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTrade.fulfilled, (state, action) => {
        state.loading = false;
        state.trades = state.trades.filter(trade => trade._id !== action.payload);
        if (state.currentTrade?._id === action.payload) {
          state.currentTrade = null;
        }
        state.error = null;
      })
      .addCase(deleteTrade.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setFilters, clearFilters, setCurrentTrade, calculateStats } = tradeSlice.actions;
export default tradeSlice.reducer;
