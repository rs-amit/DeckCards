import { Card } from '@material-ui/core';
import React from 'react';
import "./Cards.css";

function Cards({card}) {
    console.log(card)
    return (
        <div className="cards" style={{backgroundColor:card.color}}>
            <div className="card-wrap">
                {card?.suits}:{card?.card}
            </div>
        </div>
    )
}

export default Cards;
