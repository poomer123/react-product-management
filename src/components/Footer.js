import React from "react"

const Footer = (props) => {
    const {company = 'Kickdown', email = 'info@kickdown.in.th'} = props
    return (
        <div className="row">
            <div className="col-12">
                <hr />
                <div className="text-center title text-uppercase">
                    <small>
                        <span className="text-danger">Powered By {company}</span> | <span className="text-muted">Contact Us : {email}</span>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Footer