import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Test from './components/Test';
import New from './components/new';
import Load from './components/Load';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/test" element={<Test />} />
        <Route path="/new" element={<New />} />
        <Route path="/load" element={<Load />} />
      </Routes>
    </Router>
  );
}

export default App;
