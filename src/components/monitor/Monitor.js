import React, { Component } from 'react'
import Calculator from './Calculator'
import ProductList from '../product/ProductList'
import axios from 'axios'

class Monitor extends Component {
    state = {
        totalPrice : 0,
        orders: []
    }
    constructor() {
        super()
        this.addOrder = this.addOrder.bind(this)
        this.delOrder = this.delOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this)
        this.confirmOrder = this.confirmOrder.bind(this)
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

    delOrder(product) {
        let findOrder = this.state.orders.find( 
            order => order.product.productId === product.productId
        )
        let rsOrder = this.state.orders.filter(
            order => order.product.productId !== product.productId
        )
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice, 10))
        this.setState({
            totalPrice: totalPrice,
            orders: rsOrder
        })
    }

    confirmOrder() {
        const {totalPrice, orders} = this.state
        axios.post('http://localhost:3001/orders', {
            orderedDate: new Date(),
            totalPrice,
            orders
        })
        .then( res => {
            this.setState({
                totalPrice: 0,
                orders: []
            })
        })
    }

    cancelOrder() {
        this.setState({
            totalPrice: 0,
            orders: []
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <ProductList products={this.props.products} addOrder={this.addOrder} />
                </div>
                <div className="col-md-3">
                    <Calculator 
                        totalPrice={this.state.totalPrice} 
                        orders={this.state.orders} 
                        delOrder={this.delOrder} 
                        cancelOrder={this.cancelOrder}
                        confirmOrder={this.confirmOrder}
                    />
                </div>
            </div>
        )
    }
}

export default Monitor