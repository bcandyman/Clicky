import React, { Component } from "react";
import Col from './components/bootstrap/Col'
import Container from './components/bootstrap/Container'
import Row from './components/bootstrap/Row'
import Image from './components/Image/Image'
import Button from './components/bootstrap/Button'
import characters from './images'

class App extends Component {

  state = {
    guessedArray:[],
    BartSimpson: false,
    Bugs_Bunny: false,
    Foghorn_Leghorn: false,
    Fred_Flinstone: false,
    Garfield: false,
    Homer_Simpson: false,
    Jerry: false,
    Marvin: false,
    Peter_Griffin: false,
    Pink_Panther: false,
    Popeye: false,
    Scooby: false,
    Wile_E_Coyote: false,
    Score: 0,
    HighScore: 0,
  }

  isAlreadyGuessed = (id)=>{
    const currentArray = this.state.guessedArray;

    for(let i = 0; i < currentArray.length; i++){
      if(currentArray[i] ===id){
        return true;
      }
    }
    currentArray.push(id);
   this.setState({guessedArray: currentArray})
  }

  handleOnClick = (characterName) => {
    if (this.state[characterName] === true) {
      if (this.state.Score > this.state.HighScore) {
        this.setState({ HighScore: this.state.Score })
      }
      this.setState({
        BartSimpson: false,
        Bugs_Bunny: false,
        Foghorn_Leghorn: false,
        Fred_Flinstone: false,
        Garfield: false,
        Homer_Simpson: false,
        Jerry: false,
        Marvin: false,
        Peter_Griffin: false,
        Pink_Panther: false,
        Popeye: false,
        Scooby: false,
        Wile_E_Coyote: false,
        Score: 0,
      })
    } else {
      this.setState({
        [characterName]: true,
        Score: this.state.Score + 1
      })
    }
  }

  render() {
    return (
      <div className="App" >
        <Container>
          <Row>
            <Col className='col-6 text-center'>
              <h4>Score: {this.state.Score}</h4>
              <h4>High Score: {this.state.HighScore}</h4>
            </Col>
            <Col className='col-6 text-center'>
            </Col>
          </Row>
          <Row>
            {Object.keys(characters).map((character, index) => (
              <Col key={index} className="user-shadow text-center  col-sm-5 col-md-4 col-lg-3 p-3 col">
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
