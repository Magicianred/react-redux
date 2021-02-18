export default function rootReducer(state = {}, action) {
    return {
        books: todosReducer(state.todos, action)
    }
}
