import "./App.css";
import React, { useState } from 'react';
import { cardsArray } from "./utilis/data";
import Cards from "./componant/Cards";
import TotalCards from "./componant/TotalCards"


export default function App() {

  const [pickCard, setPickCard] = useState([]);
  const [allCards, setAllCards] = useState(cardsArray);


  function pickFIveCards() {
    if (allCards.length !== 0) {
      let randomItem = []
      let newCardsArray = [...allCards]

      for (let i = 0; i < 5 && newCardsArray.length; i++) {
        const item = newCardsArray[Math.floor(Math.random() * newCardsArray.length)];
        randomItem.push(item)
        newCardsArray = newCardsArray.filter(element => element.index !== item.index)
      }
      setPickCard(randomItem)
      // setPickCard((cards) => [...cards, ...randomItem])
      setAllCards(newCardsArray)

    }
  }
  console.log(allCards)
  console.log(pickCard)

  function resetFunc() {
    setPickCard([])
    setAllCards(cardsArray)
  }

  return (
    <div className="app">
      <div className="app-wraper">
        {
          allCards.map((item) => {
            return (
              <div className="totalCards">
                <TotalCards items={item} />
              </div>
            );
          })
        }

      </div>
      <button className="btn" onClick={pickFIveCards}> drawCard</button>
      <button className="reset" onClick={resetFunc}>reset</button>
      <div className="grid">
        {
          pickCard.map((card) => {
            return <Cards card={card} />
          })
        }

      </div>
    </div>
  )
}
