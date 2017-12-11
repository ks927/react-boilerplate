import React from 'react';
//import ReactDOM from 'react-dom';
import Board from './board'
import calculateWinner from './calcWinner';
import styled from 'styled-components';

const GameInfo = styled.div`
    margin: auto;
    text-align: center;
`
const GameDiv = styled.div`
    display: flex;
    flex-direction: row;
    padding: 25px;
`
const GameBoard = styled.div`
    margin: auto;
`

// Game calls Board
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]) {
            return;
        }
        
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
      }
    
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    
  render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      let status;
        if(winner) {
            status = "Winner: " + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
      
      const moves = history.map((step, move) => {
          const desc = move ? 'Go to move # ' + move : 'Go to game start.'
          return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button> 
            </li>
          );
      })
      
    return (
      <GameDiv>
        <GameBoard>
          <Board squares={current.squares}
                 onClick={(i) => this.handleClick(i)}
        />
        </GameBoard>
        <GameInfo>
          <div>{status}</div>
          <ol>{moves}</ol>
        </GameInfo>
      </GameDiv>
    );
  }
}

export default Game;
// ========================================
/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/