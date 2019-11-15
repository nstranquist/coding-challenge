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
  sendCard(card: any, forward: boolean): void
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
  sendCard,
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
    let cardIndex = cards.findIndex(item => item.id === id)
    let card = cards[cardIndex]
    let newCards = [...cards]
    setCards(newCards.slice(0, cardIndex).concat(newCards.slice(cardIndex+1, cards.length)))
    // send it to other column with next
    sendCard(card, false)
  }

  const handleNext = (id: number) => {
    // could check if already right-most
    let cardIndex = cards.findIndex(item => item.id === id)
    let card = cards[cardIndex]
    let newCards = [...cards]
    setCards(newCards.slice(0, cardIndex).concat(newCards.slice(cardIndex+1, cards.length)))
    // send it to other column with next
    sendCard(card, true)
  }

  return (
    <CardWrapper style={{width:'25%'}} className={``}>
      <ColumnHeader color={color} title={title} />
      <div>
        {cards.map(cardItem =>
          <Card handleBack={handleBack} handleNext={handleNext}
            isLeft isRight card={cardItem} />)}
      </div>
      <AddCard handleClick={handleClick} />
    </CardWrapper>
  )
}

export default Column

const CardWrapper = styled.div`
  flex: 1;
  margin-right: 25px;
`