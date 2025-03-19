
import React from 'react';
import { Users, ArrowUpRight, CreditCard, BarChart } from 'lucide-react';
import MetricCard from '@/components/ui/MetricCard';
import DashboardCard from '@/components/ui/DashboardCard';
import AnalyticsChart from '@/components/ui/AnalyticsChart';

const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 7890 },
  { name: 'Jun', value: 6390 },
  { name: 'Jul', value: 8490 },
];

const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Visitors"
          value="14,928"
          change={12.5}
          trend="up"
          icon={<Users className="w-5 h-5" />}
        />
        
        <MetricCard
          title="Conversion Rate"
          value="3.24%"
          change={1.8}
          trend="up"
          icon={<ArrowUpRight className="w-5 h-5" />}
        />
        
        <MetricCard
          title="Average Revenue"
          value="$328.14"
          change={-2.3}
          trend="down"
          icon={<CreditCard className="w-5 h-5" />}
        />
        
        <MetricCard
          title="Total Appointments"
          value="243"
          change={8.7}
          trend="up"
          icon={<BarChart className="w-5 h-5" />}
        />
      </div>
      
      <DashboardCard
        title="Website Traffic"
        subtitle="Last 7 months"
        action={
          <div className="text-sm font-medium text-primary cursor-pointer hover:underline">
            View Details
          </div>
        }
        className="h-[400px]"
      >
        <AnalyticsChart
          data={chartData}
          dataKey="value"
          height={300}
          showGrid={true}
          showXAxis={true}
          showYAxis={true}
        />
      </DashboardCard>
    </div>
  );
};

export default OverviewSection;
