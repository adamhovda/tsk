import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import genericCardHeader from './../cardsHeader.png';
import yugiohCardHeader from './../yugiohcardback.jpg';
import magicCardHeader from './../magiccardback.jpg';
import pokemonCardHeader from './../pokemoncardback.jpg'
import { useState } from 'react';


function Header({player1Score, setPlayer1Score, player2Score, setPlayer2Score, player1, player2, setGameType, gameType}){

    

    const [cardHeader, setCardHeader] = useState(genericCardHeader)
 

    function handleMagicScore() {
        setPlayer1Score(`20`)
        setPlayer2Score(`20`)
        setCardHeader(magicCardHeader)
        setGameType("magic")
    }

    function handleYugiohScore() {
        setPlayer1Score(`8000`)
        setPlayer2Score(`8000`)
        setCardHeader(yugiohCardHeader)
        setGameType("yugioh")

    }

    function handlePokemonScore() {
        setPlayer1Score(`0`)
        setPlayer2Score(`0`)
        setCardHeader(pokemonCardHeader)
        setGameType("pokemon")
    }

    function handleCustomScore(){
        setPlayer1Score(`10000`)
        setPlayer2Score(`10000`)
        setCardHeader(genericCardHeader)
        setGameType("custom")
    }

    return (
        <Container className='header'>
            <Row>
                <Col>
                    <h1>TSK</h1>
                </Col>
                <Col>
                    <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Choose Game <img className='cardHeader' alt='cards' src={cardHeader}></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={handleYugiohScore}>Yu-gi-oh</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={handleMagicScore}>Magic</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={handlePokemonScore}>Pokemon</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={handleCustomScore}>Custom</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    )
    

}


export default Header