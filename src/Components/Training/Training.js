import React, {useState} from 'react';
import './Training.css';
import Modal from '../UI/Modal/Modal';

const training = (props) => {
    const [showModal, setShowModal] = useState(false);
    let modal = null;

    const setModal = () => {
        if(showModal){
            setShowModal(false);
            console.log("Modal is set to FALSE");
        }else{
            setShowModal(true);
            console.log("Modal is set to TRUE");
            modal = <Modal show={showModal} />
        }
    }   

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <div>
        <div className="main">
            <section className="trainingg" onClick={setModal}>
                <p>Event: </p>   
                <p>Short description: <strong>aaa</strong></p>
            </section>
            
        </div>
        <div>
            <Modal show={showModal} clicked={closeModal}/>
        </div>
        </div>
    );
}

export default training;