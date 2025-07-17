import mongoose, { Document, Schema } from 'mongoose';

export interface ITrade extends Document {
  userId: mongoose.Types.ObjectId;
  portfolioId: mongoose.Types.ObjectId;
  symbol: string;
  entryPrice: number;
  exitPrice?: number;
  quantity: number;
  tradeType: 'buy' | 'sell';
  status: 'open' | 'closed';
  entryDate: Date;
  exitDate?: Date;
  strategy: string;
  notes?: string;
  profitLoss?: number;
  brokerage?: number;
  taxes?: number;
  exchange: 'NSE' | 'BSE';
  createdAt: Date;
  updatedAt: Date;
}

const tradeSchema = new Schema<ITrade>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    portfolioId: {
      type: Schema.Types.ObjectId,
      ref: 'Portfolio',
      required: [true, 'Portfolio ID is required']
    },
    symbol: {
      type: String,
      required: [true, 'Stock symbol is required'],
      uppercase: true,
      trim: true,
      maxlength: [20, 'Symbol cannot exceed 20 characters']
    },
    entryPrice: {
      type: Number,
      required: [true, 'Entry price is required'],
      min: [0, 'Entry price must be positive']
    },
    exitPrice: {
      type: Number,
      min: [0, 'Exit price must be positive']
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1']
    },
    tradeType: {
      type: String,
      enum: ['buy', 'sell'],
      required: [true, 'Trade type is required']
    },
    status: {
      type: String,
      enum: ['open', 'closed'],
      default: 'open'
    },
    entryDate: {
      type: Date,
      required: [true, 'Entry date is required'],
      default: Date.now
    },
    exitDate: {
      type: Date
    },
    strategy: {
      type: String,
      required: [true, 'Strategy is required'],
      trim: true,
      maxlength: [100, 'Strategy cannot exceed 100 characters']
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [500, 'Notes cannot exceed 500 characters']
    },
    profitLoss: {
      type: Number,
      default: 0
    },
    brokerage: {
      type: Number,
      default: 0,
      min: [0, 'Brokerage must be positive']
    },
    taxes: {
      type: Number,
      default: 0,
      min: [0, 'Taxes must be positive']
    },
    exchange: {
      type: String,
      enum: ['NSE', 'BSE'],
      required: [true, 'Exchange is required']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes for efficient queries
tradeSchema.index({ userId: 1, portfolioId: 1 });
tradeSchema.index({ symbol: 1 });
tradeSchema.index({ entryDate: -1 });
tradeSchema.index({ status: 1 });

// Calculate profit/loss before saving
tradeSchema.pre('save', function (next) {
  if (this.exitPrice && this.status === 'closed') {
    const grossPL = (this.exitPrice - this.entryPrice) * this.quantity;
    this.profitLoss = grossPL - (this.brokerage || 0) - (this.taxes || 0);
  }
  next();
});

// Virtual for total investment
tradeSchema.virtual('totalInvestment').get(function () {
  return this.entryPrice * this.quantity;
});

export const Trade = mongoose.model<ITrade>('Trade', tradeSchema);
