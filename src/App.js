import React, { Component } from "react";
import Col from './components/bootstrap/Col'
import Container from './components/bootstrap/Container'
import Row from './components/bootstrap/Row'
import Image from './components/Image/Image'
import Button from './components/bootstrap/Button'
import characters from './images'
import Header from './components/Header'
import Jumbotron from "./components/bootstrap/Jumbotron/Jumbotron";

class App extends Component {

  state = {
    guessedArray: [],
    Score: 0,
    HighScore: 0,
  }

  handleOnClick = (characterName) => {
    // record currently guessed characters from state
    let alreadyGuessed = this.state.guessedArray
    // if the user guessed a character that had previously guessed
    if (alreadyGuessed.includes(characterName)) {
      // if the user set a high score
      if (this.state.Score > this.state.HighScore) {
        this.setState({ HighScore: this.state.Score })
      }
      // clear guessed characters and current score from state
      this.setState({
        guessedArray: [],
        Score: 0,
      })
    } else {
      // add guessed character to state
      alreadyGuessed.push(characterName);
      // record new state
      this.setState({
        guessedArray: alreadyGuessed,
        Score: this.state.Score + 1
      })
    }
  }

  randomizeColors = () => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = 'hsl(' + hue + ', 100%, 80%)';

    return { backgroundColor: pastel }
  }

  render() {
    return (
      <div className="App" >
        <Jumbotron />
        <Container>
          <Header>
            <Row className={'pt-5'}>
              <Col className='col-6 text-center'>
                <h4>Score: <span className='score'> {this.state.Score}</span></h4>
              </Col>
              <Col className='col-6 text-center'>
                <h4>High Score: <span className='score'> {this.state.HighScore}</span></h4>
              </Col>
            </Row>
          </Header>
          <Row>
            {Object.keys(characters).map((character, index) => (
              <Col key={index} style={this.randomizeColors()} className="user-shadow text-center  col-sm-5 col-md-4 col-lg-3 p-3 col">
                <Button className="no-focus-shadow" key={characters[character].id} dataName={character} handleOnClick={this.handleOnClick.bind(character)}>
                  <Image src={characters[character].image}></Image>
                </Button>
              </Col>
            )).sort(() => 0.5 - Math.random())}
          </Row>
        </Container>
      </div >
    );
  };
};

export default App;
