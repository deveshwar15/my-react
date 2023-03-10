import { useContext,useEffect,useState } from 'react';

import classes from './Addstyle.module.css';
import FavoritesContext from '../../store/favorites';
import { Link, useNavigate } from 'react-router-dom';


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
    const navigate=useNavigate()
    function updateUser(id){
      navigate('/user/edit/'+id);
    }

    function deleteUser(id)
    {
      fetch(`http://localhost:8080/api/v1/profiles/${id}`,{
        method:'DELETE'
      }).then((result)=>{
        result.json().then((resp)=>{
          console.warn(resp)
          window.location.reload()
        })
      })
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
        <center>
        <div className={classes.dropdown}>
            <button  className={classes.dropbtn} onClick={toggleFavoritesHandler}>{itemIsFavorite ? 'Move Back Again' : 'Move to Profile'}</button>
            <div className={classes.dropdowncontent}>
             <center><button className={classes.dropbtn} onClick={()=>updateUser(props.id)}>UPDATE</button>
              <button className={classes.dropbtn} onClick={()=>deleteUser(props.id)}>DELETE</button></center>
            </div>
        </div></center>
    </li>
  }
  
  export default Additem;