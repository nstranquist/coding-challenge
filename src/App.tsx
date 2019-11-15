import React, { useState } from 'react';
import styled from 'styled-components'
import Column from './components/Column'


const App: React.FC = () => {

  //const [columns, setColumns] = useState([])

  const sendCard = (card: any) => {
    // work
  }

  return (
    <div style={{background: '#ECEEEE', margin: '0', padding: '0', width: '100vw',
      minHeight:'100vh'}}>
      <BoardWrapper>
        <Column sendCard={sendCard} colNumber={0} isLeft color="#8E6E95" title="Winnie" />
        <Column sendCard={sendCard} colNumber={1} color="#39A59C" title="Bob" />
        <Column sendCard={sendCard} colNumber={2} color="#344759" title="Thomas" />
        <Column sendCard={sendCard} colNumber={3} isRight color="#E8741E" title="George" />
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