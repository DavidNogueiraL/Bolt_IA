export interface KPIData {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: string;
  color: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
    fill?: boolean;
  }[];
}

export interface OccurrenceData {
  id: string;
  entity: string;
  protectionSystem: string;
  type: string;
  participantName: string;
  paidAmount: number;
  date: string;
}

export interface FilterState {
  dateRange: {
    start: string;
    end: string;
  };
  analyst: string;
  protectionSystem: string;
}