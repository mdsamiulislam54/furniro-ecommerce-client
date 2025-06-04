import React from 'react'
import Header from '../components/Header/Header'
import { Outlet, useLocation } from 'react-router'
import Footer from '../Pages/Footer'

const MainLayout = () => {
  const {pathname} = useLocation()

 
  return (
    <div>
        <header>
          <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className={`${pathname==="/*" ? "hidden":"block"}`}>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout