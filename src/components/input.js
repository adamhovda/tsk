import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Input({player1Score, setPlayer1Score, player2Score, setPlayer2Score, player1, player2, gameType}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [InputScore, setInputScore] = useState(null)
    const [InputScore2, setInputScore2] = useState(null)


    function handleNumClick (e) {

       if (InputScore === null){
            setInputScore(e.target.value)
       } else if (InputScore.length < 4){
        setInputScore(InputScore + (e.target.value))
       }

    }

    function handleNumClick2 (e) {
        if (InputScore2 === null){
             setInputScore2(e.target.value)
        } else if (InputScore2.length < 4){
         setInputScore2(InputScore2 + (e.target.value))
        }
 
     }

    function handleAddition(){
        if (InputScore){
        let score = parseInt(player1Score)
        let inputScore = parseInt(InputScore)
        setPlayer1Score(score + inputScore)
        setInputScore(null)
        }
    }

    function handleSubtraction(){
        if (InputScore){
        let score = parseInt(player1Score)
        let inputScore = parseInt(InputScore)
        let newScore = score - inputScore
        setPlayer1Score()
            if (newScore <= 0){
                setPlayer1Score(newScore)
                setInputScore( `${player2} Wins!`)
                handleShow()


            } else {
            setPlayer1Score(newScore)    
            setInputScore(null)
            }
        } 
    }
// second input funciotion
    function handleAddition2(){
        if (InputScore2){
        let score = parseInt(player2Score)
        let inputScore = parseInt(InputScore2)
        setPlayer2Score(score + inputScore)
        setInputScore2(null)
        }
    }

    function handleSubtraction2(){
        if (InputScore2){
        let score = parseInt(player2Score)
        let inputScore = parseInt(InputScore2)
        let newScore = score - inputScore
        setPlayer2Score()
            if (newScore <= 0){
                setPlayer2Score(newScore)
                setInputScore2( `${player1} Wins!`)
                handleShow()
            } else {
            setPlayer2Score(newScore)    
            setInputScore2(null)
            }
        }
    }

    function handleClear(){
        setInputScore(null)
        setInputScore2(null)
    }

    function playAgain(){
        switch(gameType){
            case 'yugioh':
                setPlayer1Score('8000')
                setPlayer2Score('8000')
                break;
            case 'magic':
                setPlayer1Score('20')
                setPlayer2Score('20')
                break;
            case 'pokemon':
                setPlayer1Score('0')
                setPlayer2Score('0')
                break;
            default:   
            setPlayer1Score('10000')
            setPlayer2Score('10000')

        }
        handleClose();
        setInputScore(null)
        setInputScore2(null)

    }

    // function verifyName(player){
    //     if (player === null) {
    //         <h1>Enter players name</h1>
    //     } else {
    //         <h1>{player}</h1>
    //     }
    // }


    return(
        <>

    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Congrats!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{InputScore}{InputScore2}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={playAgain}>
            Play Again
          </Button>
        </Modal.Footer>
    </Modal>
            {/* <h1>Input 1</h1>
            <h2>{InputScore}</h2>
            <div>

                <button name='nine' value={9} onClick={handleNumClick}>9</button>
                <button name='eight' value={8} onClick={handleNumClick}>8</button>
                <button name='seven' value={7} onClick={handleNumClick}>7</button>
                <button name='six' value={6} onClick={handleNumClick}>6</button>
                <button name='five' value={5} onClick={handleNumClick}>5</button>
                <button name='four' value={4} onClick={handleNumClick}>4</button>
                <button name='three' value={3} onClick={handleNumClick}>3</button>
                <button name='two' value={2} onClick={handleNumClick}>2</button>
                <button name='one' value={1} onClick={handleNumClick}>1</button>
                <button name='zero' value={0} onClick={handleNumClick}>0</button>
                <button name='add' onClick={handleAddition}>+</button>
                <button name='subtract' onClick={handleSubtraction}>-</button>
            </div> */}

    <Carousel interval={null} indicators={false}>
      <Carousel.Item>
      <h1 className='playerNameOutput'>{player1}</h1>

            <h2 className='scoreOutput'>{InputScore}</h2>
            <Container className='numpad numpadP1'>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='nine' value={9} onClick={handleNumClick}>9</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='eight' value={8} onClick={handleNumClick}>8</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='seven' value={7} onClick={handleNumClick}>7</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='six' value={6} onClick={handleNumClick}>6</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='five' value={5} onClick={handleNumClick}>5</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='four' value={4} onClick={handleNumClick}>4</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='three' value={3} onClick={handleNumClick}>3</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='two' value={2} onClick={handleNumClick}>2</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='one' value={1} onClick={handleNumClick}>1</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='zero' size="lg" value={0} onClick={handleNumClick}>0</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='clear' size="lg" onClick={handleClear}>clear</Button></Col>

                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='add' size="lg" onClick={handleAddition}>+</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='light' name='subtract' size="lg" onClick={handleSubtraction}>-</Button></Col>
                </Row>


            </Container>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item >
      <h1 className='playerNameOutput'>{player2}</h1>
            <h2 className='scoreOutput'>{InputScore2}</h2>
            {/* <div>

                <button name='nine' value={9} onClick={handleNumClick2}>9</button>
                <button name='eight' value={8} onClick={handleNumClick2}>8</button>
                <button name='seven' value={7} onClick={handleNumClick2}>7</button>
                <button name='six' value={6} onClick={handleNumClick2}>6</button>
                <button name='five' value={5} onClick={handleNumClick2}>5</button>
                <button name='four' value={4} onClick={handleNumClick2}>4</button>
                <button name='three' value={3} onClick={handleNumClick2}>3</button>
                <button name='two' value={2} onClick={handleNumClick2}>2</button>
                <button name='one' value={1} onClick={handleNumClick2}>1</button>
                <button name='zero' value={0} onClick={handleNumClick2}>0</button>
                <button name='add' onClick={handleAddition2}>+</button>
                <button name='subtract' onClick={handleSubtraction2}>-</button>
            </div> */}

            <Container className='numpad numpadP2'>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='nine' value={9} onClick={handleNumClick2}>9</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='eight' value={8} onClick={handleNumClick2}>8</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='seven' value={7} onClick={handleNumClick2}>7</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='six' value={6} onClick={handleNumClick2}>6</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='five' value={5} onClick={handleNumClick2}>5</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='four' value={4} onClick={handleNumClick2}>4</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='three' value={3} onClick={handleNumClick2}>3</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='two' value={2} onClick={handleNumClick2}>2</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='one' value={1} onClick={handleNumClick2}>1</Button></Col>
                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='zero' size="lg" value={0} onClick={handleNumClick2}>0</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='clear' size="lg" onClick={handleClear}>clear</Button></Col>

                </Row>
                <Row>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='add' size="lg" onClick={handleAddition2}>+</Button></Col>
                    <Col><Button className='w-100 mb-2 pt-3 pb-3' variant='dark' name='subtract' size="lg" onClick={handleSubtraction2}>-</Button></Col>
                </Row>


            </Container>

      </Carousel.Item>

    </Carousel>
    <h5>swipe to switch turns</h5>
        </>
    )
}

export default Input