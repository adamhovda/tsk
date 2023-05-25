import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './index.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';


function App() {

  const [player1Score, setPlayer1Score] = useState("8000")
  const [player2Score, setPlayer2Score] = useState("8000")
  const [gameType, setGameType] = useState('custom')


  return (
    <div className="App">

        <Header 
                setPlayer1Score={setPlayer1Score}
                setPlayer2Score={setPlayer2Score}
                player1Score={player1Score}
                player2Score={player2Score}
                gameType={gameType}
                setGameType={setGameType}
        />
        <Scoreboard screenOptions={{gestureEnabled: false}}
                setPlayer1Score={setPlayer1Score}
                  setPlayer2Score={setPlayer2Score}
                  player1Score={player1Score}
                  player2Score={player2Score}
                  gameType={gameType}
                  setGameType={setGameType}
        />


    </div>
  );
}

export default App;
