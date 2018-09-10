import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductList from '../../components/product/ProductList'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { productsFetch, productDelete } from '../../actions/index'

class Product extends Component {

    constructor() {
        super()
        this.delProduct = this.delProduct.bind(this)
        this.editProduct = this.editProduct.bind(this)
    }

    componentDidMount() {
        this.props.productsFetch()
    }

    editProduct(product) {
        this.props.history.push('product/edit/' + product.id)
    }

    delProduct(product) {
        this.props.productDelete(product.id)
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
                    products={this.props.products} 
                    delProduct={this.delProduct} 
                    editProduct={this.editProduct}    
                />
                <Footer />
            </div>
        )
    }
}

function mapStateToProps({products}) {
    return {products}
}


export default withRouter( connect(mapStateToProps, {productsFetch, productDelete})(Product) )