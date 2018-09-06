import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
    showProduct() {
        if(this.props.products) {
            return this.props.products.map( 
                product => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        addOrder={this.props.addOrder} 
                        delProduct={this.props.delProduct}
                    />
                ) 
            )
        }
    }

    render() {
        return (
            <div className="row">
                {this.showProduct()}
            </div>
        )
    }
}

export default ProductList