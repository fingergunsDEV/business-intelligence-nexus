
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, BarChartBig, MessageSquare, Calendar, Settings, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Reset collapse state when sidebar is closed on mobile
  useEffect(() => {
    if (!isSidebarOpen && isMobile) {
      setIsCollapsed(false);
    }
  }, [isSidebarOpen, isMobile]);
  
  const navItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/',
    },
    {
      name: 'Analytics',
      icon: <BarChartBig className="w-5 h-5" />,
      path: '/analytics',
    },
    {
      name: 'Reviews',
      icon: <MessageSquare className="w-5 h-5" />,
      path: '/reviews',
    },
    {
      name: 'Appointments',
      icon: <Calendar className="w-5 h-5" />,
      path: '/appointments',
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/settings',
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeSidebarOnMobile = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const sidebarWidth = isCollapsed ? 'w-16' : 'w-64';

  return (
    <>
      {/* Mobile backdrop */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Mobile toggle button */}
      <button
        className="lg:hidden fixed left-4 top-4 z-50 p-2 rounded-md bg-background border border-border"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out",
          sidebarWidth,
          isMobile ? (isSidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0",
        )}
      >
        <div className="flex flex-col h-full relative">
          {/* Collapse toggle button (desktop only) */}
          {!isMobile && (
            <button
              onClick={toggleCollapse}
              className="absolute -right-3 top-20 bg-primary hover:bg-primary/90 text-white rounded-full p-1 shadow-md z-10"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          )}
          
          {/* Logo */}
          <div className={cn("px-6 py-8", isCollapsed && "px-4")}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-white font-semibold">BI</span>
              </div>
              {!isCollapsed && <span className="text-xl font-semibold text-sidebar-foreground">Nexus</span>}
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-3 py-4">
            <TooltipProvider delayDuration={0}>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {isCollapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to={item.path}
                            className={cn(
                              "flex items-center justify-center p-3 rounded-lg text-sm font-medium transition-all duration-200",
                              location.pathname === item.path
                                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                            )}
                            onClick={closeSidebarOnMobile}
                          >
                            <span className="opacity-80">{item.icon}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.name}</TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                          location.pathname === item.path
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                        )}
                        onClick={closeSidebarOnMobile}
                      >
                        <span className="mr-3 opacity-80">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </TooltipProvider>
          </nav>
          
          {/* User profile */}
          <div className="p-4 mt-auto border-t border-sidebar-border">
            <div className="flex items-center">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary text-sm font-semibold">JD</span>
              </div>
              {!isCollapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
                  <p className="text-xs text-sidebar-foreground/70">Local Business</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
