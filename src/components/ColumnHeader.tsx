import React from 'react'
import styled from 'styled-components'

interface IProps {
  title: string
  color: string
}

const ColumnHeader: React.FC<IProps> = ({
  title,
  color
}) => {
  return (
    <HeaderWrapper color={color}>
      <TitleWrapper>
        {title}</TitleWrapper>
    </HeaderWrapper>
  )
}

export default ColumnHeader


const HeaderWrapper = styled.header`
  padding: 10px;
  color: white;
  font-family: sans-serif;
  background-color: ${(props: any) => props.color}
  text-align: center;
  line-height: 1.5;
  line-height: 30px;
  max-height: 30px;
  `
  const TitleWrapper = styled.h2`
  font-weight: 500;
  margin: 0;
  line-height: 30px;
  font-size: 20px;
  padding: 0;
`