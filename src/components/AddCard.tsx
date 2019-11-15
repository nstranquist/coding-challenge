import React from 'react'


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
    <div>
      <a onClick={(e) => handleAddCard(e)}>+ Add Card</a>
    </div>
  )
}

export default AddCard
