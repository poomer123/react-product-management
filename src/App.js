import React, { Component } from 'react'
import Header from './Header'
import Monitor from './components/monitor/Monitor'
import Footer from './Footer'
import axios from 'axios'

class App extends Component {
    state = {
        products : ""
    }
    componentDidMount() {
        // fetch('http://localhost:3001/products', {method: 'GET'})
        // .then(res => res.json())
        // .then(res => {
        //     this.setState({
        //         products: res
        //     })
        // })

        axios.get('http://localhost:3001/products').then(
            res => {
                console.log(res.data)
                this.setState({
                    products: res.data
                })
            }
        )

    }
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Monitor products={this.state.products} />
                <Footer company="Kickdown" email="info@kickdown.in.th" />
            </div>
        )
    }
}

export default App
