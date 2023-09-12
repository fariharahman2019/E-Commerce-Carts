import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import CreateProduct from './components/CreateProduct/CreateProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
         
      </Routes>      
    </div>
  );
}

export default App;
