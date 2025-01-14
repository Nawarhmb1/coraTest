import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Set from './component/Set';
import Greeting from './component/Greeting';
import Login from './component/login'; 
import SignUp from './component/SignUp'; 
import Success from './component/Success'; 
import Menu from './component/Menu'; 
import Settings from './component/Settings'; 
import ConfirmSignOut from './component/ConfirmSignOut'; 
import Privacy from './component/Privacy'; 
import Services from './component/Services'; // استيراد صفحة الخدمات
import Booking from './component/Booking'; // استيراد صفحة الحجز
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/set" element={<Set />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/settings" element={<Settings />} />
        <Route path="/confirm-signout" element={<ConfirmSignOut />} />
        <Route path="/privacy" element={<Privacy />} /> 
        <Route path="/services" element={<Services />} /> {/* إضافة مسار لصفحة الخدمات */}
        <Route path="/booking" element={<Booking />} /> {/* إضافة مسار لصفحة الحجز */}
      </Routes>
    </Router>
  );
}

export default App;
