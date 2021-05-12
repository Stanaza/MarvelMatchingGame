import React from "react";
import ModalWin from "../ModalWin/ModalWin";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import GameBoard from "../GameBoard/GameBoard";


const GamePlay = ({
                      modalWinActive,
                      setModalWinActive,
                      refreshGame,
                      seconds,
                      gameWon,
                      tries,
                      cards,
                      flipCard,
                      lookImg
                  }) => {
    return (
        <div className="game-container">
            {
                gameWon ?
                    <ModalWin
                        modalWinActive={modalWinActive}
                        setModalWinActive={setModalWinActive}
                        refreshGame={refreshGame}
                    />
                    :
                    null
            }
            <ScoreBoard gameWon={gameWon}
                        tries={tries}
                        seconds={seconds}
            />
            <GameBoard cards={cards} flipCard={flipCard} lookImg={lookImg}/>
        </div>

    );
}
export default GamePlay;