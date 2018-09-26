import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class ProductForm extends Component {

    renderFields() {
        const formFields = [
            {name: 'productName', type: 'text'},
            {name: 'unitPrice', type: 'number'},
            {name: 'thumbnail', type: 'text'}
        ]
        return formFields.map(({name, type}) => {
            return (
                <Field name={name} type={type} component='input' />
            )
        })
    }

    render() {
        return (
            <form>
                {this.renderFields()}
            </form>
        )
    }
}

ProductForm = reduxForm({form : 'productForm'})(ProductForm)

export default ProductForm