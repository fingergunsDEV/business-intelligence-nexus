
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  glassmorphism?: boolean;
  className?: string;
  valueClassName?: string;
}

const MetricCard = ({
  title,
  value,
  change,
  icon,
  trend = 'neutral',
  glassmorphism = false,
  className,
  valueClassName,
}: MetricCardProps) => {
  const trendColor = 
    trend === 'up' 
      ? 'text-green-500' 
      : trend === 'down' 
        ? 'text-red-500' 
        : 'text-gray-500';

  return (
    <div
      className={cn(
        'rounded-xl p-6 animate-scale-in',
        glassmorphism 
          ? 'glass-panel' 
          : 'neo-panel',
        'transition-all duration-300 card-hover',
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <p className={cn('text-2xl font-semibold mt-2', valueClassName)}>
            {value}
          </p>
          
          {typeof change !== 'undefined' && (
            <div className="flex items-center mt-2">
              <span className={cn('flex items-center text-sm', trendColor)}>
                {trend === 'up' ? (
                  <ArrowUp className="w-3 h-3 mr-1" />
                ) : trend === 'down' ? (
                  <ArrowDown className="w-3 h-3 mr-1" />
                ) : null}
                {change}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">vs last period</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
