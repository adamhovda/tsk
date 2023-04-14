import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';


function App() {
  
  const [player1Score, setPlayer1Score] = useState("8000")
  const [player2Score, setPlayer2Score] = useState("8000")


  return (
    <div className="App">

        <Header 
                setPlayer1Score={setPlayer1Score}
                setPlayer2Score={setPlayer2Score}
                player1Score={player1Score}
                player2Score={player2Score}
        />
        <Scoreboard
                setPlayer1Score={setPlayer1Score}
                  setPlayer2Score={setPlayer2Score}
                  player1Score={player1Score}
                  player2Score={player2Score}
        />


    </div>
  );
}

export default App;
