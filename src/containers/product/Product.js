import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import axios from 'axios'

class Product extends Component {
    state = {
        products: null
    }

    componentDidMount() {
        axios.get('http://localhost:3001/products').then(
            res => {
                this.setState({
                    products: res.data
                })
            }
        )
    }

    delProduct(product) {
        axios.delete('http://localhost:3001/products/'+product.id).then(
            res => {
                axios.get('http://localhost:3001/products/').then(
                    res => {
                        this.setState({
                            orders: res.data
                        })
                    }
                )
            }
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row mb-3">
                    <div className="col-6">
                        <h2>รายการสินค้า</h2>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-success title float-right">เพิ่ม</button>
                    </div>
                </div>
                <ProductList products={this.state.products} />
                <Footer />
            </div>
        )
    }
}

export default Product