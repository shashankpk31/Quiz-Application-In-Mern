import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Question from './Question'

export class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Qs: this.props.questions,
            Cs: this.props.userchoices
        }
    }
    
    render() {
        return (
            <div>
                <Card>
                    <h3 style={{ textAlign: "center" }}>Review of Quiz</h3>
                    {this.state.Qs.map((Q, index) =>

                        <Question className="container-fluid"
                            key={index}
                            QNo={index + 1}
                            Qdata={Q}
                            nav={false}
                            click={false}
                            choice={this.props.userchoices[index]}
                            rev={true} />

                    )}

                </Card>

            </div>
        )
    }
}

export default Review
