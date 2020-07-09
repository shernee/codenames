/* eslint-disable default-case */

import React from 'react';
import sampleData from './names.json';
import './styles.css'

function Status(props) {
  var headColor = props.turn ? "Blue" : "Red";
  var headTitle = headColor + "'s turn";
  var buttonTitle = "End " + headTitle
  return(
    <div className="status-line">
      <div>
        <span style={{color:"blue"}}>{props.blue}</span> - <span style={{color:"red"}}>{props.red}</span>
      </div>
      <div className="title-turn">
        <h5 style={{color: headColor}}>{headTitle}</h5>
      </div>
      <div className="title-button">
        <button onClick={() => props.handleButtonClick()}>{buttonTitle}</button>
      </div>
    </div>
  )
}

function Cell(props) {
  var cellIndex = [props.r,props.c]
  var bgColor = props.stateGridCell
  var style = {
    color: "black",
    backgroundColor: bgColor
  }
  return(
    <div className="cell-style" style={style} onClick={() => props.handleClick(cellIndex)}>
      {props.cell}
    </div>
  )
}

function Row(props) {
  return (
    <div className="row-style">
      {props.row.map((cell,col_index) => 
        <Cell key={col_index} r={props.r} c={col_index} cell={cell} handleClick={props.handleClick}
           stateGridCell={props.stateGridRow[col_index]}/>
      )}
    </div>
  )
}

function Board(props) {
  return(
    <div className="board-style">
      {props.wordGrid.map((row,row_index) =>  
        <Row key={row_index} row={row} r={row_index} handleClick={props.handleClick}
              stateGridRow={props.stateGrid[row_index]}/>
      )}
    </div>
  )
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    var data = sampleData.English
    this.colorGrid = sampleData.colorCode
    this.wordGrid= []
    var initGrid = []
    for(let i=0; i<5; i++) {
      var nameArr = data.splice(0,5)
      this.wordGrid.push(nameArr)
      initGrid.push(new Array(5).fill("lightgray"))
    }
    this.state = {stateGrid:initGrid, blueTurn:true, bluePoint: 9, redPoint: 8, gameOver: false}
    this.handleClick = this.handleClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick() {
    this.setState({blueTurn: !this.state.blueTurn})
  }
  getkeyByValue(value) {
    var colorMap = {0: "dodgerblue", 1: "#D80000", 2: "peachpuff", 3:"black"}
    return(
      Object.keys(colorMap).find(key => colorMap[key] === value)
    )
  }
  handleClick(cellIndex) {
    var oldGrid = this.state.stateGrid.slice()
    var r = cellIndex[0]
    var c = cellIndex[1]
    var oldAgent = oldGrid[r][c]
    var newAgent = this.colorGrid[r][c]
    if (oldAgent === "lightgray") {
      var colorKey = this.getkeyByValue(newAgent)
      console.log(colorKey, newAgent)
      oldGrid[r][c] = newAgent
      this.setState({stateGrid: oldGrid})
    }
    switch(parseInt(colorKey)) {
      case 0: {
        if(this.state.blueTurn){
          this.setState({bluePoint: this.state.bluePoint - 1}) 
        }
        else {
          this.setState({bluePoint: this.state.bluePoint - 1, blueTurn: !this.state.blueTurn})
        }
        break;
      }
      case 1: {
        if(this.state.blueTurn){
          this.setState({redPoint: this.state.redPoint - 1, blueTurn: !this.state.blueTurn}) 
        }
        else {
          this.setState({redPoint: this.state.redPoint - 1})
        }
        break;
      }
      case 2: {
        this.setState({blueTurn: !this.state.blueTurn})
        break;
      }
      case 3: {
        this.setState({gameOver: !this.state.gameOver})
      }
    }
    console.log(this.state.bluePoint, this.state.redPoint)
  }
  render() {
    return (
      <div className="main-container">
        <h2>CODENAMES</h2>
        <hr/>
        <Status turn={this.state.blueTurn} blue={this.state.bluePoint} red={this.state.redPoint}
                handleButtonClick={this.handleButtonClick}/>
        <Board wordGrid={this.wordGrid} stateGrid={this.state.stateGrid} 
                handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Game;