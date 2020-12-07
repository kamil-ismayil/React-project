import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component{

    render(){
        return(
            <div 
                className="modal"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}
            >  
                <h2> {this.props.customers.companyName} </h2>
                <h4> {this.props.customers.address} </h4> 
                <h4> {this.props.customers.zipCode} </h4> 
                <h4> {this.props.customers.city} </h4> 
            </div>
        );
    }
}

export default Modal;