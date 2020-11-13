import React, { useContext, useState } from 'react';
import './Training.css'
import Layout from '../../Hoc/Layout/Layout';
import {LoginContext} from '../../Context/login-context';
import { Redirect } from 'react-router-dom';
import Training from '../../Components/Training/Training';
import Modal from '../../Components/UI/Modal/Modal';

const training = () => {
    const loginContext = useContext(LoginContext);
    const [cityName, setCityName] = useState('');
    const [startDate, setStartdate] = useState('');
    
    const searchCityStartdate = () => {

    } 

    return(
        <div>
            <Layout />
            {!loginContext.isLogged && <Redirect to="/"/> }

            <div className="training">
                <section className="search">
                    <form onSubmit={searchCityStartdate}>
                        <label htmlFor="cityName">City</label>
                        <input type="text" id="cityName" value={cityName} 
                                onChange={event => setCityName(event.target.value)}/>
                        <button type="submit">Search</button>
                    </form>    
                </section>
            </div>

            <Training />
            
        </div>
    );
}

export default training;