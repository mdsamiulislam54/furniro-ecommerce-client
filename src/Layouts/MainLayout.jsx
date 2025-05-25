import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router'

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
            
        </footer>
    </div>
  )
}

export default MainLayout