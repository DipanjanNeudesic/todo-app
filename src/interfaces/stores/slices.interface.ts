interface toDoSlice {
  toDoItems: string[];
  addToDoItems : (value: string, index: number) => void;
  editToDoItems : (value: string, index: number) => void;
}

export type { toDoSlice };
