// App.js
import {React,useEffect} from 'react';
import { BrowserRouter, Routes, Route ,useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import 'antd/dist/reset.css';
import Feedback from './pages/FeedBack';
import About from './pages/About';
import AdminHome from './pages/AdminHome';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import UserBookings from './pages/UserBookings';
import Adminlogin from './pages/Adminlogin';
import ThankYou from './pages/ThankYou';

const AuthenticatedApp = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('user');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/booking/:carId' element={<BookingCar />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path='/feedbackform' element={< Feedback />} />
        <Route path='/about' element={<About />} />
        <Route path='/addcar' element={<AddCar/>}/>
        <Route path='/editcar/:carid' element={<EditCar/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/userbookings' element={<UserBookings/>}/>
      </Routes>
    </div>
  );
};

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path="/*" element={<AuthenticatedApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

