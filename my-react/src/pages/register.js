import { useContext } from 'react';

import FavoritesContext from '../store/favorites';

import Addlist from '../components/layout/Addlist';
import Navigation from './Navigation';

function Register() {
  const favoritesCtx = useContext(FavoritesContext);
    return(
      <section>
        <Navigation/>
        <center><h1>ADDED PROFILES!</h1></center>
        <Addlist profiles={favoritesCtx.favorites}/>
      </section>
    );
}
  
  export default Register;