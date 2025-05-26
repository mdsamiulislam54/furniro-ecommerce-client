
import './App.css'
import Header from './components/Header/Header'
import Banner from './Pages/Banner'
import bnnerImg from './assets/banner.jpg'  
import About from './Pages/About'

function App() {


  return (
    <>
      <div>
      <main>
        <section style={{ backgroundImage: `url(${bnnerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="min-h-screen relative ">
          <Banner></Banner>
        </section>
        <section>
          <About/>
        </section>
      </main>
  
      </div>
    </>
  )
}

export default App
