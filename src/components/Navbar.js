import React from 'react';
//import ReactDOM from 'react-dom/client';
 
export default function Navbar(props){
    return(
        <div className={props.darkMode ? "darkNav": "Navbar"}>
            <h3 className='Navbar_Logo'><i class="fa fa-bolt"></i>Lorem Ipsum</h3>
            <ul className='Navbar_List'>
                <li className='Navbar_Items'>Home</li>
                <li className='Navbar_Items'>About</li>
                <li className='Navbar_Items'>Contacts</li>
                <li className='Navbar_Items'>Services</li>
            </ul>
            
        </div>
    )
}