
import React from 'react';
import WebsiteMetrics from '@/components/dashboard/WebsiteMetrics';
import DashboardCard from '@/components/ui/DashboardCard';
import AnalyticsChart from '@/components/ui/AnalyticsChart';
import { ArrowUp, ArrowDown, Phone, Globe, MapPin, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data
const conversionData = [
  { name: 'Jan', value: 2.1 },
  { name: 'Feb', value: 2.5 },
  { name: 'Mar', value: 3.2 },
  { name: 'Apr', value: 2.8 },
  { name: 'May', value: 3.5 },
  { name: 'Jun', value: 4.1 },
  { name: 'Jul', value: 3.8 },
];

const sourceData = [
  { name: 'Website', value: 45, icon: <Globe className="w-4 h-4" />, change: 12.3, trend: 'up' },
  { name: 'Phone Calls', value: 32, icon: <Phone className="w-4 h-4" />, change: 5.7, trend: 'up' },
  { name: 'Local Visits', value: 18, icon: <MapPin className="w-4 h-4" />, change: -2.8, trend: 'down' },
  { name: 'Referrals', value: 5, icon: <Share2 className="w-4 h-4" />, change: 1.5, trend: 'up' },
];

const callData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 18 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 26 },
  { name: 'Sat', value: 8 },
  { name: 'Sun', value: 4 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-muted-foreground">
          <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary mr-3">
            Analytics
          </span>
          Detailed insights into your business performance
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard
          title="Conversion Rate"
          subtitle="Website visitors to leads ratio"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-3xl font-semibold">3.8%</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUp className="w-3 h-3 mr-1" />
              <span>0.7% vs previous period</span>
            </div>
          </div>
          
          <AnalyticsChart
            data={conversionData}
            dataKey="value"
            color="hsl(var(--primary))"
            height={200}
          />
        </DashboardCard>
        
        <DashboardCard
          title="Lead Sources"
          subtitle="Where your leads come from"
        >
          <div className="space-y-6">
            {sourceData.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                    {source.icon}
                  </div>
                  <div>
                    <div className="font-medium">{source.name}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className={cn(
                        "flex items-center",
                        source.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      )}>
                        {source.trend === 'up' ? (
                          <ArrowUp className="w-3 h-3 mr-1" />
                        ) : (
                          <ArrowDown className="w-3 h-3 mr-1" />
                        )}
                        {Math.abs(source.change)}%
                      </span>
                      <span className="ml-1">vs last month</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="font-semibold mr-3">{source.value}%</div>
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${source.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
      
      <WebsiteMetrics />
      
      <DashboardCard
        title="Call Analytics"
        subtitle="Phone call volume by day"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsChart
              data={callData}
              dataKey="value"
              color="hsl(210, 100%, 50%)"
              height={250}
              showGrid={true}
              showXAxis={true}
              showYAxis={true}
            />
          </div>
          
          <div className="lg:col-span-1 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground">Total Calls</div>
                <div className="text-3xl font-semibold">105</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  <span>12% vs last week</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Average Duration</div>
                <div className="text-3xl font-semibold">4:28</div>
                <div className="flex items-center text-xs text-green-500 mt-1">
                  <ArrowUp className="w-3 h-3 mr-1" />
                  <span>0:42 vs last week</span>
                </div>
              </div>
              
              <div>
                <div className="text-sm text-muted-foreground">Peak Hours</div>
                <div className="text-3xl font-semibold">1-3 PM</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Mon-Fri
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

export default Analytics;
