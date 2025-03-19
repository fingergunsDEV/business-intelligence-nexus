
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { User, Building, Clock, Bell, Shield, Lock, CreditCard, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

const Settings: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-muted-foreground">
          <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary mr-3">
            Settings
          </span>
          Manage your account preferences
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <DashboardCard className="p-0">
            <div className="p-6 border-b border-border">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-2xl mb-4">
                  JD
                </div>
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-sm text-muted-foreground">john@localbusiness.com</p>
              </div>
            </div>
            
            <ul className="p-2">
              <li>
                <a href="#profile" className="flex items-center px-4 py-2.5 rounded-md bg-primary/5 text-primary">
                  <User className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Profile</span>
                </a>
              </li>
              <li>
                <a href="#business" className="flex items-center px-4 py-2.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                  <Building className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Business</span>
                </a>
              </li>
              <li>
                <a href="#hours" className="flex items-center px-4 py-2.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                  <Clock className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Hours</span>
                </a>
              </li>
              <li>
                <a href="#notifications" className="flex items-center px-4 py-2.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                  <Bell className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Notifications</span>
                </a>
              </li>
              <li>
                <a href="#security" className="flex items-center px-4 py-2.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                  <Shield className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Security</span>
                </a>
              </li>
              <li>
                <a href="#billing" className="flex items-center px-4 py-2.5 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
                  <CreditCard className="w-4 h-4 mr-3" />
                  <span className="text-sm font-medium">Billing</span>
                </a>
              </li>
            </ul>
          </DashboardCard>
        </div>
        
        <div className="lg:col-span-3">
          <DashboardCard
            title="Profile Settings"
            subtitle="Manage your personal information"
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value="John"
                    className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value="Doe"
                    className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value="john@localbusiness.com"
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value="(555) 123-4567"
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium">
                  Role
                </label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                >
                  <option>Owner</option>
                  <option>Manager</option>
                  <option>Employee</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>
            
            <div className="border-t border-border pt-6 flex justify-end">
              <button className="flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </DashboardCard>
          
          <DashboardCard
            title="Security Settings"
            subtitle="Manage your account security"
            className="space-y-6 mt-6"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <button className="text-xs text-primary hover:underline">
                    Change Password
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  value="••••••••••••"
                  disabled
                  className="w-full px-3 py-2 border border-border rounded-md bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </div>
                  </div>
                </div>
                
                <div className="w-12 h-6 rounded-full bg-muted flex items-center p-1 cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-muted-foreground"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Active Sessions
                </label>
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="p-4 flex items-center justify-between bg-muted/30">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">MacBook Pro</div>
                        <div className="text-xs text-muted-foreground">
                          San Francisco, CA • Current Session
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-xs text-muted-foreground hover:text-red-500 transition-colors">
                      Logout
                    </button>
                  </div>
                  
                  <div className="p-4 flex items-center justify-between border-t border-border bg-muted/30">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">iPhone 12</div>
                        <div className="text-xs text-muted-foreground">
                          San Francisco, CA • 2 days ago
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-xs text-muted-foreground hover:text-red-500 transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 flex justify-end">
              <button className="flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Settings;
