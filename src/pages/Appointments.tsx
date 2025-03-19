
import React from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { Calendar, Clock, User, Video, MapPin, Plus, ArrowLeft, ArrowRight, MoreHorizontal, X, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const currentDate = new Date();
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const appointments = [
  {
    id: 1,
    client: 'David Miller',
    avatar: 'DM',
    time: '10:30 AM - 11:30 AM',
    date: new Date().toISOString(),
    type: 'Virtual Consultation',
    status: 'confirmed'
  },
  {
    id: 2,
    client: 'Jennifer Adams',
    avatar: 'JA',
    time: '2:00 PM - 3:00 PM',
    date: new Date().toISOString(),
    type: 'In-person Meeting',
    status: 'confirmed'
  },
  {
    id: 3,
    client: 'Robert Chen',
    avatar: 'RC',
    time: '9:00 AM - 10:00 AM',
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(),
    type: 'Virtual Consultation',
    status: 'pending'
  },
  {
    id: 4,
    client: 'Sophia Martinez',
    avatar: 'SM',
    time: '11:00 AM - 12:00 PM',
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    type: 'In-person Meeting',
    status: 'confirmed'
  },
  {
    id: 5,
    client: 'William Johnson',
    avatar: 'WJ',
    time: '3:30 PM - 4:30 PM',
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
    type: 'Virtual Consultation',
    status: 'confirmed'
  }
];

const Appointments: React.FC = () => {
  const calendars = [
    { id: 1, name: 'Business Appointments', color: 'bg-blue-500' },
    { id: 2, name: 'Personal', color: 'bg-purple-500' },
    { id: 3, name: 'Marketing Events', color: 'bg-green-500' },
  ];

  const upcomingAppointments = appointments.filter(a => 
    new Date(a.date).getDate() >= currentDate.getDate() &&
    new Date(a.date).getMonth() === currentDate.getMonth()
  );

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells for days of the week before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-14 p-1 text-muted-foreground"></div>);
    }
    
    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === currentDate.getDate();
      const hasAppointment = appointments.some(a => 
        new Date(a.date).getDate() === day && 
        new Date(a.date).getMonth() === currentDate.getMonth()
      );
      
      days.push(
        <div 
          key={day} 
          className={cn(
            "h-14 p-1 relative transition-all hover:bg-muted/70 cursor-pointer",
            isToday ? "bg-primary/5 font-medium" : ""
          )}
        >
          <div className={cn(
            "flex justify-center items-center w-8 h-8 rounded-full mx-auto",
            isToday ? "bg-primary text-white" : ""
          )}>
            {day}
          </div>
          
          {hasAppointment && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
              {appointments.filter(a => 
                new Date(a.date).getDate() === day && 
                new Date(a.date).getMonth() === currentDate.getMonth()
              ).length > 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    return days;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-muted-foreground">
          <span className="text-xs uppercase tracking-wide px-2.5 py-1 rounded-full bg-primary/10 text-primary mr-3">
            Appointments
          </span>
          Schedule and manage your business appointments
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <DashboardCard className="overflow-visible">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <h3 className="text-lg font-medium">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h3>
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Appointment
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {daysOfWeek.map((day) => (
                <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
              
              {renderCalendarDays()}
            </div>
          </DashboardCard>
        </div>
        
        <div className="lg:col-span-1">
          <DashboardCard className="space-y-5 h-full">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Calendars</h3>
              <button className="p-1 rounded-full hover:bg-muted transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-3">
              {calendars.map((calendar) => (
                <div key={calendar.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${calendar.color} mr-3`}></div>
                    <span className="text-sm">{calendar.name}</span>
                  </div>
                  <div className="w-4 h-4 rounded border border-muted-foreground/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 mt-4">
              <h3 className="font-medium mb-4">Upcoming</h3>
              
              <div className="space-y-4">
                {upcomingAppointments.slice(0, 3).map((appointment) => (
                  <div key={appointment.id} className="flex items-start space-x-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-1.5",
                      appointment.type.includes('Virtual') ? "bg-blue-500" : "bg-green-500"
                    )}></div>
                    <div>
                      <div className="text-sm font-medium">{appointment.client}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(appointment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {appointment.time}
                      </div>
                    </div>
                  </div>
                ))}
                
                {upcomingAppointments.length > 3 && (
                  <button className="text-xs text-primary hover:underline transition-colors">
                    + {upcomingAppointments.length - 3} more
                  </button>
                )}
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
      
      <DashboardCard
        title="Today's Appointments"
        subtitle={`${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`}
      >
        <div className="space-y-4">
          {appointments
            .filter(a => new Date(a.date).getDate() === currentDate.getDate())
            .map((appointment) => (
              <div 
                key={appointment.id}
                className={cn(
                  "flex items-center p-4 rounded-lg transition-all duration-300",
                  appointment.status === 'confirmed'
                    ? "bg-primary/5 border border-primary/20"
                    : "bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30",
                  "hover:shadow-soft card-hover"
                )}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {appointment.avatar}
                </div>
                
                <div className="ml-4 flex-1">
                  <div className="font-medium text-foreground">
                    {appointment.client}
                    {appointment.status === 'pending' && (
                      <span className="ml-2 text-xs bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{appointment.time}</span>
                    <span className="mx-1">•</span>
                    {appointment.type.includes('Virtual') ? (
                      <>
                        <Video className="w-3 h-3 mr-1" />
                        <span>{appointment.type}</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{appointment.type}</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {appointment.status === 'pending' ? (
                    <>
                      <button className="p-2 rounded-full text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                        <Check className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-full text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-muted transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
            
            {appointments.filter(a => new Date(a.date).getDate() === currentDate.getDate()).length === 0 && (
              <div className="text-center py-8">
                <div className="inline-flex rounded-full bg-muted/50 p-3 mb-4">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Appointments Today</h3>
                <p className="text-sm text-muted-foreground">
                  You have no scheduled appointments for today.
                </p>
                <button className="mt-4 px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors inline-flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </button>
              </div>
            )}
        </div>
      </DashboardCard>
    </div>
  );
};

export default Appointments;
