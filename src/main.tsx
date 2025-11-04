import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { HashRouter, Route, Routes } from 'react-router'
import App, {NavBar} from "./App.tsx";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HashRouter>
          <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route index element={<App/>}/>

                </Route>
          </Routes>
      </HashRouter>


  </StrictMode>,
)
