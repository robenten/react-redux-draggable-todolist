import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DraggableTodo from '../containers/DraggableTodo'
import { addTodo } from '../actions'

class TodoList extends Component {
  componentDidMount() {
    // default data
    this.props.dispatch(addTodo('Milk'))
    this.props.dispatch(addTodo('Chocolate Bar'))
  }

  render() {
    const { todos, toggleTodo, removeTodo, dispatch } = this.props
    return (
      <ul className="list-group">
        {todos.map(todo =>
          <DraggableTodo
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
            dispatch={dispatch}
          />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default TodoList