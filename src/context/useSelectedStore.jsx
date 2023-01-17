import { create } from "zustand";

export const useSelectedStore = create(set => ({
    selectedMembers: new Set(),
    setSelectedMembers: (selectedItem) => set(state => ({
        selectedMembers: state.selectedMembers.add(selectedItem)
    }))
}))