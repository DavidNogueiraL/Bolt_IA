import React from 'react';
import { Calendar, User, Shield } from 'lucide-react';
import { FilterState } from '../types/dashboard';

interface FilterPanelProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const analysts = ['Todos', 'Ana Silva', 'Carlos Oliveira', 'Maria Santos', 'João Pereira', 'Lucia Costa'];
  const protectionSystems = ['Todos', 'Sistema Premium', 'Sistema Executivo', 'Sistema Básico'];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <Shield className="w-5 h-5 mr-2 text-blue-600" />
        Filtros de Análise
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Data Início
          </label>
          <input
            type="date"
            value={filters.dateRange.start}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, start: e.target.value }
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            Data Fim
          </label>
          <input
            type="date"
            value={filters.dateRange.end}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                dateRange: { ...filters.dateRange, end: e.target.value }
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Analista
          </label>
          <select
            value={filters.analyst}
            onChange={(e) => onFilterChange({ ...filters, analyst: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {analysts.map((analyst) => (
              <option key={analyst} value={analyst}>
                {analyst}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Shield className="w-4 h-4 inline mr-1" />
            Sistema de Proteção
          </label>
          <select
            value={filters.protectionSystem}
            onChange={(e) => onFilterChange({ ...filters, protectionSystem: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {protectionSystems.map((system) => (
              <option key={system} value={system}>
                {system}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};