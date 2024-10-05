import { create } from 'zustand';
import { toDoSlice } from '../interfaces/stores/slices.interface';
import toDoStates from '@/stores/initialState/todo.states';


const useStore = create<toDoSlice>((set) => ({
  ...toDoStates,
  addToDoItems: (value, index) => set((state) => {
    const newToDoItems = [...state.toDoItems];
    newToDoItems.splice(index, 0, value);
    return { toDoItems: newToDoItems };
  }),
  editToDoItems: (value, index) => set((state) => {
    const newToDoItems = [...state.toDoItems];
    newToDoItems[index] = value;
    return { toDoItems: newToDoItems };
  }),
}));

export default useStore;
