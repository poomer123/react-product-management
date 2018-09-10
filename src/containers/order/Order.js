import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from 'react-redux'
import { ordersFetch, orderDelete } from '../../actions/index'

class Order extends Component {
    componentDidMount() {
        this.props.ordersFetch()
    }

    delOrder(order) {
        this.props.orderDelete(order.id)
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(
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

function mapStateToProps({ orders }) {
    return { orders }
}
export default connect( mapStateToProps, { ordersFetch, orderDelete} )(Order)