import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title: string;
  amount: string;
  trend: number;
  data: any[];
  type: 'income' | 'expense' | 'balance';
}

export const StatCard = ({ title, amount, trend, data, type }: StatCardProps) => {
  const isPositive = trend > 0;
  
  return (
    <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 shadow-xl transition-all hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{amount}</h3>
        </div>
        <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="h-[40px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={type === 'expense' ? '#f43f5e' : '#10b981'} 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};