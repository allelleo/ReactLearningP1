import React, { Component } from 'react'

export default class Form extends Component<{}, { input: string, submit: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        event.preventDefault()
        this.setState({
            submit: this.state.input
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>

                    <input onChange={this.handleChange} type="text" value={this.state.input} />
                    <button type="submit">Show</button>

                </form>

                <h5>Control input: {this.state.submit}</h5>
            </div>
        )
    }
}
