import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export class Instructions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Inst:this.props.Instruction
        }
    }
    
    render() {
        return (
            <Card style={{ padding: '1rem' }}>
                <Card.Body>
                    <Card.Title>These are Instruction before attempting Exam</Card.Title>
                    <ul>
                       {this.state.Inst.map((data,index)=>
                           <li key={index}>{data}</li>
                       )}
                    </ul>
                </Card.Body>
            </Card>
        )
    }
}

export default Instructions
