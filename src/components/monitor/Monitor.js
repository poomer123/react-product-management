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
        console.log(product)

        let findOrder = this.state.orders.find( 
            order => order.product.productId == product.productId
        )
        console.log(findOrder)

        if(!findOrder) {
            this.state.orders.push({
                product: product,
                quantity: 1
            })
            console.log('ยังไม่มี')
        } else {
            findOrder.quantity++
            console.log('มีแล้ว')
        }
        console.log(findOrder)

        let totalPrice = this.state.totalPrice + parseInt(product.unitPrice)
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