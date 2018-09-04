import React, { Component } from 'react'

class App extends Component {
    state = {
        date : new Date()
    }
    render() {
        return (
            <div className="container">
                <h1>Product Management System</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default App
