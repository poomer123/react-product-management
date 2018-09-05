import React, { Component } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'

class Monitor extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <ProductList products={this.props.products} />
                </div>
                <div className="col-md-3">
                    <Calculator />
                </div>
            </div>
        )
    }
}

export default Monitor