import React from 'react'
import TodoList from './todo_list'
import NewTodo from './new_todo'

export default class MainView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['eat cheese', 'buy more cheese', 'cheese']
    }

    this.addTodo = this.addTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  updateTodo(updatedTodo, index) {
    const todos = this.state.todos.map((todo, i) => {
      return i === index ? updatedTodo : todo
    })

    this.setState({ todos })
  }

  deleteTodo(index) {
    const todos = this.state.todos.filter((_, i) => i !== index)

    this.setState({ todos })
  }

  render() {
    return (
      <main>
        <h1>Another Stupid TODO app</h1>
        <NewTodo addTodo={this.addTodo} />
        <TodoList updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </main>
    )
  }
}
