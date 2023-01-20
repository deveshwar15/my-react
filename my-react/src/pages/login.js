import {Link} from "react-router-dom";

import classes from './Style.module.css';

// import videobg from '../assets/ink.mp4'
// import style from './Video.module.css'

function Login() {
    return (
        <div>
            <header className={classes.header}>
                <div  className={classes.logo}>TO BE TITLED</div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/Login">HOME</Link>
                            <Link to="/register">PROFILE</Link>
                            <Link to="/landing">CHECK ON!</Link>
                            <Link to="/user">ADD ON!</Link>
                            </li>                                                                       
                        </ul>
                    </nav>
            </header>
                {/* <div className={style.main}>
                <div className={style.overplay}></div>
                <video src={videobg} type="video/mp4" loop autoPlay muted />
                <div className={style.content}>
                <h1>Welcome</h1>
                <p>heyy!</p>
                </div>
            </div>  */}
        </div>
    );
  }
  
  export default Login;