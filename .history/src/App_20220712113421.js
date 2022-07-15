
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import About from './Components/Pages/About';
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
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
