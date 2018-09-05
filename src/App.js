import React, { Component } from 'react'
import Header from './Header'
import Monitor from './components/monitor/Monitor'
import Footer from './Footer'

class App extends Component {
    state = {
        products : ""
    }
    componentDidMount() {
        // this.setState({
        //     products : [
        //         { productId: 1, productName: "สลัดผัก", unitPrice: "120", thumbnail: "/images/products/1.jpg" },
        //         { productId: 2, productName: "ไก่ทอด", unitPrice: "90", thumbnail: "/images/products/2.jpg" },
        //         { productId: 3, productName: "บิงซู", unitPrice: "200", thumbnail: "/images/products/3.jpg" },
        //         { productId: 4, productName: "เฟรนฟราย", unitPrice: "140", thumbnail: "/images/products/4.jpg" },
        //         { productId: 5, productName: "เค้ก 3 ชั้น", unitPrice: "200", thumbnail: "/images/products/5.jpg" },
        //         { productId: 6, productName: "กาแฟ เฮลตี้ฟู้ด", unitPrice: "140", thumbnail: "/images/products/6.jpg" }
        //     ]
        // })
        fetch('http://localhost:3001/products', {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            this.setState({
                products: res
            })
        })
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
