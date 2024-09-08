import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Pages/Home';
import Footer from './Components/Footer'
import Menu from './Pages/Menu'
import { Navbar } from './Components/Navbar';
import {Cart} from './Pages/Cart'
import Gallery from './Pages/Gallery';
import Preview from './Pages/Preview';





function App() {
  return (
    <Router>
      <Navbar/>
     <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/menu' element = {<Menu/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/gallery' element = {<Gallery/>}/>
      <Route path = '/preview' element ={<Preview/>}/>
      </Routes>
     </main>
   <Footer/>
    </Router>
  );
}

export default App;
