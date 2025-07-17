import express from 'express';
import { body } from 'express-validator';
import {
  getPortfolios,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} from '../controllers/portfolioController';
import { authenticate } from '../middleware/auth';
import { handleValidationErrors } from '../middleware/validation';

const router = express.Router();

// Validation rules
const createPortfolioValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Portfolio name is required')
    .isLength({ min: 1, max: 50 })
    .withMessage('Portfolio name must be between 1 and 50 characters'),
  body('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Description cannot exceed 200 characters')
];

const updatePortfolioValidation = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Portfolio name must be between 1 and 50 characters'),
  body('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Description cannot exceed 200 characters')
];

// All routes require authentication
router.use(authenticate);

// Routes
router.get('/', getPortfolios);
router.get('/:id', getPortfolio);
router.post('/', createPortfolioValidation, handleValidationErrors, createPortfolio);
router.put('/:id', updatePortfolioValidation, handleValidationErrors, updatePortfolio);
router.delete('/:id', deletePortfolio);

export default router;
