import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bookReducer from '../features/counter/bookSlice';

export default configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware: [...getDefaultMiddleware({thunk: true})]
});
