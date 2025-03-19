
import React from 'react';
import { cn } from '@/lib/utils';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle,
  isSidebarOpen 
}) => {
  return (
    <header className={cn(
      "sticky top-0 z-30 w-full px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300",
      "animate-slide-down"
    )}>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 w-[200px] md:w-[300px] bg-muted/50 border-0 rounded-full text-sm focus:ring-1 focus:ring-primary/50 focus:outline-none transition-all"
            />
          </div>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-muted/50 transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
