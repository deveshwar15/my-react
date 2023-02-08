import {Link} from "react-router-dom";

import classes from './Style.module.css';


function Navigation() {
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
        </div>
    );
  }
  
  export default Navigation;