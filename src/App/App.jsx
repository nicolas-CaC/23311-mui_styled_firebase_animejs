import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Global/components/Navbar/Navbar'
import './App.css'
import { MainLayout } from '../Global/layouts/MainLayout'
import { Router } from '../Router/router'

export const App = () =>
  <BrowserRouter>

    <Navbar />
    <MainLayout>
      <Router />
    </MainLayout>

  </BrowserRouter>


