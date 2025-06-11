import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { KPIData } from '../types/dashboard';

interface KPICardProps {
  kpi: KPIData;
}

const iconMap = {
  CheckCircle: '✓',
  Clock: '⏱',
  RotateCcw: '↻',
  DollarSign: '$'
};

export const KPICard: React.FC<KPICardProps> = ({ kpi }) => {
  const isPositive = kpi.trend > 0;
  const trendColor = isPositive ? 'text-emerald-600' : 'text-red-600';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{kpi.value}</p>
          <div className={`flex items-center text-sm ${trendColor}`}>
            <TrendIcon className="w-4 h-4 mr-1" />
            <span className="font-medium">
              {Math.abs(kpi.trend)}% {kpi.trendLabel}
            </span>
          </div>
        </div>
        <div className={`${kpi.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
          {iconMap[kpi.icon as keyof typeof iconMap]}
        </div>
      </div>
    </div>
  );
};