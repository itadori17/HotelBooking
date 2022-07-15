
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import About from './Components/Pages/About';
import Rooms from './Components/Pages/Rooms';
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';
import SinglePage from './Components/HomeSection/SubPages/SinglePage';


function App() {
  return (
    
       <div className="app">
      <Router>
       
        <Routes>
          <Route path='/' element={<Login/>}  />
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
