import { Response } from 'express';
import { Trade } from '../models/Trade';
import { Portfolio } from '../models/Portfolio';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all trades for user
// @route   GET /api/trades
// @access  Private
export const getTrades = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const { portfolioId, status, symbol, strategy, page = 1, limit = 10 } = req.query;

    // Build query
    const query: any = { userId };
    
    if (portfolioId) query.portfolioId = portfolioId;
    if (status) query.status = status;
    if (symbol) query.symbol = new RegExp(symbol as string, 'i');
    if (strategy) query.strategy = new RegExp(strategy as string, 'i');

    // Pagination
    const pageNum = parseInt(page as string);
    const limitNum = parseInt(limit as string);
    const skip = (pageNum - 1) * limitNum;

    const trades = await Trade.find(query)
      .populate('portfolioId', 'name')
      .sort({ entryDate: -1 })
      .skip(skip)
      .limit(limitNum);

    const total = await Trade.countDocuments(query);

    res.json({
      success: true,
      data: {
        trades,
        pagination: {
          current: pageNum,
          pages: Math.ceil(total / limitNum),
          total
        }
      }
    });
  } catch (error) {
    console.error('Get trades error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching trades'
    });
  }
};

// @desc    Get single trade
// @route   GET /api/trades/:id
// @access  Private
export const getTrade = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const trade = await Trade.findOne({ _id: req.params.id, userId })
      .populate('portfolioId', 'name');

    if (!trade) {
      res.status(404).json({
        success: false,
        message: 'Trade not found'
      });
      return;
    }

    res.json({
      success: true,
      data: { trade }
    });
  } catch (error) {
    console.error('Get trade error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching trade'
    });
  }
};

// @desc    Create trade
// @route   POST /api/trades
// @access  Private
export const createTrade = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const {
      portfolioId,
      symbol,
      entryPrice,
      quantity,
      tradeType,
      entryDate,
      strategy,
      notes,
      exchange,
      brokerage,
      taxes
    } = req.body;

    // Verify portfolio belongs to user
    const portfolio = await Portfolio.findOne({ _id: portfolioId, userId });
    if (!portfolio) {
      res.status(404).json({
        success: false,
        message: 'Portfolio not found'
      });
      return;
    }

    const trade = await Trade.create({
      userId,
      portfolioId,
      symbol: symbol.toUpperCase(),
      entryPrice,
      quantity,
      tradeType,
      entryDate: entryDate || new Date(),
      strategy,
      notes,
      exchange,
      brokerage,
      taxes
    });

    // Add trade to portfolio
    portfolio.trades.push(trade._id as any);
    
    // Update portfolio totals
    const investment = entryPrice * quantity;
    portfolio.totalInvestment += investment;
    await portfolio.save();

    await trade.populate('portfolioId', 'name');

    res.status(201).json({
      success: true,
      message: 'Trade created successfully',
      data: { trade }
    });
  } catch (error) {
    console.error('Create trade error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating trade'
    });
  }
};

// @desc    Update trade
// @route   PUT /api/trades/:id
// @access  Private
export const updateTrade = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const trade = await Trade.findOne({ _id: req.params.id, userId });

    if (!trade) {
      res.status(404).json({
        success: false,
        message: 'Trade not found'
      });
      return;
    }

    // If closing trade, set exit date and calculate profit/loss
    if (req.body.status === 'closed' && req.body.exitPrice) {
      req.body.exitDate = req.body.exitDate || new Date();
    }

    Object.assign(trade, req.body);
    await trade.save();
    await trade.populate('portfolioId', 'name');

    res.json({
      success: true,
      message: 'Trade updated successfully',
      data: { trade }
    });
  } catch (error) {
    console.error('Update trade error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating trade'
    });
  }
};

// @desc    Delete trade
// @route   DELETE /api/trades/:id
// @access  Private
export const deleteTrade = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const trade = await Trade.findOne({ _id: req.params.id, userId });

    if (!trade) {
      res.status(404).json({
        success: false,
        message: 'Trade not found'
      });
      return;
    }

    // Remove trade from portfolio
    await Portfolio.updateOne(
      { _id: trade.portfolioId },
      { $pull: { trades: trade._id } }
    );

    await Trade.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Trade deleted successfully'
    });
  } catch (error) {
    console.error('Delete trade error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting trade'
    });
  }
};
