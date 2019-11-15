import React from 'react'

interface IProps {
  card: any
  isLeft?: boolean
  isRight?: boolean
  handleBack(id: number): void
  handleNext(id: number): void
}

const Card: React.FC<IProps> = ({
  card: {
    id,
    text
  },
  isLeft,
  isRight,
  handleBack,
  handleNext
}) => {



  return (
    <div style={{display:'flex', justifyContent:'space-between', background:'white', padding:'20px'}}>
      {!isLeft && (
        <button onClick={() => handleBack(id)}>Back</button>
      )}
      <div>{text}</div>
      {!isRight && (
        <button onClick={() => handleNext(id)}>Next</button>
      )}
    </div>
  )
}

export default Card
