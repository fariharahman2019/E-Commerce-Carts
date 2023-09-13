import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import PrivateRoute from './components/Privateroute/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes >
          <Route path="/user/registration" element={<Register></Register>}/>
          <Route path="/user/login" element={<Login></Login>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
