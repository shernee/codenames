import React from 'react';
import './trivia_styles.css';
import sampleData from './triviaData.json';

function Question(props) {
  var style = {
      color : "black",           
  }
  return(
      <div style={style}>
          <h1>{props.questions}</h1>
      </div>
  )
}

function Answers(props) {
  return(
      <div className="btn-group">
          <button onClick={() => props.handleClick(props.id)}>{props.answer}</button>
      </div>
  )
}

function QAset(props) {
  var style = {
      width : "40%",
      textAlign : "center"
  }
  if(props.over === 1) {
      return(
          <div style={style}>
              <h1>Game Over</h1>
              <button onClick={() => {props.restart()}}>Play Again</button>
          </div>
      )
  }
  return(
      <div style={style}>
          <Question questions={props.questions[props.questionNo]}/>
          {props.answers[props.questionNo].map( (answer, index) => 
            <Answers key={answer} id={index} answer={answer} handleClick={props.handleClick}/>
          )}
      </div>
  )
}

function Tally(props) {
  return(
      <div>
          <h2 style={{color: "green"}}>Correct: {props.correctNo}</h2>
          <h2 style={{color: "red"}}>Incorrect: {props.incorrectNo}</h2>
      </div>
  )
}

class App extends React.Component {
  constructor(props) {
      super(props)
      var questions = sampleData.questions
      const key = sampleData.key  
      this.state = {ansKey: key, questionNo: 0, correctNo: 0, incorrectNo: 0, over: 0,
                      questions: questions}
      this.handleClick = this.handleClick.bind(this)
      this.restart = this.restart.bind(this)
  }
  handleClick(clickedId) {
      console.log(clickedId)
      var clickedKey = clickedId + 1
      var answerKey = this.state.ansKkey[this.state.questionNo]
      if (clickedKey === answerKey) {
          console.log('correct')
          this.setState({correctNo: this.state.correctNo + 1})
      }
      else {
          console.log('incorrect')
          this.setState({incorrectNo: this.state.incorrectNo + 1})
      }
      if(this.state.questionNo < this.state.questions.length -1) {
          console.log('next question')
          this.setState({questionNo: this.state.questionNo + 1})
      }
      else if(this.state.questionNo === this.state.questions.length -1) {
          console.log('Game over')
          this.setState({over: 1})
      }
  }
  restart() {
      const key = sampleData.key
      var questions = sampleData.questions  
      this.setState({ansKey: key, questionNo: 0, correctNo: 0, incorrectNo: 0, over: 0,
                      questions: questions})    
  }
  render() {
    var answers = sampleData.answers
      return(
          <div>
              <div className="main-container">
                  <QAset questionNo={this.state.questionNo}
                          questions = {this.state.questions}
                          answers={answers}
                          handleClick={this.handleClick}
                          over={this.state.over}
                          restart={this.restart}/>
                  <Tally correctNo={this.state.correctNo} incorrectNo={this.state.incorrectNo}/>
              </div>
              <br/>
          </div>
      )
  }
}
export default App;
