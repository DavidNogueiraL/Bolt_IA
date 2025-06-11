import React from 'react';
import { 
  BarChart3, 
  Clock, 
  RotateCcw, 
  CheckCircle, 
  Trophy, 
  Users, 
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
    { id: 'reopenings', label: 'Reaberturas', icon: RotateCcw },
    { id: 'resolution', label: 'Tempo de Resolução', icon: Clock },
    { id: 'closed', label: 'Ocorrências Fechadas', icon: CheckCircle },
    { id: 'top-paid', label: 'Maiores Pagamentos', icon: Trophy },
    { id: 'approvals', label: 'Aprovações', icon: Users },
    { id: 'salvage', label: 'Venda de Salvados', icon: TrendingUp },
    { id: 'delayed', label: 'Atrasos +30 dias', icon: AlertTriangle }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6">
      <div className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};