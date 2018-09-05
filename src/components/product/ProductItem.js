import React, { Component } from 'react'

class ProductItem extends Component {
    render() {
        const {productName, unitPrice, thumbnail} = this.props
        return (
            <div className="col-12 col-sm-6 col-md-3">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="thumbnail" />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice} THB</p>
                <button className="btn btn-block btn-secondary title">ซื้อ</button>
                <hr/>
            </div>
        )
    }
}

export default ProductItem