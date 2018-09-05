import React, { Component } from 'react'

class Calculator extends Component {
    render() {
        return (
            <div>
                <h2 className="text-right">180.00</h2>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success tile">
                        ไก่ทอด x 1 = 100.00
                        <button className="btn btn-light btn-sm text-success">X</button>
                    </li>
                    <li className="text-right text-success tile">
                        สลัด x 1 = 80.00
                        <button className="btn btn-light btn-sm text-success">X</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger tile">ยืนยัน</button>
                <button className="btn btn-block btn-secondary tile">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculator