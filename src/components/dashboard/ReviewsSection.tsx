
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { Star, ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const reviews = [
  {
    id: 1,
    name: 'Emma Thompson',
    avatar: 'ET',
    date: '2 days ago',
    rating: 5,
    content: 'Absolutely wonderful service! The staff was attentive and professional. I\'ll definitely be coming back and recommending to friends.',
    source: 'Google',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    avatar: 'MR',
    date: '1 week ago',
    rating: 4,
    content: 'Great experience overall. The only reason for 4 stars instead of 5 is the wait time was a bit longer than expected.',
    source: 'Yelp',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    date: '2 weeks ago',
    rating: 5,
    content: 'Top-notch service and amazing results. Worth every penny!',
    source: 'Google',
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <DashboardCard
      title="Recent Reviews"
      subtitle="Latest customer feedback"
      action={
        <div className="text-sm font-medium text-primary cursor-pointer hover:underline">
          View All
        </div>
      }
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                className="w-5 h-5 text-amber-400 fill-amber-400"
              />
            ))}
          </div>
          <span className="text-lg font-medium">4.8 / 5.0</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Based on 142 reviews
        </div>
      </div>
      
      <div className="space-y-5">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="p-4 rounded-lg bg-muted/30 border border-border transition-all duration-300 hover:border-primary/20 hover:bg-muted/50"
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {review.avatar}
                </div>
                <div className="ml-3">
                  <div className="font-medium">{review.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <span>{review.date}</span>
                    <span className="mx-2">•</span>
                    <span>{review.source}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star
                    key={num}
                    className={cn(
                      "w-4 h-4", 
                      num <= review.rating 
                        ? "text-amber-400 fill-amber-400" 
                        : "text-muted stroke-muted"
                    )}
                  />
                ))}
              </div>
            </div>
            
            <p className="mt-3 text-sm">{review.content}</p>
            
            <div className="mt-3 flex justify-between items-center">
              <button className="text-xs flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ThumbsUp className="w-3 h-3 mr-1" />
                <span>Helpful</span>
              </button>
              
              <button className="text-xs text-primary hover:underline transition-colors">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default ReviewsSection;
