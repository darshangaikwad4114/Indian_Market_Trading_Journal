import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export const formatNumber = (num: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

export const formatPercentage = (value: number): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
};

export const calculateProfitLoss = (
  entryPrice: number,
  exitPrice: number,
  quantity: number,
  brokerage: number = 0,
  taxes: number = 0
): number => {
  const grossPL = (exitPrice - entryPrice) * quantity;
  return grossPL - brokerage - taxes;
};

export const calculatePercentageReturn = (
  entryPrice: number,
  exitPrice: number
): number => {
  return ((exitPrice - entryPrice) / entryPrice) * 100;
};

export const getProfitLossColor = (value: number): string => {
  if (value > 0) return 'text-success-600';
  if (value < 0) return 'text-danger-600';
  return 'text-gray-600';
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: number | null = null;
  
  return ((...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};
