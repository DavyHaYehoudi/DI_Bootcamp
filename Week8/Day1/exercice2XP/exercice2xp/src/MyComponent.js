import React from 'react';
import logo from './logo.svg';
import './MyComponent.css';

const mystyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial'
}

const mySuperStyles = {
    color: 'yellow',
    fontSize: '16px',
    fontWeight: 'Bold',
    border: '1px solid yellow',
    backgroundColor: 'black',
    padding: '5px',
    borderRadius: '8px',
    cursor: 'pointer',
    marge: '10px'
}

const MyComponent = () => {
    return (
        <div>
            <header style = {{ color:'red',
                               backgroundColor:'deepskyblue' }} >
                <h1> This is a Header </h1>
            </header >
            <div style = { mystyle } ><h1> This is the second Header of exercice2 </h1>
            </div>
            <p className= "newStyle" > This is a paragraph </p>
            <form>
                <h2>This is a Form :</h2>
                <label name='formulaire'>Enter your name</label><br/>
                <input type='text'/>
                <input type='submit' value='Submit'/>
            </form>
            <img src={logo} className="App-logo" alt="logo" />
            <p>This is a List :</p>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            <button style = { mySuperStyles }> I'm a stylish button </button>
        </div>
    );
};

export default MyComponent;
