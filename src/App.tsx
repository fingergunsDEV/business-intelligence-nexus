
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reviews from "./pages/Reviews";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { useIsMobile } from "./hooks/use-mobile";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex h-screen overflow-hidden bg-background">
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 
              ${isMobile ? "" : (isSidebarOpen ? "ml-64" : "ml-0")}`}>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <>
                      <Header title="Business Dashboard" subtitle="Overview of key metrics" isSidebarOpen={isSidebarOpen} />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Dashboard />
                      </main>
                    </>
                  } 
                />
                <Route 
                  path="/analytics" 
                  element={
                    <>
                      <Header title="Analytics" subtitle="Business intelligence metrics" isSidebarOpen={isSidebarOpen} />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Analytics />
                      </main>
                    </>
                  } 
                />
                <Route 
                  path="/reviews" 
                  element={
                    <>
                      <Header title="Reviews" subtitle="Manage customer feedback" isSidebarOpen={isSidebarOpen} />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Reviews />
                      </main>
                    </>
                  } 
                />
                <Route 
                  path="/appointments" 
                  element={
                    <>
                      <Header title="Appointments" subtitle="Schedule and manage bookings" isSidebarOpen={isSidebarOpen} />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Appointments />
                      </main>
                    </>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={
                    <>
                      <Header title="Settings" subtitle="Manage your account" isSidebarOpen={isSidebarOpen} />
                      <main className="flex-1 overflow-y-auto p-6">
                        <Settings />
                      </main>
                    </>
                  } 
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
