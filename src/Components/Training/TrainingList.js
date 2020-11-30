import React, {useState, useReducer, useContext, useEffect, useRef, useMemo} from 'react';
import './Training.css';
import classes from './Training.css';
import useHttp from '../../Hooks/http';
import {LoginContext} from '../../Context/login-context';

const TrainingList = (props) => {
    const {isLoading, error, data, sendRequest} = useHttp(); 
    const [activeIndex, setActiveIndex] = useState();
    const loginContext = useContext(LoginContext);

    const applyTrainingHandler = (id, index) => {
        console.log("Clicked training ID: " + id);
        console.log("Logged in user Id: " + loginContext.username_emplId.employee_id);
        
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/applyfortraining',
            'POST', 
            {employee_id: loginContext.username_emplId.employee_id, training_id: id}
        ); 
        setActiveIndex(index);   
    }
    
    return(
        <section className="training_main">
            <ul>
                {props.courseList.map( (ig, index) => (       
                    <section className = {activeIndex===index || props.applied_list.includes(ig.id)
                        ? "training_applied" : ""} key={ig.id}>
                        <li key={ig.id}>
                            <span>{ig.description}</span>
                            <span>{ig.city}</span>
                            <span>{ig.price}</span>
                            <button onClick={ () => applyTrainingHandler(ig.id, index)}>Apply</button>
                        </li>    
                    </section>
                ))}
            </ul>
        </section>
    );
}

export default TrainingList; 