import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import FormField from '../common/FormField'
import { productFormFields } from './FormFields'

class ProductForm extends Component {

    renderFields(productFormFields) {
        return productFormFields.map(({label, name, type, required},i) => {
            return (
                <Field key={i} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        return (
            <form>
                {this.renderFields(productFormFields)}
                <button className='btn btn-block btn-info title' type='submit'>บันทึก</button>
            </form>
        )
    }
}

ProductForm = reduxForm({form : 'productForm'})(ProductForm)

export default ProductForm