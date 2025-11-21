import { create } from "zustand";
type SearchStoreProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const useSearchStore = create<SearchStoreProps>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));
