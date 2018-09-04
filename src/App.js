import React, { Component } from 'react'
import Footer from "./Footer";

class App extends Component {
    state = {
        date : new Date()
    }
    render() {
        return (
            <div className="container-fluid">
                <h1>Product Management System</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <Footer company="Kickdown" email="info@kickdown.in.th" />
            </div>
        )
    }
}

export default App
