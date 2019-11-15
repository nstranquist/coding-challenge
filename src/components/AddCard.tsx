import React from 'react'
import styled from 'styled-components'


interface IProps {
  handleClick(text: string): void
}

const AddCard: React.FC<IProps> = ({
  handleClick
}) => {

  const handleAddCard = (e: any) => {
    e.preventDefault()
    let text = window.prompt('Please enter text')
    handleClick(text!)
  }

  return (
    <AddCardWrapper>
      <CardButton onClick={(e) => handleAddCard(e)} >
        <span style={{marginRight: '3px'}}>+</span>
        Add Card</CardButton>
    </AddCardWrapper>
  )
}

export default AddCard


const AddCardWrapper = styled.div`
  margin: 5px;
  margin-top: 12px;
  `
  const CardButton = styled.a`
  cursor: pointer;
  color: #555;
  font-size: 18px;
  padding: 8px;
  display: inline-block;
`