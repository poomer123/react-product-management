import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import FormField from '../common/FormField'
import { productFormFields } from './FormFields'

class ProductForm extends Component {

    renderFields(productFormFields) {
        return productFormFields.map(({label, name, type, required}, i) => {
            return (
                <Field key={i} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const {onProductSubmit} = this.props
        // console.log(onProductSubmit)
        return (
            <form onSubmit={this.props.handleSubmit(onProductSubmit)} >
                {this.renderFields(productFormFields)}
                <button className='btn btn-block btn-info title' type='submit'>บันทึก</button>
            </form>
        )
    }
}

function validate(values) {
    console.log(values)
    const errors = {}
    productFormFields.forEach(({ name, required }) => {
        if(!values[name] && required) {
            errors[name] = 'กรุณาระบุข้อมูล'
        }
    })
    return errors
}

ProductForm = reduxForm({ validate, form : 'productForm'})(ProductForm)

export default ProductForm