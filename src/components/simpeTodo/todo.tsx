import React, { Component } from 'react'
import './todo.css'
import TypeTodo from './types'

export default class Todo extends Component<{}, { todoTitle: string, todos: TypeTodo[] }> {
    constructor(props: any) {
        super(props)
        this.state = {
            todoTitle: '',
            todos: [
                {
                    id: 1,
                    title: 'todo1',
                    completed: false
                },
                {
                    id: 2,
                    title: 'todo2',
                    completed: false
                },
                {
                    id: 3,
                    title: 'todo3',
                    completed: true
                }
            ]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            todoTitle: event.target.value
        })
    }

    handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault()
        this.state.todos.push({
            id: this.state.todos.length + 1,
            title: this.state.todoTitle,
            completed: false
        })
        console.log(this.state.todos)
        this.setState({
            todoTitle: ''
        })
    }

    

    render() {
        return (
            <div className='todo'>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo-name">Todo Title: </label>
                    <input type="text" id="todo-name" onChange={this.handleInput} />
                    <button type="submit">Create</button>
                </form>
                <h3>Todo:</h3>
                <ul>
                    {this.state.todos.map(todo => (
                        <li>
                            {todo.id}:{todo.title}
                            {todo.completed ? <input type="checkbox" checked /> : <input type="checkbox" />}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
