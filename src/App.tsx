import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/App.css';
import { FirstPage } from './components/FirstPage';
import { SecondPage } from './components/SecondPage';
import { StartPage } from './components/StartPage';
import './components/App.css'
import { LoginPage } from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/login_page" element={<LoginPage/>} />
          <Route path="/main_page" element={<FirstPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
