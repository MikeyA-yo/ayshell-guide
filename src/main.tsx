import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'


import Home from "./components/home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Installation from './components/Installation';
import BuiltInCommands from './components/BuiltInCommands';
const router = createBrowserRouter([{
  path:'/',
  element:<Home/>,
  
},
 {
  path:'/installation',
  element:<Installation />
 }, 
 {
  path:'usage',
  element:<BuiltInCommands />
 }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
