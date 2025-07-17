import mongoose, { Document, Schema } from 'mongoose';

export interface IWatchlistItem {
  symbol: string;
  targetPrice?: number;
  notes?: string;
  addedAt: Date;
}

export interface IPortfolio extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  trades: mongoose.Types.ObjectId[];
  watchlist: IWatchlistItem[];
  totalInvestment: number;
  currentValue: number;
  totalProfitLoss: number;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const watchlistItemSchema = new Schema<IWatchlistItem>({
  symbol: {
    type: String,
    required: [true, 'Symbol is required'],
    uppercase: true,
    trim: true
  },
  targetPrice: {
    type: Number,
    min: [0, 'Target price must be positive']
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [200, 'Notes cannot exceed 200 characters']
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const portfolioSchema = new Schema<IPortfolio>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    name: {
      type: String,
      required: [true, 'Portfolio name is required'],
      trim: true,
      maxlength: [50, 'Portfolio name cannot exceed 50 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, 'Description cannot exceed 200 characters']
    },
    trades: [{
      type: Schema.Types.ObjectId,
      ref: 'Trade'
    }],
    watchlist: [watchlistItemSchema],
    totalInvestment: {
      type: Number,
      default: 0,
      min: [0, 'Total investment must be positive']
    },
    currentValue: {
      type: Number,
      default: 0,
      min: [0, 'Current value must be positive']
    },
    totalProfitLoss: {
      type: Number,
      default: 0
    },
    isDefault: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes
portfolioSchema.index({ userId: 1 });
portfolioSchema.index({ userId: 1, isDefault: 1 });

// Ensure only one default portfolio per user
portfolioSchema.pre('save', async function (next) {
  if (this.isDefault && this.isModified('isDefault')) {
    await mongoose.model('Portfolio').updateMany(
      { userId: this.userId, _id: { $ne: this._id } },
      { isDefault: false }
    );
  }
  next();
});

// Virtual for return percentage
portfolioSchema.virtual('returnPercentage').get(function () {
  if (this.totalInvestment === 0) return 0;
  return ((this.totalProfitLoss / this.totalInvestment) * 100);
});

export const Portfolio = mongoose.model<IPortfolio>('Portfolio', portfolioSchema);
