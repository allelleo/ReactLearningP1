import React, { Component } from 'react'

export default class Clicker2 extends Component<{}, { count: number }> {
    constructor(props: any) {
        super(props)
        this.state = {
            count: 0
        }

        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this);
        this.zero = this.zero.bind(this);

    }

    plus() {
        this.setState({
            count: this.state.count + 1
        })
    }
    minus() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
        
    }
    zero() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plus}>+1</button>
                <button onClick={this.minus}>-1</button>
                <button onClick={this.zero}>0</button>
            </div>
        )
    }
}
