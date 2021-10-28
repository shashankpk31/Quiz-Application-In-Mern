import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
class Buttoncomp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bgcolor: this.props.colorbtn,
            onclick: this.props.onclick
        }
    }
    onclick = () => {
        if (!this.props.rev) {
            if (this.props.typ === "choicebtn") {
                this.props.check(this.props.text);

            }

        }
        if (this.props.typ === "navbtn") {
            this.state.onclick();
        }
    }
    componentDidMount=()=>{
        if (this.props.rev) {
            if (this.props.text === this.props.choice) {
                this.setState({ bgcolor: "warning" })
            }
        }
    }

    render() {
        return (
            <Button
                style={{
                    maxWidth: this.props.maxwidth,
                    margin: this.props.margin,
                    minWidth: this.props.minwidth,
                }}
                variant={this.state.bgcolor}
                onClick={this.onclick}
            >{this.props.text}
            </Button>
        )
    }
}

export default Buttoncomp
