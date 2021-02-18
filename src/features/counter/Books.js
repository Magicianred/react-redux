import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, getAllBooksFromAPI } from "./bookSlice";
import styles from './Books.module.css';
import { useEffect } from 'react';

export function Books() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.book)

  useEffect(() => {
    dispatch(getAllBooksFromAPI());
  }, [dispatch]);


  return (
    <div>
      <h1>Books</h1>
      {
        state.loading ? (
            <p>loading...</p>
          ) :
          (
            state.books.map(book => (
              <p>{book.title}</p>
            ))
          )
      }
    </div>
  );
}
