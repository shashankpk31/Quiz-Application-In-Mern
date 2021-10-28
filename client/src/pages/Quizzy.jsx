import React, { Component } from 'react'
import api from '../api'
import Instructions from './Instructions';
import Navbarcomp from './Navbarcomp';
import Quiz from './Quiz';
import ScoreBoard from './ScoreBoard';
import Review from './Review';
import { Table } from 'react-bootstrap';

export class QuizList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: [],
      userchoices: [],
      Subjects: ["Mathematics", "Quantitative Aptitude", "Analysis", "General English"],
      Years: [2020, 2019, 2018, 2017, 2016],
      Instruction: ["You have Total 5 Questions all Questions are Compulsory",
        "You will be rewarded 4 marks for every right attempt and -1 for Every Wrong attempt",
        "You have time Limit of 300sec",
        "All The Best."],
      Score: 0,
      isLoading: false,
    }
  }
  AddQues = (Q) => {
    this.setState({ questions: this.state.questions.push(Q) })
    console.log(this.state.questions);
  }
  setuserchoice = (choice, Qno) => {
    let newuc = this.state.userchoices.slice()
    if (newuc[Qno - 1] !== undefined) {
      newuc.splice(Qno - 1, 1, choice)
      this.setState({ userchoices: newuc }, () => {
        console.log(Qno, this.state.userchoices)
        this.setState({ Score: this.state.userchoices.length }, () => { console.log(this.state.Score) })
      })
    } else {
      newuc.splice(Qno - 1, 0, choice)
      this.setState({ userchoices: newuc }, () => {
        console.log(Qno, this.state.userchoices)
        this.setState({ Score: this.state.userchoices.length }, () => { console.log(this.state.Score) })
      })
    }

  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllQuizes()
      .then(quizes => {
        this.setState({
          questions: quizes.data.data,
          isLoading: false,
        });
      })
  }

  render() {
    return (
      <div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>Questiontxt</th>
              <th>Choice</th>
              <th>Answer</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.questions.map((q) => (
                <tr key={q._id}>
                  <td>{q._id}</td>
                  <td>{q.questiontxt}</td>
                  <td>{q.choice[0]}</td>
                  <td>{q.answer}</td>
                  <td>{q.subject}</td>
                  <td>{q.time}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>

        {/* <Navbarcomp />
        <Instructions Instruction={this.state.Instruction} />
        <Quiz Quesdata={this.state.questions} setuc={this.setuserchoice} />
        <ScoreBoard Quesdata={this.state.questions} uchoices={this.state.userchoices} />
        <Review questions={this.state.questions} userchoices={this.state.userchoices} /> */}

      </div>
    )
  }
}

export default QuizList
