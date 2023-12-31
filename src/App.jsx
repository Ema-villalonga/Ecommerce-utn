import './App.css';
import { Routes , Route } from 'react-router-dom';
import { products } from './mocks/products.json';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import FormContact from './components/FormContact/FormContact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='products' element={<Products products={products} />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<FormContact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
