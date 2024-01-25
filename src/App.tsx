import './App.css';
import PhysioView from './pages/PhysioView/PhysioView';
import Auth from './pages/Auth/Auth';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {



  return (
    <Router>
      <Routes>
        {/* --------------USER VIEW------------------ */}
        <Route path="/" element={<Auth />} />
        <Route path="/physio" element={<PhysioView />} />
        {/* <Route path="/operations" element={<PhysioView/>} /> */}
        {/* <Route path="/patient" element={<PhysioView/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
