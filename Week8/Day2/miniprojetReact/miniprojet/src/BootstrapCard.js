import React from 'react';
import profilStar from './Star'
console.log('profil' ,profilStar);

const BootstrapCard = () => {
    return (
        <>
        <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={profilStar[0].imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{profilStar[0].title}</h5>
                <p className="card-text">{profilStar[0].descri}</p>
                <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
            </div>
        </div>
        <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={profilStar[1].imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{profilStar[1].title}</h5>
                <p className="card-text">{profilStar[1].descri}</p>
                <a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">Go to wikipedia</a>
            </div>
        </div>
        </>
    );
};

export default BootstrapCard;

