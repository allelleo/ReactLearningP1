import React, { Component } from 'react'

type apiDataData = {
    id: number,
    name: string
}

type ApiData = {
    error: null | {message: string} ,
    isLoaded: boolean,
    data: apiDataData[]
}

export default class ApiC extends Component<{}, ApiData> {
    constructor(props: any) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount(): void {
        fetch('http://127.0.0.1:8000/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                    console.log(this.state)
                }
            )
        console.log(this.state)
    }

    render() {
        const { error, isLoaded, data } = this.state;
        if (error) {
            return <p>Error: {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )
        }
    }
}
