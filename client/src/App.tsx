import { Routes, Route } from "react-router-dom";
// 1. This is the UI engine/wrapper provided by Shadcn
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// 2. This is the custom component YOU create to hold your links
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "./components/Navbar"; 
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <SidebarProvider>
      {/* The Actual Sidebar Component */}
      <AppSidebar />

      <div className="flex flex-1 flex-col w-full bg-background font-sans antialiased">
        {/* Top Navbar with the Sidebar Trigger (the hamburger menu) */}
        <header className="flex h-16 items-center border-b px-4 gap-4">
          <SidebarTrigger />
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center py-20">
                  <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
                  <p className="text-muted-foreground">This transaction doesn't exist.</p>
                </div>
              } />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;