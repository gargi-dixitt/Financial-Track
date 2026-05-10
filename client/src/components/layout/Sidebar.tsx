import { useBoundStore } from "@/store/useBoundStore";
import { LayoutDashboard, Receipt, Wallet, PieChart, Settings, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Receipt, label: "Transactions" },
  { icon: Wallet, label: "Budgets" },
  { icon: PieChart, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar, activeTab, setActiveTab } = useBoundStore();

  return (
    <aside className={cn(
      "h-screen bg-card border-r transition-all duration-300 flex flex-col",
      isSidebarOpen ? "w-64" : "w-20"
    )}>
      <div className="p-6 flex items-center justify-between">
        {isSidebarOpen && <span className="font-bold text-xl tracking-tight">Fin<span className="text-brand">Track</span></span>}
        <button onClick={toggleSidebar} className="p-2 hover:bg-accent rounded-lg">
          <ChevronLeft className={cn("transition-transform", !isSidebarOpen && "rotate-180")} />
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={cn(
              "w-full flex items-center p-3 rounded-xl transition-colors",
              activeTab === item.label ? "bg-brand/10 text-brand" : "hover:bg-accent"
            )}
          >
            <item.icon size={22} />
            {isSidebarOpen && <span className="ml-4 font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};