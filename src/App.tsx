import './App.css';
import PhysioView from './pages/PhysioView/PhysioView';
import Auth from './pages/Auth/Auth';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  

  return (
    <main className='bg-[#060f17] flex items-center justify-center '>
      <Router>
        <Routes>
          {/* --------------USER VIEW------------------ */}
          <Route path="/" element={<Auth/>} />
          <Route path="/physio" element={<PhysioView/>} />
          {/* <Route path="/operations" element={<PhysioView/>} /> */}
          {/* <Route path="/patient" element={<PhysioView/>} /> */}

         

    
         

        </Routes>
      </Router>
    </main>
  );
}

export default App;
