import React from 'react';
import Game from './index';
import Square from './square';
import styled from 'styled-components';

const Wrapper = styled.div`
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
    text-align: center;
`

const BoardRow = styled.div`
    clear: both;
    content: "";
    display: table;
`

// Board calls Square
class Board extends React.Component {

  renderSquare(i) {
    return (
        <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    );
  }

  render() {    
    return (
      <Wrapper>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </Wrapper>
    );
  }
}

export default Board;