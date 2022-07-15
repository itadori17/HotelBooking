
import './App.css';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import About from './Components/Pages/About';
 
import { BrowserRouter as Router,
  Routes,
  Route
  
  } from "react-router-dom";
import Gallery from './Components/Pages/Gallery';

import Destionations from './Components/Destionations/Home';
import SinglePage from './SinglePage/SinglePage';
import Reviews from './Components/Pages/Reviews/Reviews';


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
          <Route path='/rooms' element={<Destionations />} />
          <Route path='/singlepage/:id' element={<SinglePage/>} />
          <Route path='/reviews' element={<Reviews/>}  />
         
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
