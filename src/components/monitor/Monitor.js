import React, { Component } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'

class Monitor extends Component {
    state = {
        totalPrice : 0,
        orders: []
    }
    constructor() {
        super()
        this.addOrder = this.addOrder.bind(this)
    }

    addOrder(product) {
        let findOrder = this.state.orders.find( 
            order => order.product.productId === product.productId
        )

        if(!findOrder) {
            this.state.orders.push({
                product: product,
                quantity: 1
            })
        } else {
            findOrder.quantity++
        }

        let totalPrice = this.state.totalPrice + parseInt(product.unitPrice, 10)
        this.setState({
            totalPrice : totalPrice,
            orders: this.state.orders
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <ProductList products={this.props.products} addOrder={this.addOrder} />
                </div>
                <div className="col-md-3">
                    <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} />
                </div>
            </div>
        )
    }
}

export default Monitor