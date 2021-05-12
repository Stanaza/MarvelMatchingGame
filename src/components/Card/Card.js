import React from "react";
import './Card.css'

const Card = ({flipped, value, flipCard, id, lookImg, opacity}) => {
    const opacityStyle = {
        opacity: `${opacity}`,
        transition: "opacity 1s"
    }
    return (
        <div
            className="card"
            onClick={() => flipCard(id)}
            key={id.toString()}
        >
            <div
                className="card-inner"
                style={{transform: flipped ? "rotateY(180deg)" : null}}
            >
                <div className="card-back">
                    <img src={value} alt='back' style={opacityStyle}/>
                </div>
                <div className="card-front">
                    <img src={lookImg} className='card-fg' alt='front'/>
                </div>
            </div>
        </div>
    );
}

export default Card;