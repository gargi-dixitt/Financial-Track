import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ArrowUpRight,
  History
} from "lucide-react";

// Mock data to simulate MongoDB records
const RECENT_TRANSACTIONS = [
  { id: "1", title: "Monthly Rent", amount: -1200, category: "Housing", date: "May 10, 2026" },
  { id: "2", title: "Freelance Project", amount: 2500, category: "Income", date: "May 08, 2026" },
  { id: "3", title: "Grocery Store", amount: -85.50, category: "Food", date: "May 07, 2026" },
  { id: "4", title: "Stock Dividend", amount: 150.25, category: "Investment", date: "May 05, 2026" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your money.</p>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </div>

      {/* Stats Overview Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Total Balance" 
          value="$14,250.00" 
          icon={<DollarSign className="h-4 w-4 text-emerald-600" />}
          description="Global balance across all accounts"
        />
        <StatCard 
          title="Monthly Income" 
          value="+$5,200.00" 
          icon={<TrendingUp className="h-4 w-4 text-emerald-500" />}
          description="+12% from last month"
        />
        <StatCard 
          title="Monthly Expenses" 
          value="-$2,840.00" 
          icon={<TrendingDown className="h-4 w-4 text-rose-500" />}
          description="-4% from last month"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-7">
        {/* Recent Transactions Table */}
        <Card className="md:col-span-4 border-muted/40 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>You made 12 transactions this week.</CardDescription>
              </div>
              <History className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {RECENT_TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${tx.amount > 0 ? 'bg-emerald-100' : 'bg-rose-100'}`}>
                      {tx.amount > 0 ? 
                        <ArrowUpRight className="h-4 w-4 text-emerald-600" /> : 
                        <TrendingDown className="h-4 w-4 text-rose-600" />
                      }
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">{tx.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{tx.category} • {tx.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {tx.amount > 0 ? "+" : ""}{tx.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6">View All Transactions</Button>
          </CardContent>
        </Card>

        {/* Placeholder for future Chart component */}
        <Card className="md:col-span-3 border-muted/40 shadow-sm">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
            <CardDescription>Visual breakdown of your expenses.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg m-4">
            <p className="text-muted-foreground text-sm">Chart visualization coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Reusable StatCard Component
function StatCard({ title, value, icon, description }: any) {
  return (
    <Card className="border-muted/40 shadow-sm overflow-hidden relative">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}