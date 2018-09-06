import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import axios from 'axios'

class Order extends Component {
    state = {
        order: null
    }

    componentDidMount() {
        axios.get('http://localhost:3001/orders/').then(
            res => {
                this.setState({
                    orders: res.data
                })
            }
        )
    }

    delOrder(order) {
        axios.delete('http://localhost:3001/orders/'+order.id).then(
            res => {
                axios.get('http://localhost:3001/orders/').then(
                    res => {
                        this.setState({
                            orders: res.data
                        })
                    }
                )
            }
        )
    }

    showOrders() {
        return this.state.orders && this.state.orders.map(
            order => {
                const date = new Date(order.orderedDate)
                return (
                    <div className="col-md-3" key={order.id}>
                        <hr/>
                        <h5 className="text-right">วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                        <ul className=" list-unstyled text-right">
                            {order.orders && order.orders.map(
                                record => {
                                    console.log(record)
                                    return (
                                        <li key={record.product.id}>
                                            {record.product.productName} x {record.quantity} = {record.quantity * record.product.unitPrice} THB
                                        </li>
                                    )
                                } 
                            )}
                        </ul>
                        <p className="title text-right">รวม {order.totalPrice} THB</p>
                        <p className="text-right">
                            <button className="btn btn-danger btn-sm title" onClick={ () => this.delOrder(order)}>ยกเลิกรายการนี้</button>
                        </p>
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div className="container-fluid">
                <Header />
                <h2>รายการสั่งซื้อ</h2>
                <div className="row">
                    {this.showOrders()}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Order