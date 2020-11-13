import React, {Component, useState} from 'react';

export const LoginContext = React.createContext({
    isLogged: false,
    login: () => {},
    logout: () => {}
});

const loginContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (username, password) => {
        if(username === 'kamil' && password === 'kamil'){
            setIsLoggedIn(true);
        }
    }

    const logoutHandler = () =>{
        setIsLoggedIn(false);
    }

    return (
        <LoginContext.Provider value={{isLogged: isLoggedIn, login: loginHandler,logout: logoutHandler}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default loginContextProvider; 