import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class ProductForm extends Component {
    render() {
        return (
            <form action="">
                test
            </form>
        )
    }
}

ProductForm = reduxForm({form : 'productForm'})(ProductForm)

export default ProductForm