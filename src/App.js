import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes >
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
