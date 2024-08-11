import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AdminPage from './Components/AdminPage/AdminPage.jsx'
import Home from './Components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout'
import AddFlashCard from './Components/AdminPage/AddFlashCard.jsx'
import AllFlashCards from './Components/AdminPage/AllFlashCards.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='admin' element={<AdminPage />}>
        <Route path='' element={<AllFlashCards/>}></Route>
        <Route path='addFlash' element={<AddFlashCard />}></Route>
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
