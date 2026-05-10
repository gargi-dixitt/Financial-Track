import { create } from 'zustand'

interface BoundStore {
  user: any
  setUser: (user: any) => void
  isSidebarOpen: boolean
  toggleSidebar: () => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const useBoundStore = create<BoundStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  activeTab: "dashboard",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
