import { FETCH_BOOKS_DONE, FETCH_BOOKS_LOAD, FETCH_BOOKS_ERROR } from "../actions/actions";

export default function rootReducer(state = {}, action) {
    return {
        books: booksReducer(state.books, action)
    }
}

const initialState = {
    loading: false,
    books: [],
    total: 0,
    error: null
};
const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BOOKS_LOAD:
            return {
                ...state,
                loading: true
            };
        case FETCH_BOOKS_DONE:
        case FETCH_BOOKS_ERROR:
            return {
                ...state,
                loading: false,
                books: [...action.payload],
                error: { ...action.error }
            };
    }
    return state;
}
