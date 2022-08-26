import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import MapTab from './MapTab';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapTab />} />
      </Routes>
      
    </>
     
  );
}

export default App;
