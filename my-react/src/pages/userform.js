import Box from '../components/layout/ui/Box';
import classes from './UserForm.module.css';

function UserForm(){


    function submitHandler(event){
        event.preventDefault();
    }

    return(
        <Box>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" required id="name"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="role">ROLE</label>
                    <input type="text" required id="role"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">ADD IMAGE</label>
                    <input type="url" required id="image"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">ADDRESS</label>
                    <input type="url" required id="address"/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="feedback">FEEDBACK</label>
                    <textarea id='feedback' required rows='5'></textarea>
                </div>
                <div className={classes.actions}>
                    <button>SUBMIT</button>
                </div>
            </form>
        </Box>
    )
}

export default UserForm;