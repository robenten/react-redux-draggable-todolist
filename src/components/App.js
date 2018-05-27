import React, { Component } from 'react'
import './App.css'
// wrap the top-level component of your app in a DragDropContext
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
// import components
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const loggerMiddleware = createLogger()
const preloadedState = undefined

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
        loggerMiddleware
    )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid" style={{maxWidth: '750px'}}>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default DragDropContext(HTML5Backend)(App)