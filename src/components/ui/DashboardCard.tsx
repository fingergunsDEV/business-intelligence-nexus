
import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  glassmorphism?: boolean;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const DashboardCard = ({
  title,
  subtitle,
  action,
  glassmorphism = false,
  className,
  children,
  noPadding = false,
  ...props
}: DashboardCardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden animate-scale-in',
        glassmorphism 
          ? 'glass-panel' 
          : 'neo-panel',
        'transition-all duration-300 card-hover',
        className
      )}
      {...props}
    >
      {(title || subtitle || action) && (
        <div className="flex justify-between items-center px-6 pt-5 pb-4">
          <div>
            {title && (
              <h3 className="font-medium text-lg text-foreground">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={cn(noPadding ? '' : 'p-6 pt-2')}>{children}</div>
    </div>
  );
};

export default DashboardCard;
