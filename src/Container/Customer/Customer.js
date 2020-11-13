import React, { useContext, useState } from 'react';
import Layout from '../../Hoc/Layout/Layout';
import {LoginContext} from '../../Context/login-context';
import { Redirect } from 'react-router-dom';
import Customer from '../../Components/Customer/Customer';

const customer = () => {

    const loginContext = useContext(LoginContext);
    const [enteredCustomerName, setEnteredCustomerName] = useState('');

    const searchCustomer = (event) =>{
        event.preventDefault();

    }

    return(
        <div>
            <Layout />
            {!loginContext.isLogged && <Redirect to="/"/> }
            <div className="customer">
                <section className="search">
                    <form>
                        <label htmlFor="enteredCustomerName">Customer name</label>
                        <input type="text" id="enteredCustomerName" value={enteredCustomerName}
                            onChange= {event => setEnteredCustomerName(event.target.value) }/>
                        <button type="submit">Search</button>
                    </form>
                </section>
            </div>

            <Customer />
        </div>
    );

}

export default customer;