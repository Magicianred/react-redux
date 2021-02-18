import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import { fetchAsyncMiddleware } from '../features/counter/bookSlice';
import rootReducer from '../reducers/reducer'

// export default configureStore({
//   reducer: rootReducer,
//   middleware: applyMiddleware(fetchAsyncMiddleware)
// });
const middlewareEnhancer = applyMiddleware(fetchAsyncMiddleware); 
const store = createStore(rootReducer, middlewareEnhancer);
export default store;
