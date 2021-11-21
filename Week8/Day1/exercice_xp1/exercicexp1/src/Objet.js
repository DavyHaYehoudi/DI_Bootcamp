import React from 'react';

const Objet = (props) => {

    const { first_name,last_name } = props;

    return (
        <div>
            <h2>My name is {first_name}</h2>
            <h2>My lastname is {last_name} </h2>
        </div>
    );
};

export default Objet;