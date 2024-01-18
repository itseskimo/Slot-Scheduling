import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookingForm from './sections/BookingForm/BookingForm'
import Testimonials from './components/Testimonials/Testimonials'
function App() {


  return (
    <>
      <Navbar />

      <div className=' grid grid-cols-2 bg-[#060f17] relative'>
       <section style={{background:' linear-gradient(180deg, rgba(255, 255, 255, 0) 72.21%, #060f17 95.42%)' }}  className='absolute w-full h-full'> </section>
        <BookingForm />
        <img src='./img/hh.png' className='h-[100vh]' />
      </div>
      <Testimonials/>
    </>
  )
}

export default App
