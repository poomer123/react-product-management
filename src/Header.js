import React, { Component } from "react"

class Header extends Component {
    state = {
        date : new Date()
    }
    componentDidMount() {
       this.timerId = setInterval( () => this.setTimeToState(), 1000 )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    setTimeToState() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className="row mt-3">
                <div className="col-12 col-md-8">
                    <h1 className="text-info"><img style={ {height: '50px'} } src="/images/logo.png" alt="Logo"/> ออเดอร์แจ่มแมว</h1>
                </div>
                <div className="col-12 col-md-4 text-right">
                    <h5 className="text-muted pt-3">{this.state.date.toLocaleTimeString()}</h5>
                </div>
                <div className="col-12">
                    <hr />
                </div>
            </div> 
        )
    }
}

export default Header