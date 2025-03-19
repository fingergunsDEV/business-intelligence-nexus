
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { Calendar, Clock, User, Video, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const appointments = [
  {
    id: 1,
    client: 'David Miller',
    avatar: 'DM',
    time: '10:30 AM - 11:30 AM',
    date: 'Today',
    type: 'Virtual Consultation',
    status: 'upcoming'
  },
  {
    id: 2,
    client: 'Jennifer Adams',
    avatar: 'JA',
    time: '2:00 PM - 3:00 PM',
    date: 'Today',
    type: 'In-person Meeting',
    status: 'upcoming'
  },
  {
    id: 3,
    client: 'Robert Chen',
    avatar: 'RC',
    time: '9:00 AM - 10:00 AM',
    date: 'Tomorrow',
    type: 'Virtual Consultation',
    status: 'scheduled'
  }
];

const AppointmentSection: React.FC = () => {
  return (
    <DashboardCard
      title="Upcoming Appointments"
      subtitle="Your schedule for today and tomorrow"
      action={
        <div className="text-sm font-medium text-primary cursor-pointer hover:underline">
          View Calendar
        </div>
      }
    >
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className={cn(
              "flex items-center p-4 rounded-lg transition-all duration-300",
              appointment.status === 'upcoming' 
                ? "bg-primary/5 border border-primary/20" 
                : "bg-muted/30 border border-border",
              "hover:shadow-soft card-hover"
            )}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
              {appointment.avatar}
            </div>
            
            <div className="ml-4 flex-1">
              <div className="font-medium text-foreground">{appointment.client}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{appointment.date}</span>
                <span className="mx-1">•</span>
                <Clock className="w-3 h-3 mr-1" />
                <span>{appointment.time}</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className={cn(
                "flex items-center px-3 py-1 rounded-full text-xs mr-3",
                appointment.type.includes('Virtual') 
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                  : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              )}>
                {appointment.type.includes('Virtual') 
                  ? <Video className="w-3 h-3 mr-1" /> 
                  : <MapPin className="w-3 h-3 mr-1" />
                }
                {appointment.type}
              </div>
              
              <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 rounded-lg border border-dashed border-primary/50 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
        + Schedule New Appointment
      </button>
    </DashboardCard>
  );
};

export default AppointmentSection;
