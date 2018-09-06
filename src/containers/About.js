import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>เกี่ยวกับเรา</h2>
                        <p className="title text-justify my-4">
                            ระบบจัดการสินค้าและสร้างรายการสั่งซื้ออย่างง่าย
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About