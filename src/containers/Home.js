import React, { Component } from 'react'
import Header from '../components/Header'
import Monitor from '../components/monitor/Monitor'
import Footer from '../components/Footer'
import axios from 'axios'

class Home extends Component {
    state = {
        products : ""
    }
    componentDidMount() {
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

export default Home
