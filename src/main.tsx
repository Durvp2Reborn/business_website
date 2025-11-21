import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App, { NavBar } from "./App.tsx"
import Products from './Products.tsx'
//import Cart from './Cart.tsx'


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<App/>}/>
        <Route path="products" element={<Products/>}/>

      </Route>
    </Routes>
  </HashRouter>
)
