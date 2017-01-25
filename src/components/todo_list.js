import React from 'react'

import Todo from './todo'

let todoId = 0

export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul>
        {todos.map((todo, i) => <Todo updateTodo={updateTodo} deleteTodo={deleteTodo} idx={i} todo={todo} key={todoId++}></Todo>)}
      </ul>
    )
  }
}
