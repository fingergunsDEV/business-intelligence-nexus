
import React from 'react';
import { Star, ThumbsUp, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Review } from './types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div 
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
  );
};

export default ReviewCard;
