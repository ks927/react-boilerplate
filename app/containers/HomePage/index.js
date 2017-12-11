/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Footer from 'components/Footer';
import Game from 'components/tic-tac-toe';
import Days from 'components/Days';
import styled from 'styled-components';

const Body = styled.div`
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
    text-align: center;
`

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
    return (
    <Body>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
        <p>This is my practice with the React boilerplate</p>
        <Days />
        <Game />
        <div>
            <Footer />
        </div>
    </Body>
    );
  }
}
