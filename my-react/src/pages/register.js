
import videobg from '../assets/ink.mp4'
import classes from './Video.module.css'
import Login from './login';
function Register() {
    return(
    <div>
      <Login/>
        <div className={classes.main}>
          <div className={classes.overplay}></div>
          <video src={videobg} type="video/mp4" loop autoPlay muted />
          <div className={classes.content}>
            <h1>Welcome</h1>
            <p>heyy!</p>
          </div>
        </div> 
    </div>  
    );
}
  
  export default Register;