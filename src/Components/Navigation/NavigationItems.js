import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
        <ul className="NavigationItems">
            <NavigationItem link="/customer">Customer</NavigationItem>
            <NavigationItem link="/training">Training</NavigationItem>
            <NavigationItem link="/schedule">Schedule</NavigationItem>
        </ul>
);

export default navigationItems;