import React from 'react';
import "./TotalCards.css";

function TotalCards({ items }) {
    console.log(items)
    return (
        <div className="mytotalCards" style={{backgroundColor: items.color}}>
            <div className="totalCards-wrap">{items?.suits} : {items?.card} </div>
        </div>
    )
}

export default TotalCards
