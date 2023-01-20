
import { Routes } from 'react-router';
import { BrowserRouter,Route } from 'react-router-dom';
import LandingPage from "./pages/Landingpage";
import Login from './pages/login';
import Port from './pages/port';
import Register from './pages/register';
import Userdetails from './pages/userdetail';
import './App.css';

function App() {
  return (
    <div>
      {/* <video loop autoPlay muted>
         <source src={require('./assets/ink.mp4')} type="video/mp4"/>
      </video> */}
      <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/landing' element={<LandingPage/>}/>
            <Route path='/register' element={<Register></Register>}/>
            <Route path="/port" element={<Port/>}/>
            <Route path="/user" element={<Userdetails/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
