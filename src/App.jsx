import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import Menu from './Pages/Menu'
import {Cart} from './Pages/Cart'
import Gallery from './Pages/Gallery';
import Preview from './Pages/Preview';
import Checkout from './Pages/Checkout';
import Modal from './Components/Modal';
import Payment from './Pages/Payment';






function App() {
  return (
    <Router>
  
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/menu' element = {<Menu/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/gallery' element = {<Gallery/>}/>
      <Route path = '/preview' element ={<Preview/>}/>
      <Route path = '/checkOut' element ={<Checkout/>}/>
      <Route path = '/modal' element ={<Modal/>}/>
      <Route path = '/payment' element ={<Payment/>}/>
      
      </Routes>

    </Router>
  );
}

export default App;
