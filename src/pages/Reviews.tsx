
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { Star, MessageSquare, Filter, Search, ThumbsUp, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data
const reviews = [
  {
    id: 1,
    name: 'Emma Thompson',
    avatar: 'ET',
    date: '2 days ago',
    rating: 5,
    content: 'Absolutely wonderful service! The staff was attentive and professional. I\'ll definitely be coming back and recommending to friends.',
    source: 'Google',
    responded: true,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    avatar: 'MR',
    date: '1 week ago',
    rating: 4,
    content: 'Great experience overall. The only reason for 4 stars instead of 5 is the wait time was a bit longer than expected.',
    source: 'Yelp',
    responded: false,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    date: '2 weeks ago',
    rating: 5,
    content: 'Top-notch service and amazing results. Worth every penny!',
    source: 'Google',
    responded: true,
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: 'JW',
    date: '3 weeks ago',
    rating: 3,
    content: 'Service was okay, but I expected more for the price. The staff was friendly but the results were only satisfactory.',
    source: 'Facebook',
    responded: false,
  },
  {
    id: 5,
    name: 'Lisa Chen',
    avatar: 'LC',
    date: '1 month ago',
    rating: 5,
    content: 'Best in town! I've tried several competitors and nobody comes close to the quality and service provided here.',
    source: 'Google',
    responded: true,
  },
  {
    id: 6,
    name: 'David Brown',
    avatar: 'DB',
    date: '1 month ago',
    rating: 2,
    content: 'Disappointed with the service. The staff seemed distracted and the quality was below what I expected based on the reviews.',
    source: 'Yelp',
    responded: false,
  },
];

const Reviews: React.FC = () => {
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
        <DashboardCard className="flex flex-col items-center justify-center p-6">
          <div className="text-5xl font-bold mb-2">4.8</div>
          <div className="flex mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={cn(
                  "w-5 h-5", 
                  star <= 4 || (star === 5 && 4.8 >= 4.5)
                    ? "text-amber-400 fill-amber-400" 
                    : "text-muted"
                )} 
              />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            Based on 142 reviews
          </div>
          <div className="w-full space-y-2">
            <div className="flex items-center">
              <div className="text-xs font-medium w-10">5 ★</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="text-xs font-medium w-10 text-right">85%</div>
            </div>
            <div className="flex items-center">
              <div className="text-xs font-medium w-10">4 ★</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <div className="text-xs font-medium w-10 text-right">10%</div>
            </div>
            <div className="flex items-center">
              <div className="text-xs font-medium w-10">3 ★</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '3%' }}></div>
              </div>
              <div className="text-xs font-medium w-10 text-right">3%</div>
            </div>
            <div className="flex items-center">
              <div className="text-xs font-medium w-10">2 ★</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '2%' }}></div>
              </div>
              <div className="text-xs font-medium w-10 text-right">2%</div>
            </div>
            <div className="flex items-center">
              <div className="text-xs font-medium w-10">1 ★</div>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '0%' }}></div>
              </div>
              <div className="text-xs font-medium w-10 text-right">0%</div>
            </div>
          </div>
        </DashboardCard>
        
        <DashboardCard className="md:col-span-2 p-6">
          <div className="text-lg font-medium mb-4">Review Sources</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-muted/50 border border-border flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.222 9.542H12V13.9h5.899c-.55 2.268-2.19 3.7-4.935 3.7-3.035 0-5.488-2.453-5.488-5.488s2.453-5.488 5.488-5.488c1.325 0 2.52.47 3.47 1.235l3.186-3.183A9.98 9.98 0 0012 2.556a10.12 10.12 0 00-10.1 10.1A10.12 10.12 0 0012 22.756c5.032 0 9.67-3.7 9.67-10.118 0-1.063-.136-1.985-.272-2.804l-6.982-.028z" />
                </svg>
              </div>
              <div className="text-xl font-bold">4.9</div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">85 reviews</div>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50 border border-border flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.16.84-.31 1.41-.57 1.57-.5.32-1.24.03-1.93-.61-.76-.71-1.45-1.24-1.76-1.55-.82-.81-1.39-1.86-.15-3.19.61-.66 3.5-3.28 3.5-3.28s.3-.38-.09-.38c-.08 0-.31.13-.52.34-.79.81-2.78 2.48-3.32 2.91-.73.58-1.34.29-1.57.07-.7-.69-1.08-1.11-1.08-1.11s-.44-.58-1.3-.35c-.75.2-1.46.41-2.28.08-.79-.32-1-1.3-.23-1.95.28-.23.58-.4.58-.4s3.2-2.43 6.12-4.7c.57-.44 1.81-1.11 2.67-.76.52.21.56.71.13 1.35-.73 1.11-1.37 2.39-1.37 2.39s3.36-2.58 4.11-2.15c.53.3.27.96.19 1.53z" />
                </svg>
              </div>
              <div className="text-xl font-bold">4.7</div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">42 reviews</div>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/50 border border-border flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </div>
              <div className="text-xl font-bold">4.5</div>
              <div className="flex mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">15 reviews</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="text-lg font-medium mb-4">Sentiment Analysis</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="rounded-lg bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 p-4">
                <div className="text-sm text-green-700 dark:text-green-400 font-medium mb-1">Positive</div>
                <div className="text-2xl font-bold text-green-700 dark:text-green-400">85%</div>
              </div>
              
              <div className="rounded-lg bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 p-4">
                <div className="text-sm text-amber-700 dark:text-amber-400 font-medium mb-1">Neutral</div>
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">12%</div>
              </div>
              
              <div className="rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-4">
                <div className="text-sm text-red-700 dark:text-red-400 font-medium mb-1">Negative</div>
                <div className="text-2xl font-bold text-red-700 dark:text-red-400">3%</div>
              </div>
              
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4">
                <div className="text-sm text-blue-700 dark:text-blue-400 font-medium mb-1">Response Rate</div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">92%</div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
      
      <DashboardCard title="All Reviews">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reviews..."
              className="w-full pl-9 pr-4 py-2 rounded-md bg-muted/50 border-0 text-sm focus:ring-1 focus:ring-primary/50 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-muted/50 text-sm border border-border hover:bg-muted transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>Request Reviews</span>
            </button>
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
                
                <div className="flex items-center">
                  <div className="flex mr-2">
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
                  
                  <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <p className="mt-3 text-sm">{review.content}</p>
              
              <div className="mt-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <button className="text-xs flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ThumbsUp className="w-3 h-3 mr-1" />
                    <span>Helpful</span>
                  </button>
                  
                  {review.responded ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Responded
                    </span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      Needs Response
                    </span>
                  )}
                </div>
                
                <button className={cn(
                  "text-xs px-3 py-1 rounded-md transition-colors",
                  review.responded
                    ? "text-primary hover:bg-primary/5 border border-primary/20"
                    : "bg-primary text-white hover:bg-primary/90"
                )}>
                  {review.responded ? "View Response" : "Respond"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default Reviews;
