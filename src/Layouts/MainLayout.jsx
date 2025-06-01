import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Pages/Footer'

const MainLayout = () => {
  return (
    <div>
        <header>
          <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout