import React from 'react'

interface IProps {
  title: string
  color: string
}

const ColumnHeader: React.FC<IProps> = ({
  title,
  color
}) => {
  return (
    <header style={{height:'30px',backgroundColor: color}}>
      <h2>{title}</h2>
    </header>
  )
}

export default ColumnHeader
