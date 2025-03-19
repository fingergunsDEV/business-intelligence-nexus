
import React from 'react';
import { Clock, Users, MousePointer } from 'lucide-react';
import DashboardCard from '@/components/ui/DashboardCard';
import AnalyticsChart from '@/components/ui/AnalyticsChart';

// Sample data
const sessionData = [
  { name: 'Mon', value: 240 },
  { name: 'Tue', value: 320 },
  { name: 'Wed', value: 280 },
  { name: 'Thu', value: 360 },
  { name: 'Fri', value: 400 },
  { name: 'Sat', value: 300 },
  { name: 'Sun', value: 250 },
];

const bounceRateData = [
  { name: 'Mon', value: 68 },
  { name: 'Tue', value: 52 },
  { name: 'Wed', value: 59 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 48 },
  { name: 'Sat', value: 56 },
  { name: 'Sun', value: 62 },
];

const WebsiteMetrics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Session Duration"
          subtitle="Average time on site"
          className="lg:col-span-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-semibold">2:34</div>
              <div className="text-sm text-muted-foreground">minutes</div>
            </div>
          </div>
          
          <div className="h-[120px]">
            <AnalyticsChart
              data={sessionData}
              dataKey="value"
              color="hsl(210, 100%, 50%)"
              height={120}
              showGrid={false}
              showXAxis={false}
            />
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Bounce Rate"
          subtitle="Percentage of single-page visits"
          className="lg:col-span-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
              <MousePointer className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-semibold">52%</div>
              <div className="text-sm text-muted-foreground">average</div>
            </div>
          </div>
          
          <div className="h-[120px]">
            <AnalyticsChart
              data={bounceRateData}
              dataKey="value"
              color="hsl(45, 100%, 50%)"
              height={120}
              showGrid={false}
              showXAxis={false}
            />
          </div>
        </DashboardCard>
        
        <DashboardCard
          title="Traffic Sources"
          subtitle="Where your visitors come from"
          className="lg:col-span-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-3xl font-semibold">4.2k</div>
              <div className="text-sm text-muted-foreground">monthly visitors</div>
            </div>
          </div>
          
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <div className="text-sm">Organic Search</div>
              <div className="flex items-center">
                <div className="text-sm font-medium">42%</div>
                <div className="w-16 h-2 ml-2 bg-muted rounded-full">
                  <div className="h-full w-[42%] bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm">Direct</div>
              <div className="flex items-center">
                <div className="text-sm font-medium">28%</div>
                <div className="w-16 h-2 ml-2 bg-muted rounded-full">
                  <div className="h-full w-[28%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm">Social Media</div>
              <div className="flex items-center">
                <div className="text-sm font-medium">18%</div>
                <div className="w-16 h-2 ml-2 bg-muted rounded-full">
                  <div className="h-full w-[18%] bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm">Referral</div>
              <div className="flex items-center">
                <div className="text-sm font-medium">12%</div>
                <div className="w-16 h-2 ml-2 bg-muted rounded-full">
                  <div className="h-full w-[12%] bg-amber-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default WebsiteMetrics;
