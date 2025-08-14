import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface PathState {
  departmentSlug: string | null;
  yearSlug: string | null;
  semesterSlug: string | null;
  setPath: (departmentSlug: string, yearSlug: string, semesterSlug: string) => void;
  resetPath: () => void;
}

export const usePathStore = create<PathState>()(
  persist(
    (set) => ({
      departmentSlug: null,
      yearSlug: null,
      semesterSlug: null,
      setPath: (departmentSlug, yearSlug, semesterSlug) => set({ departmentSlug, yearSlug, semesterSlug }),
      resetPath: () => set({ departmentSlug: null, yearSlug: null, semesterSlug: null }),
    }),
    {
      name: 'enstp-study-path', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
