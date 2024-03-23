import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )

  // console.log(
  //   typeof React.createElement(
  //     'div',
  //     { className: 'app' },
  //     React.createElement('h1', { className: 'title', style: { color: 'red' } }, 'Hello, World!')
  //   )
  // )

  // return React.createElement(
  //   "div",
  //   { className: "app" },
  //   React.createElement(
  //     "h1",
  //     { className: "title", style: { color: "red" } },
  //     "Hello, World!"
  //   )
  // );
}

export default App
