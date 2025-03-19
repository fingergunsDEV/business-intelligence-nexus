
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import ReviewCard from '@/components/reviews/ReviewCard';
import ReviewStats from '@/components/reviews/ReviewStats';
import ReviewSources from '@/components/reviews/ReviewSources';
import ReviewFilters from '@/components/reviews/ReviewFilters';
import { reviews } from '@/components/reviews/types';

const Reviews: React.FC = () => {
  // Rating distribution data
  const ratingDistribution = {
    '5': 85,
    '4': 10,
    '3': 3,
    '2': 2,
    '1': 0
  };

  // Source data with icons
  const sources = [
    {
      name: 'Google',
      rating: 4.9,
      reviewCount: 85,
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.222 9.542H12V13.9h5.899c-.55 2.268-2.19 3.7-4.935 3.7-3.035 0-5.488-2.453-5.488-5.488s2.453-5.488 5.488-5.488c1.325 0 2.52.47 3.47 1.235l3.186-3.183A9.98 9.98 0 0012 2.556a10.12 10.12 0 00-10.1 10.1A10.12 10.12 0 0012 22.756c5.032 0 9.67-3.7 9.67-10.118 0-1.063-.136-1.985-.272-2.804l-6.982-.028z" />
        </svg>
      )
    },
    {
      name: 'Yelp',
      rating: 4.7,
      reviewCount: 42,
      icon: (
        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.16.84-.31 1.41-.57 1.57-.5.32-1.24.03-1.93-.61-.76-.71-1.45-1.24-1.76-1.55-.82-.81-1.39-1.86-.15-3.19.61-.66 3.5-3.28 3.5-3.28s.3-.38-.09-.38c-.08 0-.31.13-.52.34-.79.81-2.78 2.48-3.32 2.91-.73.58-1.34.29-1.57.07-.7-.69-1.08-1.11-1.08-1.11s-.44-.58-1.3-.35c-.75.2-1.46.41-2.28.08-.79-.32-1-1.3-.23-1.95.28-.23.58-.4.58-.4s3.2-2.43 6.12-4.7c.57-.44 1.81-1.11 2.67-.76.52.21.56.71.13 1.35-.73 1.11-1.37 2.39-1.37 2.39s3.36-2.58 4.11-2.15c.53.3.27.96.19 1.53z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      rating: 4.5,
      reviewCount: 15,
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      )
    }
  ];

  // Sentiment data
  const sentimentData = {
    positive: 85,
    neutral: 12,
    negative: 3,
    responseRate: 92
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-muted-foreground">
          <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary mr-3">
            Reviews
          </span>
          Manage and respond to customer feedback
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReviewStats 
          averageRating={4.8} 
          totalReviews={142} 
          ratingDistribution={ratingDistribution} 
        />
        
        <ReviewSources 
          sources={sources}
          sentimentData={sentimentData} 
        />
      </div>
      
      <DashboardCard title="All Reviews">
        <ReviewFilters />
        
        <div className="space-y-5">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default Reviews;
