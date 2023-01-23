import { useContext } from 'react';

import classes from './Addstyle.module.css';
import FavoritesContext from '../../store/favorites';

function Additem(props) {
    const favoritesCtx=useContext(FavoritesContext); 
      
      const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id);
    function toggleFavoritesHandler(){
      if (itemIsFavorite){
        favoritesCtx.removeFavorite(props.id)
      } else{
        favoritesCtx.addFavorite({
            id: props.id,
            name: props.name,
            feedback:props.feedback,
            image: props.image,
            role: props.role,
            address:props.address,
        });
      }
    }
    return <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.name}/>
        </div>
        <div className={classes.content}>    
            <h3>NAME - {props.name}</h3>
            <h3>ROLE - {props.role}</h3>
            <address>ADDRESS - {props.address}</address>
            <p>FEEDBACK - {props.feedback}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoritesHandler}>{itemIsFavorite ? 'Move Back Again' : 'Move to Profile'}</button>
        </div>
    </li>
  }
  
  export default Additem;