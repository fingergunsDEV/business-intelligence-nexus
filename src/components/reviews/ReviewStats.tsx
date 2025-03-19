
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import DashboardCard from '@/components/ui/DashboardCard';

interface ReviewStatsProps {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: {
    '5': number;
    '4': number;
    '3': number;
    '2': number;
    '1': number;
  };
}

const ReviewStats: React.FC<ReviewStatsProps> = ({ 
  averageRating, 
  totalReviews, 
  ratingDistribution 
}) => {
  return (
    <DashboardCard className="flex flex-col items-center justify-center p-6">
      <div className="text-5xl font-bold mb-2">{averageRating}</div>
      <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            className={cn(
              "w-5 h-5", 
              star <= Math.floor(averageRating) || (star === Math.ceil(averageRating) && averageRating % 1 >= 0.5)
                ? "text-amber-400 fill-amber-400" 
                : "text-muted"
            )} 
          />
        ))}
      </div>
      <div className="text-sm text-muted-foreground mb-4">
        Based on {totalReviews} reviews
      </div>
      <div className="w-full space-y-2">
        <div className="flex items-center">
          <div className="text-xs font-medium w-10">5 ★</div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ratingDistribution['5']}%` }}></div>
          </div>
          <div className="text-xs font-medium w-10 text-right">{ratingDistribution['5']}%</div>
        </div>
        <div className="flex items-center">
          <div className="text-xs font-medium w-10">4 ★</div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ratingDistribution['4']}%` }}></div>
          </div>
          <div className="text-xs font-medium w-10 text-right">{ratingDistribution['4']}%</div>
        </div>
        <div className="flex items-center">
          <div className="text-xs font-medium w-10">3 ★</div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ratingDistribution['3']}%` }}></div>
          </div>
          <div className="text-xs font-medium w-10 text-right">{ratingDistribution['3']}%</div>
        </div>
        <div className="flex items-center">
          <div className="text-xs font-medium w-10">2 ★</div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ratingDistribution['2']}%` }}></div>
          </div>
          <div className="text-xs font-medium w-10 text-right">{ratingDistribution['2']}%</div>
        </div>
        <div className="flex items-center">
          <div className="text-xs font-medium w-10">1 ★</div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${ratingDistribution['1']}%` }}></div>
          </div>
          <div className="text-xs font-medium w-10 text-right">{ratingDistribution['1']}%</div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ReviewStats;
