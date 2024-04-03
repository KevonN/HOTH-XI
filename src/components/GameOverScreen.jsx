import React from 'react';
import '../App.css';

function GameOverScreen({ score }) {
    const handleRestart = () => {
        // Reload the page
        window.location.reload();
      };

    return (
      <div className="game-over-screen">
        <h2>Game Over!</h2>
        <p>Your final score: {score}</p>
        <button onClick={handleRestart}>Restart Game</button>
      </div>
    );
  }
  
  export default GameOverScreen; 