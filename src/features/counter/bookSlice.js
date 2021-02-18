import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FETCH_BOOKS, FETCH_BOOKS_LOAD, FETCH_BOOKS_DONE, FETCH_BOOKS_ERROR } from '../../actions/actions';
import store from '../../app/store';

export const fetchAsyncMiddleware = storeAPI => next => action => {
  if(action.type == FETCH_BOOKS){
    store.dispatch({
      type: FETCH_BOOKS_LOAD,
      payload: null
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(async response => {
        let payload = await response.json();
        store.dispatch({
          type: FETCH_BOOKS_DONE,
          payload: payload
        });
      })
      .catch(error => {
        store.dispatch({
          type: FETCH_BOOKS_ERROR,
          error: error
        });
      });
  }
  return next(action);
}


// export const getAllBooksFromAPI = createAsyncThunk(
//   "books/getAll", 
//   async () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
// })

// export const bookSlice = createSlice({
//   name: 'book',
//   initialState: {
//     loading: false,
//     books: [],
//     total: 0,
//     error: null
//   },
//   reducers: { 
//     addBook: (status, action) => {
//       status.books.push({title: action.payload})
//     }
//    },
//   extraReducers: {
//     [getAllBooksFromAPI.pending]: (status) => {
//       status.loading = true;
//     },
//     [getAllBooksFromAPI.rejected]: (status, action) => {
//       status.loading = false;
//       status.error = action.payload;
//     },
//     [getAllBooksFromAPI.fulfilled]: (status, {payload}) => {
//       status.loading = false;
//       status.books = payload;
//     }
//   }
// });

// export const { addBook } = bookSlice.actions;
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

// export default bookSlice.reducer;