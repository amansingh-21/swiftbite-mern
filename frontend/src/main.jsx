import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreContext } from './context/StoreContext.jsx'
import { food_list } from './assets/assets.js'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <StoreContext.Provider value={{food_list}}>
      <App />
   </StoreContext.Provider>
   </BrowserRouter>
)
