import React from 'react'

export default class NewTodo extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const newTodo = e.target.todoBody.value
    this.props.addTodo(newTodo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todoBody" placeholder="do what??" />
        <input type="submit" value="New Todo" />
      </form>
    )
  }
}
