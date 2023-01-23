import Navigation from './Navigation';

// import videobg from '../assets/ink.mp4'

import style from './Video.module.css'

function Login() {
    return(
      <section>
        <Navigation/>
        {/* <div className={style.main}>
            <div className={style.overplay}></div>
            <video src={videobg} type="video/mp4" loop autoPlay muted /> */}
            <div className={style.content}>
            <h1>If not YOU, who? If not now, when?</h1>
            <h3>Enjoy by Adding your Profiles!</h3>
            </div>
        {/* </div>  */}
      </section>
    );
}
  
  export default Login;