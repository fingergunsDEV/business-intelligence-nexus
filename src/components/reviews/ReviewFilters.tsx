
import React from 'react';
import { Search, Filter, MessageSquare } from 'lucide-react';

const ReviewFilters: React.FC = () => {
  return (
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
  );
};

export default ReviewFilters;
