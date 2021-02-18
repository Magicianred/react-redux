import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FETCH_BOOKS } from '../../actions/actions';

export function Books() {
  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state.books;
  });

  useEffect(() => {
    dispatch({
      type: FETCH_BOOKS
    });
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
              <p key={book.id}>{book.title}</p>
            ))
          )
      }
    </div>
  );
}
