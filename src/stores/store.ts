import { create } from 'zustand';
import { toDoSlice } from '@/interfaces/stores/slices.interface';
import addToDoSlice from './slices/todoSlice';

export const useBoundStore = create<toDoSlice>()((...a) => ({
  ...addToDoSlice(...a),
}));

const useStore = (propertyName: keyof toDoSlice): any =>
  useBoundStore((state) => state[propertyName]);

export default useStore;
