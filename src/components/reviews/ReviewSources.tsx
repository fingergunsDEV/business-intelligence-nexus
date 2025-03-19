
import React from 'react';
import { Star } from 'lucide-react';
import DashboardCard from '@/components/ui/DashboardCard';

interface SourceData {
  name: string;
  rating: number;
  reviewCount: number;
  icon: React.ReactNode;
}

interface ReviewSourcesProps {
  sources: SourceData[];
  sentimentData: {
    positive: number;
    neutral: number;
    negative: number;
    responseRate: number;
  };
}

const ReviewSources: React.FC<ReviewSourcesProps> = ({ sources, sentimentData }) => {
  return (
    <DashboardCard className="md:col-span-2 p-6">
      <div className="text-lg font-medium mb-4">Review Sources</div>
      <div className="grid grid-cols-3 gap-4">
        {sources.map((source, index) => (
          <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
              {source.icon}
            </div>
            <div className="text-xl font-bold">{source.rating}</div>
            <div className="flex mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs text-muted-foreground">{source.reviewCount} reviews</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <div className="text-lg font-medium mb-4">Sentiment Analysis</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 p-4">
            <div className="text-sm text-green-700 dark:text-green-400 font-medium mb-1">Positive</div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-400">{sentimentData.positive}%</div>
          </div>
          
          <div className="rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 p-4">
            <div className="text-sm text-amber-700 dark:text-amber-400 font-medium mb-1">Neutral</div>
            <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">{sentimentData.neutral}%</div>
          </div>
          
          <div className="rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4">
            <div className="text-sm text-red-700 dark:text-red-400 font-medium mb-1">Negative</div>
            <div className="text-2xl font-bold text-red-700 dark:text-red-400">{sentimentData.negative}%</div>
          </div>
          
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4">
            <div className="text-sm text-blue-700 dark:text-blue-400 font-medium mb-1">Response Rate</div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{sentimentData.responseRate}%</div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ReviewSources;
