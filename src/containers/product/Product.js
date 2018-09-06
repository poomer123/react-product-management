import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Product extends Component {
    state = {
        products: null
    }

    constructor() {
        super()
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
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

    editProduct(product) {
        this.props.history.push('product/edit/' + product.id)
    }

    delProduct(product) {
        axios.delete('http://localhost:3001/products/'+product.id).then(
            res => {
                axios.get('http://localhost:3001/products/').then(
                    res => {
                        this.setState({
                            products: res.data
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
                        <button 
                            className="btn btn-success title float-right"
                            onClick={ () => this.props.history.push('product/add') }
                        >
                            เพิ่ม
                        </button>
                    </div>
                </div>
                <ProductList 
                    products={this.state.products} 
                    delProduct={this.delProduct} 
                    editProduct={this.editProduct}    
                />
                <Footer />
            </div>
        )
    }
}

export default withRouter(Product)