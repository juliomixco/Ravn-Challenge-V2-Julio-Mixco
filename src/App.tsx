import React from 'react';
import logo from './logo.svg';
import './App.css';
import { H2, H2HighEmphasis, H2LowEmphasis } from './components/styled/Text';

function App() {
  return (
    <div className="App">
      <H2>H2 default</H2>
      <H2LowEmphasis>H2 low</H2LowEmphasis>
      <H2HighEmphasis>H2 high</H2HighEmphasis>
    </div>
  );
}

export default App;
