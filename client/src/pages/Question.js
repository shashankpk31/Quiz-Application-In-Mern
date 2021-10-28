import React, { Component } from 'react'
// import img from './assets/dum1.png'
import { Card, ButtonToolbar, Alert } from 'react-bootstrap'
import Buttoncomp from './Buttoncomp'

class Question extends Component {
    constructor(props) {
        super(props)

        this.state = {
            QNo: this.props.QNo,
            colorbtn: "primary",
            Qdata: this.props.Qdata
        }
    }

    checkanswer = (choice) => {
        this.props.setuc(choice, this.state.QNo);

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            Qdata: nextProps.Qdata,
            QNo: nextProps.QNo,
        });

    }
    render() {
        return (
            < >
                <Card className="shadow p-4 mx-3 my-2 bg-dark text-white">
                    <Card.Body>
                        <Card.Title>QuesNo.{this.state.QNo}</Card.Title>
                        <Card.Text >
                            {this.state.Qdata.questiontxt}
                        </Card.Text>
                        {/* <Card.Img style={{ padding: '1rem' }} variant="top" width="10px" className="img-fluid" alt="..." src={img} /> */}
                        <br />
                        {this.state.Qdata.choice.map((choice, index) =>
                            <Buttoncomp key={index} typ={"choicebtn"} choice={this.props.rev ? this.props.choice :undefined} colorbtn={this.state.colorbtn} rev={this.props.rev} check={this.checkanswer} text={choice} margin={'20px'} minwidth={"100px"} />
                        )}
                        {this.props.rev &&
                            <Alert variant={"danger"}>correct answer : {this.state.Qdata.answer}</Alert>
                        }
                    </Card.Body>
                    {this.props.nav === true &&
                        <ButtonToolbar className="justify-content-between">
                            <Buttoncomp maxwidth={'100px'} colorbtn={this.state.colorbtn} minwidth={"140px"} margin={'20px'} onclick={this.props.prevQ} typ={"navbtn"} text={"Previous"} />
                            <Buttoncomp maxwidth={'100px'} colorbtn={this.state.colorbtn} minwidth={"140px"} margin={'20px'} onclick={this.props.nextQ} typ={"navbtn"} text={"Next"} />
                        </ButtonToolbar>
                    }
                </Card>
            </>
        )
    }
}

export default Question
