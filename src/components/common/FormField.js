import React from 'react'

export default ({ input, label, type, required, meta}) => {
    console.log(meta)
    return (
        <div className='form-group'>
            <label className='title' htmlFor={input.name}>{label}</label>
            <input type={type} required={required} {...input} className='form-control' />
        </div>
    )
}