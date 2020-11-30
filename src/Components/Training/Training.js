import React, {useState, useReducer, useContext, useEffect, useRef, useMemo} from 'react';
import './Training.css';
import useHttp from '../../Hooks/http';
import {LoginContext} from '../../Context/login-context';
import TrainingList from './TrainingList';

const appliedReducer = (currentTraining, action) => {
    switch(action.type){
      case 'SET':
        return action.trainings;
      default: 
        throw new Error('Should not get there!');
    }
  }

const training = (props) => {
    const loginContext = useContext(LoginContext);
    const {isLoading, error, data, sendRequest} = useHttp(); 
    const [appliedTrainings, dispatch] = useReducer(appliedReducer, []);
    let listOfAppliedTrainingsId = [];

    const listOfAppliedTrainings = () =>{
        sendRequest(
            'https://hobbyproject-2020.herokuapp.com/api/applyfortraining',
            'POST', 
            {employee_id: loginContext.username_emplId.employee_id, training_id: 0}
        );
    }

    const result = useMemo(() => {
        return (
            <TrainingList courseList={props.courseList} applied_list ={appliedTrainings} />
        );
    }, [appliedTrainings]); 

    useEffect(() => {
        if(data){
            const dataCopy = [...data];
            dataCopy.map(x => {
                listOfAppliedTrainingsId.push(x.training_id);
            });
            dispatch({type: 'SET', trainings: listOfAppliedTrainingsId});
            console.log(listOfAppliedTrainingsId);
        }else{
            listOfAppliedTrainings();
        }
    }, [data])

    return(
        <div>
            {result}
        </div>
    );
}

export default training;