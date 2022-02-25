import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  id: 0,
  item: 'go run',
  completed: false,
  priority: 3
 },
 {
  id: 1,
  item: 'make more coffee',
  completed: false,
  priority: 2
 },
 {
 id: 2,
  item: 'shower',
  completed: false,
  priority: 4
 },
]

const todoSlice = createSlice({
 name: 'todos',
 initialState,
 reducers: {
  addToDo(state, action) {
   state.push(action.payload);
  },
  deleteToDo(state, action) {
   return state.filter(item => item.id !== action.payload.id)
  }
 }
})

export const { addToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;