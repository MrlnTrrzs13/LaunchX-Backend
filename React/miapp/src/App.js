import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import './App.css';
import React from 'react';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

    const element = (
      <div className='App'>
        <header className='App-header'>
          <h1> La hora </h1>
          <h2> En México: {new Date().toLocaleTimeString('es-MX')}</h2>
          <h2> En Qatar: {qatar.toLocaleTimeString('es-MX')}</h2>

        </header>
      </div>
    );
  root.render(element);
};

export default App;