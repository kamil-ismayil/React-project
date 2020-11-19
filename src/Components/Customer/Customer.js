import React, { Component, useContext, useEffect, useState } from 'react';
import './Customer.css'
import Modal from '../UI/Modal/Modal';

const customer = (props) => {
    const [showModal, setShowModal] = useState(false);
    let modal = null;
    var obj;
    
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
    
    obj = {...props.foundCustomers};

    let customers = obj.id!=null ? (
        <div className="main">
            <section className="customer" onClick={setModal}>
                <h4> {obj.companyName}</h4>
                {obj.address + ", " + obj.zipCode + " " + obj.city} 
            </section>
        </div>
    ) : null; 

    return(
        <div >
            {customers}
                
            <div>
                <Modal show={showModal} clicked={closeModal} customers={obj} />
            </div>
        </div>
    );
}

export default customer; 