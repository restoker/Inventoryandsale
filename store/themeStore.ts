// store.ts
import { create } from 'zustand'

// Define types for state & actions
interface ThemeState {
    theme: 'light' | 'dark'
    toggleTheme: (newTheme: 'light' | 'dark') => void
}

// Create store using the curried form of `create`
export const useThemeStore = create<ThemeState>()((set) => ({
    theme: 'light',
    toggleTheme: (newTheme: 'light' | 'dark') => set({ theme: newTheme }),
}));