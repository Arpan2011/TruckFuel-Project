
import './App.css';
import Login from './pages/login';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Home from './pages/home';
import Ddetails from './pages/ddetails';
import Viewdd from './pages/viewdd';
import Tdetails from './pages/Tdetails';
import Viewtd from './pages/Viewtd';
import Fdetails from './pages/fdetails';
import Viewfd from './pages/viewfd';
import Pdetails from './pages/pdetails';
import Viewpd from './pages/Viewpd';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
         <Header/>
           
           <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Ddetails' element={<Ddetails/>}/>
            <Route exact path='/Viewdd' element={<Viewdd/>}/>
            <Route exact path='/Tdetails' element={<Tdetails/>}/>
            <Route exact path='/Viewtd' element={<Viewtd/>}/>
            <Route exact path='/Fdetails' element={<Fdetails/>}/>
            <Route exact path='/Viewfd' element={<Viewfd/>}/>
            <Route exact path='/Pdetails' element={<Pdetails/>}/>
            <Route exact path='/Viewpd' element={<Viewpd/>}/>
           </Routes>
        <Footer/>

        
      </Router>
      
      
    </div>
  );
}

export default App;
