import React, { useContext, useEffect, useState, useReducer } from 'react';
import './Training.css'
import Layout from '../../Hoc/Layout/Layout';
import {LoginContext} from '../../Context/login-context';
import { Redirect } from 'react-router-dom';
import Training from '../../Components/Training/Training';
import Modal from '../../Components/UI/Modal/Modal';
import useHttp from '../../Hooks/http';

const courseReducer = (currentCourse, action) => {
    switch(action.type){
      case 'SET':
        return action.courses;
      default: 
        throw new Error('Should not get there!');
    }
  }

const training = () => {
    const loginContext = useContext(LoginContext);
    const {isLoading, error, data, sendRequest} = useHttp(); 
    const [courseName, setCourseName] = useState('');
    const [trainingVisible, setTrainingVisible] = useState(false);
    const [courseList, dispatch] = useReducer(courseReducer, []);
    
    const searchTraining= (event) => {
        event.preventDefault();
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/searchtrainings',
            'POST', 
            {description: courseName}
        );
    } 

    useEffect( () => {
        if(!error && data){   
            setTrainingVisible(true);
            dispatch({type: 'SET', courses: data});
        }
    }, [data, error]); 

    return(
        <div>
            <Layout />
            {!loginContext.isLogged && <Redirect to="/"/> }

            <div className="training">
                <section className="search">
                    <form onSubmit={searchTraining}>
                        <label htmlFor="courseName">Course name:</label>
                        <input type="text" id="courseName" value={courseName} 
                                onChange={event => setCourseName(event.target.value)}/>
                        <button type="submit">Search</button>
                    </form>    
                </section>
            </div>

            {trainingVisible && <Training courseList={courseList}/>}
            
            
        </div>
    );
}

export default training;