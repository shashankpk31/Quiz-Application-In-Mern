import React, { Component } from 'react'
import api from '../api'
import Instructions from './Instructions';
import Quiz from './Quiz';
import ScoreBoard from './ScoreBoard';
import Review from './Review';


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
    if (!this.state.questions.length) {
      return (<p>please Wait content is Loading</p>)
    } else {
      return (<div>
        <Instructions Instruction={this.state.Instruction} />
        <Quiz Quesdata={this.state.questions} setuc={this.setuserchoice} />
        <ScoreBoard Quesdata={this.state.questions} uchoices={this.state.userchoices} />
        <Review questions={this.state.questions} userchoices={this.state.userchoices} />
      </div>)
    }

  }
}

export default QuizList
