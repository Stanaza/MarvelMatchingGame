import React from 'react';
import './ScoreBoard.css'


const ScoreBoard = ({tries, seconds}) => {
    return (
        <div className="score-board">
            <div className="score">
                <p className="score-board-score">Time: {seconds}</p>
                <p className="score-board-score">Tries: {tries}</p>
            </div>
        </div>
    );
}
export default ScoreBoard;