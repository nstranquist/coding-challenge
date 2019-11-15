import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // save to local storage
    console.log('columns:', columns)
    if(localStorage.getItem('column-0')) {
      console.log('column returned for column 1:', localStorage.getItem('column-0'))
      setColumns(prevCols => (prevCols.map((col, index) => {
        if (index === 0) return {...JSON.parse(localStorage.getItem('column-0')!) }
        return col;
      })))
      //setColumns(prevCols => ({...prevCols, [0]: JSON.parse(localStorage.getItem('column-0')!)}))
    }
    else {
      console.log('local storage didnt exist for item 1')
      localStorage.setItem('column-0', JSON.stringify(columns[0]))
    }

    if(localStorage.getItem('column-1'))
      setColumns(prevCols => (prevCols.map((col, index) => {
        if (index === 1) return {...JSON.parse(localStorage.getItem('column-1')!) }
        return col;
      })))
    else
      localStorage.setItem('column-1', JSON.stringify(columns[1]))

    if(localStorage.getItem('column-2'))
      setColumns(prevCols => (prevCols.map((col, index) => {
        if (index === 3) return {...JSON.parse(localStorage.getItem('column-3')!) }
        return col;
      })))
    else
      localStorage.setItem('column-2', JSON.stringify(columns[2]))

    if(localStorage.getItem('column-3'))
      setColumns(prevCols => (prevCols.map((col, index) => {
        if (index === 4) return {...JSON.parse(localStorage.getItem('column-4')!) }
        return col;
      })))
    else
      localStorage.setItem('column-3', JSON.stringify(columns[3]))

  }, []) // do this only once

  const addToColumn = (card: Card, colId: string) => {
    setColumns(columns.map((col, index) => {
      if(col.id === colId) {
        // replace the cards with new cards (or logic for replacing 1 card)
        let newCards = [...col.cards]
        newCards.push(card)
        col.cards = newCards
        // set local storage
        let oldCol = JSON.parse(localStorage.getItem(`column-${index}`)!)
        oldCol.cards = newCards
        localStorage.setItem(`column-${index}`, JSON.stringify(oldCol))
      }
      return col
    }))
  }

  const updateColumn = (cardId: string, colId: string, left:boolean=false) => {
    // set new cards for column
    setColumns(columns.map((col, index) => {
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
        let oldCol = JSON.parse(localStorage.getItem(`column-${index}`)!)
        oldCol.cards = newCards
        localStorage.setItem(`column-${index}`, JSON.stringify(oldCol))
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
        localStorage.setItem(`column-${i}`, JSON.stringify(newCols[i]))
        break
      }
      if(newCols[i].id === colId) {
        // set flag for next
        flag = true
      }
    }
    setColumns([...newCols])
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
        localStorage.setItem(`column-${i}`, JSON.stringify(newCols[i]))
        break
      }
      if(newCols[i].id === colId) {
        flag=true
      }
    }
    setColumns([...newCols])
    console.log('set new columns:', columns)
  }

  return (
    <AppWrapper>
      <BoardWrapper>
        {columns.map(col => (
          <Column column={col} addToColumn={addToColumn} updateColumn={updateColumn} />
        ))}
      </BoardWrapper>
    </AppWrapper>
    
  );
}

export default App;

const AppWrapper = styled.div`
  background: #ECEEEE;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
`
const BoardWrapper = styled.div`
  width: calc(100vw - 50px);
  display: flex;
  justify-content: center;
  margin-left: 25px;
`