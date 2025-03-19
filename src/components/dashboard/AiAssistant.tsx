
import React, { useState } from 'react';
import DashboardCard from '@/components/ui/DashboardCard';
import { cn } from '@/lib/utils';
import { Send, Bot, User, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  isBot: boolean;
}

const sampleResponses = [
  "Based on the recent analytics, your website traffic has increased by 15% compared to last month. Most of this growth comes from mobile users. I recommend optimizing your mobile checkout experience to improve conversions.",
  "I've analyzed your customer reviews from the past 30 days. The sentiment is largely positive with a score of 4.6/5. Common praise includes staff friendliness and product quality. Areas for improvement include wait times and parking availability.",
  "Your business hours might not be optimal. Data shows that you have a significant number of potential customers searching for your services between 7-9PM on weekdays, but you close at 6PM. Consider extending hours on Tuesdays and Thursdays for a trial period.",
  "Your social media engagement is strongest on Instagram with 3.2x more interactions than Facebook. Consider shifting more of your marketing efforts to Instagram, particularly with video content which has 2.7x higher engagement than image posts."
];

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI business assistant. How can I help you today?",
      isBot: true
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      isBot: false
    };
    
    setMessages([...messages, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      
      const botMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        isBot: true
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <DashboardCard
      title="AI Business Assistant"
      subtitle="Powered by advanced AI"
      className="h-[500px] flex flex-col"
      noPadding
    >
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3 max-w-[85%]",
                message.isBot ? "pr-4" : "ml-auto flex-row-reverse pl-4"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.isBot ? "bg-primary text-white" : "bg-muted text-foreground"
                )}
              >
                {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>
              
              <div
                className={cn(
                  "rounded-xl p-3 text-sm",
                  message.isBot 
                    ? "bg-muted/50 border border-border" 
                    : "bg-primary text-primary-foreground"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              
              <div className="bg-muted/50 border border-border rounded-xl p-3 flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span className="text-sm">Analyzing your business data...</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="relative flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about your business analytics..."
            className="w-full p-3 pr-10 bg-muted/50 border-muted rounded-lg resize-none h-[56px] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm"
            rows={1}
          />
          <button
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className={cn(
              "absolute right-3 p-1.5 rounded-full transition-colors",
              input.trim() && !isLoading
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            )}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Your AI assistant uses your business data to provide personalized insights and recommendations.
        </p>
      </div>
    </DashboardCard>
  );
};

export default AiAssistant;
