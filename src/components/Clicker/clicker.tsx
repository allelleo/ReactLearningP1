import React, { Component } from 'react'



export default class clicker extends Component<{}, { disable: boolean, btnText: string }> {
    constructor(props: any) {
        super(props)
        this.state = {
            disable: false,
            btnText: "See"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {

        this.setState(
            state => ({
                disable: !state.disable
            })
        )
        this.setState(
            state => ({
                btnText: state.disable ? "Don't see" : "See"
            })
        )
    }

    render() {
        if (this.state.disable) {
            return (
                <div>
                    You See Me!
                    <button onClick={this.handleClick}>{this.state.btnText}</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>{this.state.btnText}</button>
                </div>
            )
        }

    }
}
