import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    (set) => ({
      isDark: true,
      toggleTheme: () =>
        set((state) => {
          const next = !state.isDark;
          if (next) {
            document.documentElement.classList.remove('light');
          } else {
            document.documentElement.classList.add('light');
          }
          return { isDark: next };
        }),
      initTheme: (isDark) => {
        if (!isDark) {
          document.documentElement.classList.add('light');
        }
      },
    }),
    { name: 'portfolio-theme' }
  )
);
