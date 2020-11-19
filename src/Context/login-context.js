import React, {useCallback, useEffect, useState} from 'react';
import useHttp from '../Hooks/http';

export const LoginContext = React.createContext({
    isLogged: false,
    login: () => {},
    logout: () => {}
});

const loginContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {isLoading, error, data, sendRequest} = useHttp(); 

    const loginHandler = useCallback( (username, password) => {
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/login',
            'POST', 
            {username: username, password: password}
        );
    }, [sendRequest]); 

    useEffect(() => {
        if(data){
            setIsLoggedIn(true);
        }
    },[data]);

    const logoutHandler = () =>{
        setIsLoggedIn(false);
    }

    useEffect(() =>{
        
    } );

    return (
        <LoginContext.Provider value={{isLogged: isLoggedIn, login: loginHandler,logout: logoutHandler}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default loginContextProvider; 