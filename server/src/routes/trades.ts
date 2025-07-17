import express from 'express';
import { body } from 'express-validator';
import {
  getTrades,
  getTrade,
  createTrade,
  updateTrade,
  deleteTrade
} from '../controllers/tradeController';
import { authenticate } from '../middleware/auth';
import { handleValidationErrors } from '../middleware/validation';

const router = express.Router();

// Validation rules
const createTradeValidation = [
  body('portfolioId')
    .notEmpty()
    .withMessage('Portfolio ID is required')
    .isMongoId()
    .withMessage('Invalid portfolio ID'),
  body('symbol')
    .trim()
    .notEmpty()
    .withMessage('Stock symbol is required')
    .isLength({ min: 1, max: 20 })
    .withMessage('Symbol must be between 1 and 20 characters'),
  body('entryPrice')
    .isFloat({ min: 0 })
    .withMessage('Entry price must be a positive number'),
  body('quantity')
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1'),
  body('tradeType')
    .isIn(['buy', 'sell'])
    .withMessage('Trade type must be either buy or sell'),
  body('strategy')
    .trim()
    .notEmpty()
    .withMessage('Strategy is required')
    .isLength({ max: 100 })
    .withMessage('Strategy cannot exceed 100 characters'),
  body('exchange')
    .isIn(['NSE', 'BSE'])
    .withMessage('Exchange must be NSE or BSE'),
  body('notes')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Notes cannot exceed 500 characters'),
  body('brokerage')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Brokerage must be positive'),
  body('taxes')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Taxes must be positive')
];

const updateTradeValidation = [
  body('symbol')
    .optional()
    .trim()
    .isLength({ min: 1, max: 20 })
    .withMessage('Symbol must be between 1 and 20 characters'),
  body('entryPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Entry price must be a positive number'),
  body('exitPrice')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Exit price must be a positive number'),
  body('quantity')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Quantity must be at least 1'),
  body('tradeType')
    .optional()
    .isIn(['buy', 'sell'])
    .withMessage('Trade type must be either buy or sell'),
  body('status')
    .optional()
    .isIn(['open', 'closed'])
    .withMessage('Status must be open or closed'),
  body('strategy')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Strategy cannot exceed 100 characters'),
  body('notes')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Notes cannot exceed 500 characters'),
  body('brokerage')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Brokerage must be positive'),
  body('taxes')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Taxes must be positive')
];

// All routes require authentication
router.use(authenticate);

// Routes
router.get('/', getTrades);
router.get('/:id', getTrade);
router.post('/', createTradeValidation, handleValidationErrors, createTrade);
router.put('/:id', updateTradeValidation, handleValidationErrors, updateTrade);
router.delete('/:id', deleteTrade);

export default router;
