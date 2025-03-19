
import React from 'react';
import OverviewSection from '@/components/dashboard/OverviewSection';
import ReviewsSection from '@/components/dashboard/ReviewsSection';
import AiAssistant from '@/components/dashboard/AiAssistant';
import AppointmentSection from '@/components/dashboard/AppointmentSection';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-muted-foreground">
          <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary mr-3">
            Insights
          </span>
          Here's what's happening with your business today
        </h2>
      </div>

      <OverviewSection />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReviewsSection />
        <AiAssistant />
      </div>
      
      <AppointmentSection />
    </div>
  );
};

export default Dashboard;
