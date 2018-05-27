import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <div className="input-group mb-3">
                    <input ref={node => input = node} type="text" className="form-control" placeholder="Please enter" aria-label="Please enter" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-dark" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default connect()(AddTodo)