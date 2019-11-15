import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ColumnHeader from './ColumnHeader'
import Card from './Card'
import AddCard from './AddCard'

interface IProps {
  title: string
  color: string
  isLeft?: boolean
  isRight?: boolean
  colNumber: number
  sendCard(card: any): void
}

const startingCards = [
  {
    id: 0,
    text: 'first card'
  },
  {
    id: 1,
    text: 'second card'
  }
]

const Column: React.FC<IProps> = ({
  title,
  color,
  isLeft,
  isRight,
  colNumber,
  sendCard
}) => {
  // map through later
  const [cards, setCards] = useState(startingCards)

  //useEffect(() => {
//
  //})
  const handleClick = (text: string) => {
    let newCard = {
      id: cards.length,
      text
    }
    console.log('new card', newCard)
    let newCards = [...cards]
    newCards.push(newCard)
    setCards(newCards)
  }

  const handleBack = (id: number) => {
    // could check if already left-most
    // push to previous column
    // 1 get card from array, remove it
    let card = cards[id]
    let newCards = [...cards]
    setCards(newCards.splice(0, id-1).concat(newCards.splice(id+1, cards.length)))
    // send it to other column with next
    sendCard(card)
  }

  const handleNext = (id: number) => {
    // could check if already right-most

  }

  return (
    <div style={{width:'25%'}} className={``}>
      <ColumnHeader color={color} title={title} />
      <div>
        {cards.map(cardItem =>
          <Card handleBack={handleBack} handleNext={handleNext}
            isLeft isRight card={cardItem} />)}
      </div>
      <AddCard handleClick={handleClick} />
    </div>
  )
}

export default Column

const HeaderWrapper = styled.div`
  flex: 1;
  margin-right: 25px;
`