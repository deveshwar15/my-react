import Additem from "./Additem";
import classes from './Liststyle.module.css';

function Addlist(props){
    return<ul className={classes.list}>
        {props.profiles.map((profile)=> (<Additem Key={profile.id} 
        id={profile.id} image={profile.image} 
        name={profile.name} role={profile.role} 
        address={profile.address} feedback={profile.feedback}/>) )}
        </ul>
}

export default Addlist;