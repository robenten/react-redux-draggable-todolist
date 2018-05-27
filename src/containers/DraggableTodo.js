import React from 'react'
import PropTypes from 'prop-types'
import { DragSource, DropTarget } from 'react-dnd'
import flow from 'lodash/flow'
import Todo from '../components/Todo'
import { swapTodo } from '../actions'

/**
 * Implements the drag source contract.
 */
let sourceTodo = null
let targetTodo = null

const draggableTodoSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = props.todo
        sourceTodo = item
        return item
    },
    endDrag(props) {
        // Return the data describing the endDrag item
        const item = props.todo
        return item
    }
}

const targetTodoSource = {
    drop(props) {
        // Return the data describing the dropped item
        const item = props.todo
        return item
    },
    hover(props) {
        // Return the data describing the hovered item
        const item = props.todo
        targetTodo = item
        if (sourceTodo.id !== targetTodo.id) {
            props.dispatch(swapTodo(sourceTodo, targetTodo))
        }
        return item
    }
}

/**
 * Specifies the props to inject into your component.
 */
function sourceCollect(connect, monitor) {
  return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
  }
}

function targetCollect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDropTarget: connect.dropTarget(),
        // You can ask the monitor about the current drag state:
        isOver: monitor.isOver()
    }
}

const DraggableTodo = ({isDragging, connectDragSource, isOver, connectDropTarget, todo, toggleTodo, removeTodo, dispatch}) => connectDragSource(connectDropTarget(
    <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Todo
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            onRemove={() => removeTodo(todo.id)}
        />
    </div>
))

DraggableTodo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    isOver: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
}

// Export the wrapped component:
export default flow(
    DragSource('list', draggableTodoSource, sourceCollect),
    DropTarget('list', targetTodoSource, targetCollect)
)(DraggableTodo)