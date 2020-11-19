import {useReducer, useCallback} from 'react';
import axios from 'axios';

const initialState = {
    error: null, 
    data: null, 
    loading: false
}

const httpReducer = (currHttpState, action) => {
    switch(action.type){
        case 'SEND':
          return {loading: true, error: null, data: null};
        case 'RESPONSE':
          return {...currHttpState, loading: false, data: action.responseData}; 
        case 'ERROR':
            return {loading: false, error: action.errorMessage};
        default: 
          throw new Error('Should not be reached!');
      }
}

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
    
    const sendRequest = useCallback( (url, method, body) => {  
        dispatchHttp({type: 'SEND'});
        let headers = {'Content-type': 'application/json', 'Accept': 'application/json'};    

        axios.post(url, body, headers)
        .then(response => { 
            dispatchHttp({type:'RESPONSE', responseData: response.data}); 
        })
        .catch(error => {{ dispatchHttp({type: 'ERROR', errorMessage: 'Something went wrong'}); }});
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error, 
        sendRequest: sendRequest
    };

}

export default useHttp;