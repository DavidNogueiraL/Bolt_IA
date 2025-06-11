import { KPIData, ChartData, OccurrenceData } from '../types/dashboard';

export const kpiData: KPIData[] = [
  {
    title: "Total de Ocorrências Fechadas",
    value: "2,847",
    trend: 12.5,
    trendLabel: "vs mês anterior",
    icon: "CheckCircle",
    color: "bg-emerald-500"
  },
  {
    title: "Tempo Médio de Resolução",
    value: "18.3 dias",
    trend: -8.2,
    trendLabel: "vs mês anterior",
    icon: "Clock",
    color: "bg-blue-500"
  },
  {
    title: "Taxa de Reabertura",
    value: "3.2%",
    trend: -15.1,
    trendLabel: "vs mês anterior",
    icon: "RotateCcw",
    color: "bg-orange-500"
  },
  {
    title: "Valor Total Pago",
    value: "R$ 12.4M",
    trend: 7.8,
    trendLabel: "vs mês anterior",
    icon: "DollarSign",
    color: "bg-purple-500"
  }
];

export const reopeningTrendsData: ChartData = {
  labels: ['2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Reaberturas',
      data: [156, 142, 128, 95],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 2,
      fill: true
    }
  ]
};

export const resolutionTimeBySystem: ChartData = {
  labels: ['Sistema A', 'Sistema B', 'Sistema C', 'Sistema D', 'Sistema E'],
  datasets: [
    {
      label: 'Tempo Médio (dias)',
      data: [15.2, 18.7, 12.4, 21.8, 16.3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ]
    }
  ]
};

export const closedOccurrencesByAnalyst: ChartData = {
  labels: ['Ana Silva', 'Carlos Oliveira', 'Maria Santos', 'João Pereira', 'Lucia Costa'],
  datasets: [
    {
      label: 'Ocorrências Fechadas',
      data: [487, 423, 398, 356, 332],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(168, 85, 247, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(236, 72, 153, 0.8)'
      ]
    }
  ]
};

export const monthlyTrends: ChartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      label: '2023',
      data: [245, 278, 312, 298, 267, 289, 334, 356, 378, 398, 412, 445],
      borderColor: 'rgb(107, 114, 128)',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      fill: false
    },
    {
      label: '2024',
      data: [298, 334, 378, 356, 398, 412, 445, 467, 489, 512, 534, 567],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: false
    }
  ]
};

export const topPaidOccurrences: OccurrenceData[] = [
  {
    id: '001',
    entity: 'Empresa Alpha Ltda',
    protectionSystem: 'Sistema Premium',
    type: 'Furto de Equipamentos',
    participantName: 'João da Silva Machado',
    paidAmount: 485750,
    date: '2024-10-15'
  },
  {
    id: '002',
    entity: 'Beta Construções S.A.',
    protectionSystem: 'Sistema Executivo',
    type: 'Incêndio',
    participantName: 'Maria Fernanda Oliveira',
    paidAmount: 423890,
    date: '2024-10-12'
  },
  {
    id: '003',
    entity: 'Gamma Indústria LTDA',
    protectionSystem: 'Sistema Premium',
    type: 'Danos Elétricos',
    participantName: 'Carlos Roberto Santos',
    paidAmount: 398650,
    date: '2024-10-08'
  },
  {
    id: '004',
    entity: 'Delta Serviços ME',
    protectionSystem: 'Sistema Básico',
    type: 'Roubo de Veículos',
    participantName: 'Ana Paula Costa',
    paidAmount: 356780,
    date: '2024-10-05'
  },
  {
    id: '005',
    entity: 'Epsilon Tech S.A.',
    protectionSystem: 'Sistema Executivo',
    type: 'Quebra de Máquinas',
    participantName: 'Roberto Lima Pereira',
    paidAmount: 334920,
    date: '2024-10-01'
  },
  {
    id: '006',
    entity: 'Zeta Comércio Ltda',
    protectionSystem: 'Sistema Premium',
    type: 'Furto Qualificado',
    participantName: 'Lucia Helena Silva',
    paidAmount: 298750,
    date: '2024-09-28'
  },
  {
    id: '007',
    entity: 'Eta Logística S.A.',
    protectionSystem: 'Sistema Básico',
    type: 'Acidente de Transporte',
    participantName: 'Fernando José Oliveira',
    paidAmount: 278690,
    date: '2024-09-25'
  },
  {
    id: '008',
    entity: 'Theta Consultoria ME',
    protectionSystem: 'Sistema Executivo',
    type: 'Danos por Água',
    participantName: 'Patricia Santos Lima',
    paidAmount: 245830,
    date: '2024-09-22'
  },
  {
    id: '009',
    entity: 'Iota Desenvolvimento Ltda',
    protectionSystem: 'Sistema Premium',
    type: 'Vandalismo',
    participantName: 'Ricardo Alves Costa',
    paidAmount: 223470,
    date: '2024-09-18'
  },
  {
    id: '010',
    entity: 'Kappa Soluções S.A.',
    protectionSystem: 'Sistema Básico',
    type: 'Perda de Dados',
    participantName: 'Carla Beatriz Ferreira',
    paidAmount: 198560,
    date: '2024-09-15'
  }
];

export const approvalTimes: ChartData = {
  labels: ['Analista', 'Revisor', 'Gerente'],
  datasets: [
    {
      label: 'Tempo Médio (dias)',
      data: [2.3, 1.8, 3.1],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ]
    }
  ]
};

export const salvageReceiptTime: ChartData = {
  labels: ['Veículos', 'Equipamentos'],
  datasets: [
    {
      label: 'Tempo Médio (dias)',
      data: [45.2, 38.7],
      backgroundColor: [
        'rgba(249, 115, 22, 0.8)',
        'rgba(34, 197, 94, 0.8)'
      ]
    }
  ]
};