
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register'
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom";

function App() {
  return (
    
       <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}  />
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
