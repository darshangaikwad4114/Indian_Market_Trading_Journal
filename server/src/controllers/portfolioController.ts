import { Response } from 'express';
import { Portfolio } from '../models/Portfolio';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all portfolios for user
// @route   GET /api/portfolios
// @access  Private
export const getPortfolios = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const portfolios = await Portfolio.find({ userId }).populate('trades');

    res.json({
      success: true,
      data: { portfolios }
    });
  } catch (error) {
    console.error('Get portfolios error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolios'
    });
  }
};

// @desc    Get single portfolio
// @route   GET /api/portfolios/:id
// @access  Private
export const getPortfolio = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const portfolio = await Portfolio.findOne({ _id: req.params.id, userId })
      .populate('trades');

    if (!portfolio) {
      res.status(404).json({
        success: false,
        message: 'Portfolio not found'
      });
      return;
    }

    res.json({
      success: true,
      data: { portfolio }
    });
  } catch (error) {
    console.error('Get portfolio error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching portfolio'
    });
  }
};

// @desc    Create portfolio
// @route   POST /api/portfolios
// @access  Private
export const createPortfolio = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const { name, description } = req.body;

    const portfolio = await Portfolio.create({
      userId,
      name,
      description
    });

    res.status(201).json({
      success: true,
      message: 'Portfolio created successfully',
      data: { portfolio }
    });
  } catch (error) {
    console.error('Create portfolio error:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating portfolio'
    });
  }
};

// @desc    Update portfolio
// @route   PUT /api/portfolios/:id
// @access  Private
export const updatePortfolio = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const portfolio = await Portfolio.findOne({ _id: req.params.id, userId });

    if (!portfolio) {
      res.status(404).json({
        success: false,
        message: 'Portfolio not found'
      });
      return;
    }

    Object.assign(portfolio, req.body);
    await portfolio.save();

    res.json({
      success: true,
      message: 'Portfolio updated successfully',
      data: { portfolio }
    });
  } catch (error) {
    console.error('Update portfolio error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating portfolio'
    });
  }
};

// @desc    Delete portfolio
// @route   DELETE /api/portfolios/:id
// @access  Private
export const deletePortfolio = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    const portfolio = await Portfolio.findOne({ _id: req.params.id, userId });

    if (!portfolio) {
      res.status(404).json({
        success: false,
        message: 'Portfolio not found'
      });
      return;
    }

    if (portfolio.isDefault) {
      res.status(400).json({
        success: false,
        message: 'Cannot delete default portfolio'
      });
      return;
    }

    await Portfolio.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Portfolio deleted successfully'
    });
  } catch (error) {
    console.error('Delete portfolio error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting portfolio'
    });
  }
};
