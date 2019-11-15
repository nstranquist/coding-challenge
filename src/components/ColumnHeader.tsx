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
    <header style={{padding:'10px', backgroundColor: color, textAlign:'center', lineHeight:'1.5'}}>
      <h2 style={{margin:0,padding:0}}>{title}</h2>
    </header>
  )
}

export default ColumnHeader
