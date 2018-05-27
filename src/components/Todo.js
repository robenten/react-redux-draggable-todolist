import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onRemove, completed, text }) => {
    let className = 'list-group-item list-group-item-custom'
    if (completed) {
        className += ' list-group-item-light'
    } else {
        className += ' list-group-item-warning'
    }

    return (
    <li
        className={className}
        onClick={onClick}
        style={{
        textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
        <span className="removeBtm" onClick={onRemove}>×</span>
    </li>
    )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo