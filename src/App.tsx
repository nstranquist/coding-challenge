import React, { useState } from 'react';
import styled from 'styled-components'
import uuidv4 from 'uuid'
import Column, { Card } from './components/Column'


const startingColumns = [
  {
    id: uuidv4(),
    title: 'Winnie',
    color: "#8E6E95",
    isLeft: true,
    cards: [
      { id:'fdklsjafsd', text: 'start at col1'},
      { id:'fasdfdfdf', text: 'start at col1'}
    ],
  },
  {
    id: uuidv4(),
    title: 'Bob',
    color: "#39A59C",
    cards: [
      { id:'afsdfsddsf', text: 'start at col2'},
      { id:'asfsdfsd', text: 'start at col2'}
    ],
  },
  {
    id: uuidv4(),
    title: 'Thomas',
    color: "#344759",
    cards: [
      { id:'asfsdfdsfds', text: 'start at col3'},
      { id:'ghhjfggd', text: 'start at col3'}
    ],
  },
  {
    id: uuidv4(),
    title: 'George',
    color: "#E8741E",
    isRight: true,
    cards: [
      { id:'gfhfhgfgfdg', text: 'start at col4'},
      { id:'hfyuyjhgs', text: 'start at col4'}
    ]
  },
]

const App: React.FC = () => {

  const [columns, setColumns] = useState(startingColumns)

  const addToColumn = (card: Card, colId: string) => {
    setColumns(columns.map(col => {
      if(col.id === colId) {
        // replace the cards with new cards (or logic for replacing 1 card)
        let newCards = [...col.cards]
        newCards.push(card)
        col.cards = newCards
      }
      return col
    }))
  }

  const updateColumn = (cardId: string, colId: string, left:boolean=false) => {
    // set new cards for column
    setColumns(columns.map(col => {
      if(col.id === colId) {
        // replace the cards with new cards (or logic for replacing 1 card)
        let newCards = [...col.cards]
        let cardIndex = newCards.findIndex(card => card.id === cardId)
        // dispatch move action using the newCards[cardIndex]
        if(left)
          sendCardBackward(colId, newCards[cardIndex])
        else 
          sendCardForward(colId, newCards[cardIndex])
        let cards = newCards.slice(0, cardIndex).concat(newCards.slice(cardIndex+1, col.cards.length))
        col.cards = cards
      }
      return col
    }))
  }

  const sendCardBackward = (colId: string, card: Card) => {
    console.log('card to send:', card)
    let newCols = columns
    let flag = false
    for(let i=newCols.length-1; i>=0; i--) {
      if(flag) {
        // add card to array
        newCols[i].cards.push(card)
        flag=false
        break
      }
      if(newCols[i].id === colId) {
        // set flag for next
        flag = true
      }
    }
    setColumns(newCols)
    console.log('set new columns:', columns)
  }

  const sendCardForward = (colId: string, card: Card) => {
    console.log('card to send:', card)
    let newCols = columns
    let flag=false
    for(let i=0; i<newCols.length; i++) {
      if(flag) {
        newCols[i].cards.push(card)
        flag=false
        break
      }
      if(newCols[i].id === colId) {
        flag=true
      }
    }
    setColumns(newCols)
    console.log('set new columns:', columns)
  }

  return (
    <div style={{background: '#ECEEEE', margin: '0', padding: '0', width: '100vw',
      minHeight:'100vh'}}>
      <BoardWrapper>
        {columns.map(col => (
          <Column column={col} addToColumn={addToColumn} updateColumn={updateColumn} />
        ))}
      </BoardWrapper>
    </div>
    
  );
}

export default App;

const BoardWrapper = styled.div`
  width: calc(100vw - 50px);
  display: flex;
  justify-content: center;
  margin-left: 25px;
`