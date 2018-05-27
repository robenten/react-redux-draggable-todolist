import todos from './todos'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SWAP_TODO } from '../actions'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: ADD_TODO,
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }
      ], {
        type: ADD_TODO,
        text: 'Use Redux',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      ], {
        type: ADD_TODO,
        text: 'Fix the tests',
        id: 2
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        id: 1
      }, {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: TOGGLE_TODO,
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle REMOVE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 1
        }, {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ], {
        type: REMOVE_TODO,
        id: 1
      })
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle SWAP_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,
          id: 0
        }, {
          text: 'Use Redux',
          completed: false,
          id: 1
        }, {
          text: 'Fix the tests',
          completed: false,
          id: 2
        }
      ], {
        type: SWAP_TODO,
        sourceTodo: {
          text: 'Run the tests',
          completed: false,
          id: 0
        },
        targetTodo: {
          text: 'Use Redux',
          completed: false,
          id: 1
        }
      })
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      },
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

})