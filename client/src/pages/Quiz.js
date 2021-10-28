import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import Question from './Question'
import Timer from './Timer';

class Quiz extends Component {
    constructor(props) {
        super(props)

        this.state = {
            QNo: 0,
            Questions: this.props.Quesdata
        }
    }
    updateuserchoice = (choice, Qno) => {
        this.props.setuc(choice, Qno)
    }
    nextQuestion = () => {
        if (this.state.QNo >= (this.state.Questions.length - 1)) {
            this.setState({ QNo: this.state.QNo })
        } else {
            this.setState({ QNo: this.state.QNo + 1 });
        }
    }
    prevQuestion = () => {
        if (this.state.QNo <= 0) {
            this.setState({ QNo: this.state.QNo })
        } else {
            this.setState({ QNo: this.state.QNo - 1 })
        }
    }
    render() {
        return (
            <Card>
                <h2 style={{ textAlign: "center" }}>Quiz </h2>
                <Timer startTimeInSeconds={this.state.Questions[this.state.QNo].time} />
                <Question
                    className="container-fluid"
                    QNo={this.state.QNo + 1}
                    prevQ={this.prevQuestion}
                    nextQ={this.nextQuestion}
                    Qdata={this.state.Questions[this.state.QNo]}
                    setuc={this.updateuserchoice}
                    nav={true} />

            </Card>
        )
    }
}

export default Quiz
