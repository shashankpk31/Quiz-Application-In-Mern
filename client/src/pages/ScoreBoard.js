import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class ScoreBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obtMarks: 0,
            maxMarks: this.props.Quesdata.length
        }
    }
    calculatemarks = () => {
        let marks = 0;
        for (let i = 0; i < this.props.Quesdata.length; i++) {
            if (this.props.Quesdata[i].answer === this.props.uchoices[i]) {
                marks = marks + 4;
                console.log(this.props.Quesdata[i].answer, this.props.uchoices[i]);
            }else{
                marks = marks - 1;
            }
        }
        this.setState({ obtMarks: marks });
    }
    render() {
        return (
            <>
                <Card  >
                    <Card.Header style={{ background: "#fff666", fontSize: "30px", textAlign: "center" }}>Score Card</Card.Header>
                    <Card.Body >
                        Total Questions :{this.state.maxMarks}
                        Your marks Obtained:{this.state.obtMarks}
                        <Button variant="primary" onClick={this.calculatemarks}>Calculate Score</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default ScoreBoard
