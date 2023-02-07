import { Routes, Route } from 'react-router-dom';
import ReserveTable from './ReserveTable';
import Login from './Login';
import Testimonials from './Testimonials';
import About from './About';
import { useState } from 'react';

function Main() {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  return (
    <main>
      <Routes>
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservation" element={<ReserveTable startDate={startDate} setStartDate={setStartDate} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;