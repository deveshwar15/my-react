import { useState } from 'react';
import Box from '../components/layout/ui/Box';
import classes from './UserForm.module.css';

function UserForm(){
    const [name,setName]=useState("");
    const [role,setRole]=useState("");
    const [image,setImage]=useState("");
    const [address,setAddress]=useState("");
    const [feedback,setFeedback]=useState("");

    function submitHandler(event){
        event.preventDefault();
        setName('');
        setRole('');
        setImage('');
        setAddress('');
        setFeedback('');


        console.log('Received');
    }
  

    function Save()
    {
        let data={name,role,image,address,feedback}
        fetch("http://localhost:8080/api/v1/profiles",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
          }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn("result",result)
            })
        })
    }


    return(
        <Box>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" required id="name" value={name} onChange={(e)=>{setName(e.target.value)}} autoFocus/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="role">ROLE</label>
                    <input type="text" required id="role" value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">ADD IMAGE</label>
                    <input type="url" required id="image" value={image}  onChange={(e)=>{setImage(e.target.value)}}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">ADDRESS</label>
                    <input type="address" required id="address" value={address}  onChange={(e)=>{setAddress(e.target.value)}}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="feedback">FEEDBACK</label>
                    <textarea id='feedback' required rows='2' value={feedback}  onChange={(e)=>{setFeedback(e.target.value)}}></textarea>
                </div>
                <div className={classes.actions}>
                    <button onClick={Save}>SUBMIT</button>
                </div>
            </form>
        </Box>
    )
}

export default UserForm;