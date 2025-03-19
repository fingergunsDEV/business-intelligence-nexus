
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface AnalyticsChartProps {
  data: { name: string; value: number }[];
  color?: string;
  height?: number;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  dataKey?: string; // Add this property to fix the build errors
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  data,
  color = 'var(--chart-color, #2563eb)',
  height = 200,
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  dataKey = 'value' // Set a default value
}) => {
  return (
    <div className={cn('w-full h-full', `h-[${height}px]`)}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-color, #e2e8f0)" />}
          {showXAxis && <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }} 
            axisLine={{ stroke: 'var(--axis-color, #e2e8f0)' }} 
            tickLine={false} 
          />}
          {showYAxis && <YAxis 
            tick={{ fontSize: 12 }} 
            axisLine={{ stroke: 'var(--axis-color, #e2e8f0)' }} 
            tickLine={false} 
            width={30}
          />}
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg, #fff)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '8px 12px',
            }}
            itemStyle={{
              color: 'var(--tooltip-text, #1f2937)',
              fontSize: 12,
              padding: 0,
            }}
            labelStyle={{
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 4,
              color: 'var(--tooltip-label, #1f2937)',
            }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            fill={color}
            fillOpacity={0.2}
            strokeWidth={2}
            activeDot={{ r: 6, strokeWidth: 0, fill: color }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
