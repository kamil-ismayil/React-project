import React, {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import {LoginContext} from '../../Context/login-context';
import './Login.css';
import Signup from '../Signup/Signup';
import Modal from '../UI/Modal/Modal';
import Aux from '../../Hoc/Aux_/Aux_';

const login = (props) => {

    const loginContext = useContext(LoginContext);
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [show, setShow] = useState(false);
    
    const loginHandler = (event) => {
        loginContext.login(enteredUserName, enteredPassword);
        event.preventDefault();        
    }

    return (
        <section className="main-form">            
            {loginContext.isLogged ? <Redirect to="/customer"/> : <Redirect to="/"/>}
            
                <form onSubmit={loginHandler} >                
                    <div className="login">
                        <h2>Please login to continue..</h2>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={enteredUserName} 
                                onChange={event => setEnteredUserName(event.target.value)} />
                    </div>
                    <div className="login">
                        <label htmlFor="password">Password</label>           
                        <input type="password" id="password" value={enteredPassword} 
                                onChange={event => setEnteredPassword(event.target.value)} />
                        <button type="submit" >Sign in</button>        
                    </div> 
                </form>            
        </section>
    )
}

export default login; 
