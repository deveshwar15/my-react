import classes from './Addstyle.module.css';

function Additem(props) {
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
            <button>MOVE TO PROFILE</button>
        </div>
    </li>
  }
  
  export default Additem;