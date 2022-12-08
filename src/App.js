import logo from './logo.svg';
import './App.css';
//import React from 'react';
import {Anchor} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Anchor>
        "Knopf"
      </Anchor>
     <Card> 
      "Das ist mein Knopf"
      <Button>
        "Knopf"
      </Button>
     </Card>
    </div>
  );
}

export default App;
