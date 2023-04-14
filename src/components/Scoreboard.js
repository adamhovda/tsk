import React, {useState} from 'react';
import Input from './input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Scoreboard({player1Score, setPlayer1Score, player2Score, setPlayer2Score}){

    const [player1, setPlayer1] = useState("")
    const [player2, setPlayer2] = useState("")
    // const [player1Score, setPlayer1Score] = useState("8000")
    // const [player2Score, setPlayer2Score] = useState("8000")


const handleFormSubmit = (event => {
    event.preventDefault()
    let $player1 = document.getElementById('player1')
    let $submit1 = document.getElementById("submit1")
    if ($submit1.innerHTML === 'OK'){
        $submit1.innerHTML = 'Edit';
        $player1.setAttribute("readOnly", "true");
        }
    else if ($submit1.innerHTML === 'Edit') {
        $submit1.innerHTML = 'OK';
        $player1.removeAttribute("readOnly");
        }
    setPlayer1(`${player1}`)

})

const handleFormSubmit2 = (event => {
    event.preventDefault()
    let $player2 = document.getElementById('player2')
    let $submit2 = document.getElementById("submit2")
    if ($submit2.innerHTML === 'OK'){
        $submit2.innerHTML = 'Edit';
        $player2.setAttribute("readOnly", "true");
        }
    else if ($submit2.innerHTML === 'Edit') {
        $submit2.innerHTML = 'OK';
        $player2.removeAttribute("readOnly");
        }
    setPlayer2(`${player2}`)

})

    return (
        <>
            <div>
                {/* <h1>Scoreboard</h1> */}
                <Container>
                    <Row>
                        <Col>
                            <form className='playerName' onSubmit={handleFormSubmit}>
                            <input name='player1' id='player1' value={player1} placeholder='Player 1' onChange={(e) => setPlayer1(e.target.value)}></input>
                            <Button className='nameSubmit' type='submit' id='submit1'>OK</Button>
                            </form>
                            <h2 className='playerScore'>{player1Score}</h2>
                        </Col>
                        <Col>
                            <form className='playerName' onSubmit={handleFormSubmit2}>
                            <input name='player2' id='player2' value={player2} placeholder='Player 2' onChange={(e) => setPlayer2(e.target.value)}></input>
                            <Button className='nameSubmit' type='submit' id='submit2'>OK</Button>
                            </form>
                            <h2 className='playerScore'>{player2Score}</h2>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div>
                <Input 
                setPlayer1Score={setPlayer1Score}
                setPlayer2Score={setPlayer2Score}
                player1Score={player1Score}
                player2Score={player2Score}
                player1={player1}
                player2={player2}
                />
            </div>
        </>
    )

}


export default Scoreboard