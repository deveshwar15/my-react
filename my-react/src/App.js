
import { Routes } from 'react-router';
import { BrowserRouter,Route } from 'react-router-dom';
import LandingPage from "./pages/Landingpage";
import Login from './pages/login';
import Port from './pages/port';
import Register from './pages/register';
import Userdetails from './pages/userdetail';
import './App.css';
import { FavoritesContextProvider } from './store/favorites';
import Editdata from './components/Editdata';

function App() {
  return (
    <div>
      <FavoritesContextProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/Login" element={<Login/>}/>
              <Route path='/landing' element={<LandingPage/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path="/port" element={<Port/>}/>
              <Route path="/user" element={<Userdetails/>}/>
              <Route path='/user/edit/:id' element={<Editdata />} />
          </Routes>
        </BrowserRouter>
      </FavoritesContextProvider>
    </div>
  );
}

export default App;
