import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookingForm from './sections/BookingForm/BookingForm'
import Testimonials from './components/Testimonials/Testimonials'
import HeroSection from './sections/HeroSection/HeroSection'
import Popup from './components/Popup/Popup'
import { RootState } from './redux/store'
import { useSelector } from 'react-redux';

function App() {
  const { isPopUpVisible } = useSelector((state: RootState) => state.doctor);


  return (
    <>
    {isPopUpVisible &&  <Popup />}
      <Navbar />
     
      <main className='grid grid-cols-2 bg-[#060f17] relative' >
        {/* Overlay */}
        <div style={{ background: ' linear-gradient(180deg, rgba(255, 255, 255, 0) 72.21%, #060f17 95.42%)' }} className='absolute w-full h-full'> </div>
        <BookingForm />
        <HeroSection />
      </main>

      <Testimonials />
    </>
  )
}

export default App
