import React, { Component, useContext, useState } from 'react';
import './Customer.css'

const customer = () => {

    return(
        <div >
            <div className="customer">
                <section className="search">
                    <label htmlFor="">Name</label>
                    <input type="text" readOnly/>
                    <label htmlFor="">Country</label>
                    <input type="text" readOnly/>
                    <label htmlFor="">District</label>
                    <input type="text" readOnly/>
                    <label htmlFor="">Area</label>
                    <input type="text" readOnly/>
                    <label htmlFor="">Org.nr</label>
                    <input type="text" readOnly/>
                </section>  
            </div>
        </div>
    );
}

export default customer; 