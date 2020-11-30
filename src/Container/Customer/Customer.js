import React, { useContext, useEffect, useReducer, useState } from 'react';
import Layout from '../../Hoc/Layout/Layout';
import {LoginContext} from '../../Context/login-context';
import { Redirect } from 'react-router-dom';
import Customer from '../../Components/Customer/Customer';
import useHttp from '../../Hooks/http';
import './Customer.css';
 
const customerReducer = (currentCustomers, action) => {
    switch(action.type){
      case 'SET':
        return action.customers;
      default: 
        throw new Error('Should not get there!');
    }
  }
 
const customer = React.memo( (props) => {
    const {isLoading, error, data, sendRequest} = useHttp(); 
    const loginContext = useContext(LoginContext);
    const [searchCustomer, setSearchCustomer] = useState('');
    const [foundCustomers, dispatch] = useReducer(customerReducer, []);
    
    const onSearchCustomer = (event) =>{
        event.preventDefault();
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/searchcustomers',
            'POST', 
            {name: searchCustomer}
        );
    }   

    useEffect( () => {
        if(!error && data){   
            //console.log(JSON.stringify(data));
            dispatch({type: 'SET', customers: data});
        }
    }, [data, error]);

    return(
        <div>
            <Layout />
            {!loginContext.isLogged && <Redirect to="/"/> }
            <div className="customer">
                <section className="search">
                    <form onSubmit={onSearchCustomer}>
                        <label htmlFor="enteredCustomerName">Customer name</label>
                        <input type="text" id="searchCustomer" value={searchCustomer}
                            onChange= {event => setSearchCustomer(event.target.value) }/>
                        <button type="submit">Search</button>
                    </form>
                </section>
            </div>

            <Customer foundCustomers={foundCustomers}/>
                  
        </div>
    );

})

export default customer;