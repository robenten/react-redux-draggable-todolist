import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import gitHubMark from '../assets/GitHub-Mark-Light-64px.png'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="jumbotron jumbotron-fluid jumbotron-custom">
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
                    <div class="input-group-prepend">
                        <span class="input-group-text" style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                            <a href="https://github.com/robenten/react-redux-draggable-todolist" target="_blank">
                                <img src={gitHubMark} alt="Go to Repository!" width="30" height="30" border="0"/>
                            </a>
                        </span>
                    </div>
                    <input ref={node => input = node} type="text" className="form-control" placeholder="Please enter" aria-label="Please enter" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-dark" style={{color: 'white', borderColor: 'lightgrey'}} type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default connect()(AddTodo)