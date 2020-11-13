import React, {useContext} from 'react';
import classes from './Toolbar.css';
import './Toolbar.css';
import NavigationItems from '../NavigationItems';
import {LoginContext} from '../../../Context/login-context';
import { Redirect } from 'react-router-dom';

const toolbar = (props) => {
    const loginContext = useContext(LoginContext);
    return (
        <header className="Toolbar">        
            <nav>
                <NavigationItems />
            </nav>    
                
            <div onClick={() => {
                console.log("Logout is clicked");
                loginContext.logout();
            }}>
                Log out
            </div>
        </header>
    );
};

export default toolbar;