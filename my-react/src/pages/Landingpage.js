import { useEffect, useState } from "react";

import Navigation from "./Navigation";
import Addlist from "../components/layout/Addlist";

import classes from './Style.module.css';

import { keyboard } from "@testing-library/user-event/dist/keyboard";
function Landingpage() {
  
  const [isLoading, setIsLoading]=useState(true);
  const [loadedProfile,setLoadedProfile]=useState([])

  useEffect(()=>{
    setIsLoading(true);
    fetch("http://localhost:8080/api/v1/profiles").then((response)=>{
      return response.json();
    }).then((data)=>{
        const profiles= [];

        for(const Key in data){
          const profile={
            id:Key,
            ...data[Key]
          };

          profiles.push(profile);
        }



      setIsLoading(false);
      setLoadedProfile(profiles);
    });
  },[]);


  if (isLoading){
    return(
      <section>
        <p>PLEASE WAIT A MOMENT!</p>
      </section>
    )
  }
    return (
      <div>
        <Navigation/>
        <section>
            <center><h1 className={classes.text}>CHECK ON AND MOVE!</h1></center>
            <Addlist profiles={loadedProfile}/>
        </section>
      </div>
    );
  }
  
  export default Landingpage;

