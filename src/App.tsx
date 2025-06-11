import React, { useState } from 'react';
import { TabNavigation } from './components/TabNavigation';
import { FilterPanel } from './components/FilterPanel';
import { KPICard } from './components/KPICard';
import { Chart } from './components/Chart';
import { TopOccurrencesTable } from './components/TopOccurrencesTable';
import { 
  kpiData, 
  reopeningTrendsData, 
  resolutionTimeBySystem, 
  closedOccurrencesByAnalyst,
  monthlyTrends,
  topPaidOccurrences,
  approvalTimes,
  salvageReceiptTime
} from './data/mockData';
import { FilterState } from './types/dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [filters, setFilters] = useState<FilterState>({
    dateRange: {
      start: '2024-01-01',
      end: '2024-12-31'
    },
    analyst: 'Todos',
    protectionSystem: 'Todos'
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpiData.map((kpi, index) => (
                <KPICard key={index} kpi={kpi} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="line"
                data={monthlyTrends}
                title="Tendência Mensal de Ocorrências Fechadas"
                height={350}
              />
              <Chart
                type="pie"
                data={closedOccurrencesByAnalyst}
                title="Distribuição por Analista"
                height={350}
              />
            </div>
          </div>
        );

      case 'reopenings':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="line"
                data={reopeningTrendsData}
                title="Evolução de Reaberturas - Últimos 4 Anos"
                height={350}
              />
              <Chart
                type="bar"
                data={resolutionTimeBySystem}
                title="Reaberturas por Sistema de Proteção"
                height={350}
              />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Análise de Reaberturas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-600 font-medium">Taxa Atual</p>
                  <p className="text-2xl font-bold text-red-700">3.2%</p>
                  <p className="text-xs text-red-500">Meta: &lt; 5%</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-600 font-medium">Média do Setor</p>
                  <p className="text-2xl font-bold text-yellow-700">4.8%</p>
                  <p className="text-xs text-yellow-500">Benchmark de mercado</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-600 font-medium">Redução Anual</p>
                  <p className="text-2xl font-bold text-green-700">-15.1%</p>
                  <p className="text-xs text-green-500">vs ano anterior</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'resolution':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="bar"
                data={resolutionTimeBySystem}
                title="Tempo Médio de Resolução por Sistema"
                height={350}
              />
              <Chart
                type="line"
                data={{
                  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                  datasets: [
                    {
                      label: 'Tempo Médio (dias)',
                      data: [22.3, 21.8, 19.5, 18.7, 17.9, 18.3, 16.8, 17.2, 18.9, 17.5, 18.1, 16.4],
                      borderColor: 'rgb(59, 130, 246)',
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      fill: true
                    }
                  ]
                }}
                title="Evolução do Tempo de Resolução (2024)"
                height={350}
              />
            </div>
          </div>
        );

      case 'closed':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="line"
                data={monthlyTrends}
                title="Comparativo Mensal - Ocorrências Fechadas"
                height={350}
              />
              <Chart
                type="pie"
                data={closedOccurrencesByAnalyst}
                title="Distribuição por Analista (2024)"
                height={350}
              />
            </div>
            <Chart
              type="bar"
              data={resolutionTimeBySystem}
              title="Ocorrências Fechadas por Sistema de Proteção"
              height={300}
            />
          </div>
        );

      case 'top-paid':
        return (
          <div className="space-y-6">
            <TopOccurrencesTable data={topPaidOccurrences} />
          </div>
        );

      case 'approvals':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="bar"
                data={approvalTimes}
                title="Tempo Médio de Aprovação por Função"
                height={350}
              />
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Métricas de Aprovação</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-900">Tempo Total Médio</span>
                    <span className="text-xl font-bold text-blue-700">7.2 dias</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-900">Taxa de Aprovação</span>
                    <span className="text-xl font-bold text-green-700">94.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-yellow-900">Pendências</span>
                    <span className="text-xl font-bold text-yellow-700">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'salvage':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart
                type="bar"
                data={salvageReceiptTime}
                title="Tempo Médio de Recebimento por Tipo"
                height={350}
              />
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas de Salvados</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-purple-900">Valor Total Arrecadado</span>
                    <span className="text-xl font-bold text-purple-700">R$ 2.8M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-orange-900">Veículos Vendidos</span>
                    <span className="text-xl font-bold text-orange-700">342</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                    <span className="font-medium text-teal-900">Equipamentos Vendidos</span>
                    <span className="text-xl font-bold text-teal-700">189</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'delayed':
        return (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-4">⚠️ Salvados com Atraso Superior a 30 dias</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 font-medium">Total em Atraso</p>
                  <p className="text-2xl font-bold text-red-700">47</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 font-medium">Valor Pendente</p>
                  <p className="text-2xl font-bold text-red-700">R$ 890K</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 font-medium">Atraso Médio</p>
                  <p className="text-2xl font-bold text-red-700">52 dias</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100">
                  <p className="text-sm text-red-600 font-medium">Maior Atraso</p>
                  <p className="text-2xl font-bold text-red-700">127 dias</p>
                </div>
              </div>
            </div>
            
            <Chart
              type="bar"
              data={{
                labels: ['31-45 dias', '46-60 dias', '61-90 dias', '91-120 dias', '+120 dias'],
                datasets: [
                  {
                    label: 'Quantidade',
                    data: [18, 12, 8, 5, 4],
                    backgroundColor: [
                      'rgba(251, 191, 36, 0.8)',
                      'rgba(249, 115, 22, 0.8)',
                      'rgba(239, 68, 68, 0.8)',
                      'rgba(220, 38, 38, 0.8)',
                      'rgba(185, 28, 28, 0.8)'
                    ]
                  }
                ]
              }}
              title="Distribuição dos Salvados em Atraso por Faixa de Tempo"
              height={300}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Dashboard de Análise de Ocorrências
            </h1>
            <p className="text-lg text-gray-600">
              Proposta de Design para Power BI - Análise Operacional Completa
            </p>
          </div>
        </header>

        <FilterPanel filters={filters} onFilterChange={setFilters} />
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        
        {renderTabContent()}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2024 Dashboard de Ocorrências - Proposta Power BI | Dados simulados para demonstração</p>
        </footer>
      </div>
    </div>
  );
}

export default App;