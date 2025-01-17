// Code avant le routage avec react-router-dom
// --------------------------------------------------------------------
// import React from 'react';
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import TotArcher1 from './Tot_archer1';
import './Cible.css'

const Cible = () => {
    const navigate = useNavigate();
    const colors = [ "#ff4d4d", "#05b876", "#06a8da", "#ced205", "#9d02a5", "#c66e02"];

    // Récupérer les archers depuis localStorage
    const archers = JSON.parse(localStorage.getItem('archers')) || [];

    // constante pour naviguer vers Tot_archer1.jsx
    const handleStart = () => {
        navigate('/TotArcher1');
    };
    const handleBack = () => {
        navigate('/');
    };
   
    return (

        // <Routes> 
        //     <Route path="/" element={                       
                <div className='cible-container'> 
                    <header className='cible-header'>
                        Cible n°
                    </header> 

                    <div className="button-point">
                        <button className="vingt">20</button>
                        <button className="quinze">15</button>
                        <button className="dix">10</button>
                        <button className="zero">0</button>
                    </div>               
                    <div className="archers-grid">
                        {archers && archers.length > 0 ? (
                            archers.map((archer, index) => (
                                <div 
                                    key={index} 
                                    className="archer-card" 
                                    style={{backgroundColor: colors[index % colors.length]}}
                                >
                                    <div className='archer-name'>
                                        <p>{archer}</p>
                                    </div>
                                </div>
                            ))
                            ) : (
                                <p>Aucun archer disponible</p>
                        )}
                    </div>
                    <div className="buttons-container">
                        <button className="retour" onClick={handleBack}>Retour</button>
                        <button className="reset-scores">Reset Scores</button>
                        <button className="validate" onClick={handleStart}>Valider</button>
                    </div>     
                </div>   // cible container */
            // }/>           
    //     <Route path="/TotArcher1" element={<TotArcher1 archers={archers} />} /> 
    // </Routes>
    );
}

export default Cible;

