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
    const [username, setUsername] = useState('');
    const [username_employeeId, setUsername_employeeId] = useState([
        {
            username: "", 
            employee_id: ""
        }
    ]);

    const loginHandler = useCallback( (username, password) => {
        setUsername(username);
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/login',
            'POST', 
            {username: username, password: password}
        );
    }, [sendRequest]); 

    useEffect(() => {
        if(data){
            let newArr = [...username_employeeId];
            newArr.username = username;
            newArr.employee_id = data.id;

            //console.log("Username: " + newArr.username);
            //console.log("Employee Id: " + newArr.employee_id);

            setUsername_employeeId(newArr);
            setIsLoggedIn(true);
        }
    },[data]);

    const logoutHandler = () =>{
        setIsLoggedIn(false);
    }

    useEffect(() =>{
        
    } );

    return (
        <LoginContext.Provider value={{isLogged: isLoggedIn, login: loginHandler,logout: logoutHandler,
                    username_emplId: username_employeeId}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default loginContextProvider; 