import React from "react";

import Card from "../Card/Card";
import './GameBoard.css'

const GameBoard = ({cards, flipCard, lookImg}) => {
    return (
        <div className="board">
            {cards.map((card) => (
                <Card
                    flipped={card.flipped}
                    flipCard={flipCard}
                    value={card.value}
                    id={card.id}
                    lookImg={lookImg}
                    opacity={card.opacity}
                    key={card.id}
                />
            ))}
        </div>
    );
}
export default GameBoard