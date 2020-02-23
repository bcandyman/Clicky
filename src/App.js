import React from "react";
import Col from './components/bootstrap/Col'
import Container from './components/bootstrap/Container'
import Row from './components/bootstrap/Row'
import Image from './components/Image/Image'
import Button from './components/bootstrap/Button'
import * as characters from './images'

function App() {
  const characterArr = [];

  let id = 0
  for (const character in characters) {
    characterArr.push({
      character: character,
      id: id++,
      path: characters[character],
      clicked: false,
    })
  }

  const handleOnClick = (id) => console.log(id)

  return (
    <div className="App" >
      <Container>
        <Row>
          {characterArr.map((character, index) => (
            <Col key={index} className="text-center  col-sm-5 col-md-4 col-lg-3 p-3">
              <Button key={index} dataId={character.id} dataName={character.character} handleOnClick={handleOnClick}>
                <Image src={character.path} name={character.character}></Image>
              </Button>
            </Col>
          )).sort(() => 0.5 - Math.random())}
        </Row>
      </Container>
    </div >
  );
};

export default App;
