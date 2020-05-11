import React from 'react';
import { ChatVM } from './containers';
import { Container } from 'reactstrap';
import './App.scss';
import Section from 'components/Section';

function App() {
  return (
    <div className="App">
      <div className="headers">
        <Container>
          <Section title="Timeline post" />
        </Container>
      </div>
      <div className="body">
        <ChatVM />
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
