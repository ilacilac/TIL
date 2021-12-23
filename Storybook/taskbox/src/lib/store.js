import { configureStore, createSlice } from '@reduxjs/toolkit';

const AppStateSlice = createSlice({
  name: 'appState',
  initialState: '',
  reducers: {
    updateAppState: (state, action) => {
      return {
        ...state,
        isError: action.payload,
      };
    },
  },
});

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const TasksSlice = createSlice({
  name: 'tasks',
  initialState: defaultTasks,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.findIndex((task) => task.id === id);
      if (task >= 0) {
        state[task].state = newTaskState;
      }
    },
  },
});

export const { updateTaskState } = TasksSlice.actions;
export const { updateAppState } = AppStateSlice.actions;

const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    isError: AppStateSlice.reducer,
  },
});

export default store;
