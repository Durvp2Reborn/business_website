import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router'
import App, { NavBar } from "./App.tsx"
import Products from './pages/Products'
import Cart from './pages/Cart'


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<App/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
    </Routes>
  </HashRouter>
)
