import './App.css';
import { Routes , Route } from 'react-router-dom';
import { products } from './mocks/products.json';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/products'  element={<Products />} products={products}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
