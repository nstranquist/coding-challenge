import React from 'react'
import styled from 'styled-components'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

interface IProps {
  card: any
  isLeft?: boolean
  isRight?: boolean
  handleBack(id: string): void
  handleNext(id: string): void
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
    <CardWrapper>
      {!isLeft && (
        <LeftIconWrapper size="24px" onClick={() => handleBack(id)} style={{padding:'10px',margin:0,cursor:'pointer'}}/>
      )}
      <div style={{flex:'1'}}>{text}</div>
      {!isRight && (
        <RightIconWrapper size="24px" onClick={() => handleNext(id)} style={{padding:'10px',margin:0,cursor:'pointer'}}/>
      )}
    </CardWrapper>
  )
}

export default Card


const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 8px;
  margin-bottom: 0;
  background: white;
  text-align: center;
  box-shadow: 1px 4px 20px rgba(0,0,0,.08);
`
// const TextWrapper = styled.div`
//   line-height: 30px;
// `
const LeftIconWrapper = styled(FaAngleLeft)`
  cursor: pointer;
  border-radius: 50%;
  transition: .2s ease-in-out;
  &:hover {
    background: #EEE;
    transition: .2s ease-in-out;
  }
`
const RightIconWrapper = styled(FaAngleRight)`
  cursor: pointer;
  border-radius: 50%;
  transition: .2s ease-in-out;
  &:hover {
    background: #EEE;
    transition: .2s ease-in-out;
  }
`