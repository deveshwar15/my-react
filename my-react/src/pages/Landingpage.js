import Login from "./login";

import Addlist from "../components/layout/Addlist";

import classes from './Style.module.css';

const DUMMY_DATA = [
    {
      id: 'm1',
      name: 'joe',
      role: 'System Architect',
      image:
        'https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg',
      address: '6th CrossStreet,J.P.Nagar,Banglore-6789045',
      feedback:
        'Need to develope more skills,Not up to level',
    },
    {
      id: 'm2',
      name: 'benny',
      role: 'Product Engineer',
      image:
        'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg',
      address: '6th CrossStreet,J.P.Nagar,Banglore-6789048',
      feedback:
        'That was a good interview',
    },
  ];

function Landingpage() {
    return (
      <div>
        <Login/>
        <section>
            <center><h1>CHECK ON AND MOVE!</h1></center>
            <hr className={classes.hr}></hr>
            <Addlist profiles={DUMMY_DATA}/>
        </section>
      </div>
    );
  }
  
  export default Landingpage;

