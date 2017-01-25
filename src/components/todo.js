import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const updated = e.target.todoBody.value
    const { updateTodo, idx } = this.props
    updateTodo(updated, idx)
  }

  handleClick(e) {
    e.preventDefault()

    const { idx, deleteTodo } = this.props
    deleteTodo(idx)
  }

  render() {
    return (
      <li>
        <p>{this.props.todo}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todoBody"/>
          <button type="submit" value="Update">Update</button>
          <button name="delete" onClick={this.handleClick}>Delete</button>
        </form>
      </li>

    )
  }
}
