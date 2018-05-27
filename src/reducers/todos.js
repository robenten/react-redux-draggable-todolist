import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SWAP_TODO } from '../actions'

const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      case REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id)
      case SWAP_TODO:
        return state.map(todo => {
          switch(todo.id) {
            case action.sourceTodo.id:
              return action.targetTodo
            case action.targetTodo.id:
              return action.sourceTodo
            default:
              return todo
          }
        })
      default:
        return state
    }
}
  
export default todos