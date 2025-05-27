import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Login from './pages/login';
import Footer from './components/footer';
import Home from './pages/home'
import Truck from './pages/truck'
import Driver from './pages/driver';
import Fuel from './pages/fuel';
import Payment from './pages/payment';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
         <Header/>
           
           <Routes>
           <Route exact path='/login' element={<Login/>}/>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/truck' element={<Truck/>}/>
           <Route exact path='/driver' element={<Driver/>}/>
           <Route exact path='/fuel' element={<Fuel/>}/>
           <Route exact path='/payment' element={<Payment/>}/>
           </Routes>
        <Footer/>

        
      </Router>
    </div>
  );
}

export default App;
