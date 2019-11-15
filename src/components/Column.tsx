import React from 'react'
import styled from 'styled-components'
import ColumnHeader from './ColumnHeader'
import Card from './Card'
import AddCard from './AddCard'
import uuidv4 from 'uuid'

export interface Card {
  id: string
  text: string
}
export interface Column {
  id: string
  title: string
  color: string
  cards: Card[]
  isLeft?: boolean
  isRight?: boolean
}

interface IProps {
  column: Column
  updateColumn(id: string, colId: string, left?:boolean, right?:boolean): void
  addToColumn(newCard: Card, colId: string): void
}

const Column: React.FC<IProps> = ({
  column,
  addToColumn,
  updateColumn,
}) => {
  // could try to use state and set state here

  const handleClick = (text: string) => {
    let newCard = {
      id: uuidv4(),
      text
    }
    console.log('new card', newCard)
    addToColumn(newCard, column.id)
  }

  const handleBack = (id: string) => {
    updateColumn(id, column.id, true)
  }

  const handleNext = (id: string) => {
    updateColumn(id, column.id, false)
  }

  return (
    <CardWrapper style={{width:'25%'}} className={``}>
      <ColumnHeader color={column.color} title={column.title} />
      <div>
        {column.cards.map(cardItem =>
          <Card handleBack={handleBack} handleNext={handleNext}
            isLeft={column.isLeft} isRight={column.isRight} card={cardItem} />)}
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