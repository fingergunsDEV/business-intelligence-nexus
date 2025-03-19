
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { cn } from '@/lib/utils';

interface AnalyticsChartProps {
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  gradient?: boolean;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  areaChart?: boolean;
  strokeWidth?: number;
  className?: string;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  data,
  dataKey,
  xAxisKey = 'name',
  color = 'hsl(var(--primary))',
  gradient = true,
  height = 300,
  showGrid = true,
  showTooltip = true,
  showXAxis = true,
  showYAxis = false,
  areaChart = true,
  strokeWidth = 2,
  className,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className={cn('h-[300px] w-full animate-pulse bg-muted/30 rounded-md', className)} />;
  }

  const gradientId = `colorGradient-${dataKey}`;

  const ChartComponent = areaChart ? AreaChart : LineChart;
  const DataComponent = areaChart ? Area : Line;

  return (
    <div className={cn('w-full', className)}>
      <ResponsiveContainer width="100%" height={height}>
        <ChartComponent
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          {gradient && areaChart && (
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
          )}
          
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))" 
              vertical={false}
            />
          )}
          
          {showXAxis && (
            <XAxis 
              dataKey={xAxisKey} 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickLine={false}
            />
          )}
          
          {showYAxis && (
            <YAxis 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={false}
              tickLine={false}
            />
          )}
          
          {showTooltip && (
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ color: 'hsl(var(--foreground))' }}
              labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
            />
          )}
          
          <DataComponent
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={strokeWidth}
            fill={gradient && areaChart ? `url(#${gradientId})` : color}
            activeDot={{ r: 6, stroke: 'hsl(var(--background))', strokeWidth: 2 }}
            dot={false}
          />
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
