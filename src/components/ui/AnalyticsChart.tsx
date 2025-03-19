
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Sector
} from 'recharts';
import { cn } from '@/lib/utils';

type ChartType = 'area' | 'bar' | 'line' | 'pie';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  formatter?: (value: number, name: string) => React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, formatter }) => {
  if (!active || !payload || !payload.length) return null;
  
  return (
    <div className="bg-background/80 backdrop-blur-sm border border-border p-3 rounded-lg shadow-md">
      <p className="text-xs font-medium mb-1">{label}</p>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center text-sm">
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="mr-2">{entry.name}:</span>
          <span className="font-medium">
            {formatter 
              ? formatter(entry.value, entry.name) 
              : entry.value
            }
          </span>
        </div>
      ))}
    </div>
  );
};

interface AnalyticsChartProps {
  data: any[];
  type?: ChartType;
  height?: number | string;
  xAxisDataKey?: string;
  series: Array<{
    dataKey: string;
    name?: string;
    color?: string;
    type?: 'monotone' | 'linear' | 'basis' | 'natural';
    strokeWidth?: number;
    fillOpacity?: number;
  }>;
  grid?: boolean;
  tooltip?: boolean;
  formatter?: (value: number, name: string) => React.ReactNode;
  className?: string;
}

const renderChart = (
  type: ChartType, 
  data: any[], 
  series: AnalyticsChartProps['series'],
  xAxisDataKey?: string,
  grid?: boolean,
  tooltip?: boolean,
  formatter?: (value: number, name: string) => React.ReactNode
) => {
  if (type === 'area') {
    return (
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />}
        <XAxis 
          dataKey={xAxisDataKey || 'name'} 
          tick={{ fill: 'var(--muted-foreground)' }} 
          axisLine={{ stroke: 'var(--border)' }}
        />
        <YAxis tick={{ fill: 'var(--muted-foreground)' }} axisLine={{ stroke: 'var(--border)' }} />
        {tooltip && <Tooltip content={<CustomTooltip formatter={formatter} />} />}
        {series.map((s, i) => (
          <Area
            key={`area-${i}`}
            type={s.type || 'monotone'}
            dataKey={s.dataKey}
            name={s.name || s.dataKey}
            stroke={s.color || `var(--chart-${i})`}
            fill={s.color || `var(--chart-${i})`}
            strokeWidth={s.strokeWidth || 2}
            fillOpacity={s.fillOpacity || 0.1}
          />
        ))}
      </AreaChart>
    );
  }
  
  if (type === 'bar') {
    return (
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />}
        <XAxis 
          dataKey={xAxisDataKey || 'name'} 
          tick={{ fill: 'var(--muted-foreground)' }} 
          axisLine={{ stroke: 'var(--border)' }}
        />
        <YAxis tick={{ fill: 'var(--muted-foreground)' }} axisLine={{ stroke: 'var(--border)' }} />
        {tooltip && <Tooltip content={<CustomTooltip formatter={formatter} />} />}
        {series.map((s, i) => (
          <Bar
            key={`bar-${i}`}
            dataKey={s.dataKey}
            name={s.name || s.dataKey}
            fill={s.color || `var(--chart-${i})`}
          />
        ))}
      </BarChart>
    );
  }
  
  if (type === 'line') {
    return (
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />}
        <XAxis 
          dataKey={xAxisDataKey || 'name'} 
          tick={{ fill: 'var(--muted-foreground)' }} 
          axisLine={{ stroke: 'var(--border)' }}
        />
        <YAxis tick={{ fill: 'var(--muted-foreground)' }} axisLine={{ stroke: 'var(--border)' }} />
        {tooltip && <Tooltip content={<CustomTooltip formatter={formatter} />} />}
        {series.map((s, i) => (
          <Line
            key={`line-${i}`}
            type={s.type || 'monotone'}
            dataKey={s.dataKey}
            name={s.name || s.dataKey}
            stroke={s.color || `var(--chart-${i})`}
            strokeWidth={s.strokeWidth || 2}
          />
        ))}
      </LineChart>
    );
  }
  
  if (type === 'pie') {
    return (
      <PieChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey={series[0].dataKey}
          nameKey={xAxisDataKey || 'name'}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={series[index]?.color || `var(--chart-${index % 10})`} 
            />
          ))}
        </Pie>
        {tooltip && <Tooltip content={<CustomTooltip formatter={formatter} />} />}
        <Legend />
      </PieChart>
    );
  }
  
  return null;
};

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  data,
  type = 'area',
  height = 300,
  xAxisDataKey,
  series,
  grid = true,
  tooltip = true,
  formatter,
  className
}) => {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        {renderChart(type, data, series, xAxisDataKey, grid, tooltip, formatter)}
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
