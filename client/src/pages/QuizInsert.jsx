import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class QuizInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questiontxt: '',
            choice: '',
            answer: '',
            subject: '',
            time: ''
        }
    }


    handleChangequestiontxt= async event => {
        const questiontxt = event.target.value
        this.setState({questiontxt})
        console.log(questiontxt);
    }

    handleChangechoice= async event => {
        const choice = event.target.value
        this.setState({ choice });
    }

    handleChangeanswer= async event => {
        const answer = event.target.value
        this.setState({ answer });
    }
    handleChangesubject= async event =>{
        const subject = event.target.value
        this.setState({ subject });
    }
    handleChangetime= async event => {
        const time = event.target.value
        this.setState({ time });
    }

    handleIncludeQuiz = async () => {
        const { questiontxt, choice, answer, subject, time } = this.state
        const payload = { questiontxt, choice, answer, subject, time }

        await api.insertQuiz(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                questiontxt: '',
                choice: '',
                answer: '',
                subject: '',
                time: ''
            })
        })
    }

    render() {
        const { questiontxt, choice, answer, subject, time } = this.state
        return (
            <Wrapper>
                <Title>Create Quize</Title>

                <Label>Question: </Label>
                <InputText
                    type="text"
                    value={questiontxt}
                    onChange={this.handleChangequestiontxt}
                />
                <Label>Choice: </Label>
                <InputText
                    type="text"
                    value={choice}
                    onChange={this.handleChangechoice}
                />
                <Label>Answer: </Label>
                <InputText
                    type="text"
                    value={answer}
                    onChange={this.handleChangeanswer}
                />
                <Label>Subject: </Label>
                <InputText
                    type="text"
                    value={subject}
                    onChange={this.handleChangesubject}
                />
                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangetime}
                />
                <Button onClick={this.handleIncludeQuiz}>Add Question</Button>
                <CancelButton href={'/Quiz'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default QuizInsert;
