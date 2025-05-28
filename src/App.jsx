
import './App.css'
import Header from './components/Header/Header'
import Banner from './Pages/Banner'
import bnnerImg from './assets/banner.jpg'  
import About from './Pages/About'
import Category from './Pages/Category'
import TopProducts from './Pages/TopProducts'
import InspirationRooms from './Pages/InspirationRooms'
import Testimonial from './Pages/Testimonial'
import NewsLetter from './Pages/NewsLetter'

function App() {


  return (
    <>
      <div>
      <main>
        <section style={{ backgroundImage: `url(${bnnerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="min-h-screen relative ">
          <Banner></Banner>
        </section>
        <section>
          <Category/>
        </section>
        <section>
          <TopProducts/>
        </section>
        <section>
          <InspirationRooms/>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Testimonial/>
        </section>
        <section>
          <NewsLetter/>
        </section>
      </main>
  
      </div>
    </>
  )
}

export default App
