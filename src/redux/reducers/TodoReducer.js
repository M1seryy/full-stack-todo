import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const instance = `https://654d5291cbc3253557417ba3.mockapi.io/todo/`;

export const getTodo = createAsyncThunk("todo/fetchAll", async () => {
  const response = await axios(instance);
  return response.data;
});

export const addToodo = createAsyncThunk("todo/addTodo", async (body) => {
  await axios.post(instance, body);
  return body;
});

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(instance + id);
  return id;
});

const initialState = {
  todoes: null,
};

const TodoReducers = createSlice({
  name: "todoReducer",
  initialState,
  // reducers: (create) => ({
  //   deleteTodo: create.reducer((state, action) => {
  //     state.todoes = action.payload;
  //   }),
  // }),

  //async actions
  extraReducers: (builder) => {
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.todoes = action.payload;
    });
    builder.addCase(addToodo.fulfilled, (state, action) => {
      state.todoes.push(action.payload);
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const filteredTodo = state.todoes.filter(
        (item) => item.id !== action.payload
      );
      state.todoes = filteredTodo;
    });
  },
});

// export const { getTodo } = TodoReducers.actions;
export default TodoReducers.reducer;
