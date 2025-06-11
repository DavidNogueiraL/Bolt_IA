import React from 'react';
import { Trophy, Building, Shield, FileText, User, DollarSign, Calendar } from 'lucide-react';
import { OccurrenceData } from '../types/dashboard';

interface TopOccurrencesTableProps {
  data: OccurrenceData[];
}

export const TopOccurrencesTable: React.FC<TopOccurrencesTableProps> = ({ data }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Trophy className="w-5 h-5 mr-2" />
          Top 10 Maiores Ocorrências Pagas
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  Ranking
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  Entidade
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Sistema
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  Tipo
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  Participante
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  Valor Pago
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Data
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((occurrence, index) => (
              <tr key={occurrence.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{occurrence.entity}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    occurrence.protectionSystem === 'Sistema Premium' ? 'bg-purple-100 text-purple-800' :
                    occurrence.protectionSystem === 'Sistema Executivo' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {occurrence.protectionSystem}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{occurrence.type}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{occurrence.participantName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-green-600">
                    {formatCurrency(occurrence.paidAmount)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-500">{formatDate(occurrence.date)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};