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
      </Routes>
    </Router>
  );
}

export default App;
