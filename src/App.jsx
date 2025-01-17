
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cible from './Cible';
import TotArcher1 from './Tot_archer1';
import './App.css';


const App = () => {  
  const navigate = useNavigate();
  //const archers = Array.from({ length : 6}, (_,i) => `Archer ${i + 1}`);
  const colors = [ "#ff4d4d", "#05b876", "#06a8da", "#ced205", "#9d02a5", "#c66e02"];

  // État pour gérer les noms des archers et l'archer en cours d'édition
  const [archers, setArchers] = useState(() => {
    // Récupère les archers du localStorage ou utilise les valeurs par défaut
    const savedArchers = localStorage.getItem('archers');
    return savedArchers ? JSON.parse(savedArchers) 
                      : Array.from({ length: 6 }, (_, i) => `Archer ${i + 1}`);
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Sauvegarde les archers dans localStorage quand ils changent
  useEffect(() => {
    localStorage.setItem('archers', JSON.stringify(archers));
  }, [archers]);

  // Gestionnaire pour commencer l'édition
  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditValue(archers[index]);
  };

  // Gestionnaire pour sauvegarder l'édition
  const handleSave = (index) => {
    if (editValue.trim()) {
      const newArchers = [...archers];
      newArchers[index] = editValue.trim();
      setArchers(newArchers);
    }
    setEditingIndex(null);
    setEditValue('');
  };

  // Gestionnaire pour la touche Entrée
  const handleKeyPress = (e, index) => {
    if (e.key === 'Enter') {
      handleSave(index);
    }
  };

  // constante pour naviguer vers cible.jsx
  const handleStart = () => {
    // Stockage des archers dans localStorage avant la navigation
    localStorage.setItem('archers', JSON.stringify(archers));
    navigate('/Cible');
  };


  return(
    <Routes>
       <Route path="/" element={
          <div className="home-container">
            
            {/*  Entete avec nom de l'appli et logo*/ }
            <header className="home-header">     
            {/* <img className="blason" src={blason} alt="Logo BenArchery"></img>     */}
              <p className="para-header">Ben Archery Score</p>        
            </header>
            <div><p></p></div>
              
              {/* Placement des cases pour les archers  */}
            <div className="archers-grid">
              {archers.map((archer, index) =>(       
                <div key={index} className="archer-card" style={{backgroundColor: colors[index % colors.length]}}>
                  <div className='archer-name' >
                    {/*  Condition pour afficher le nom de l'archer ou le champ d'édition */}
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => handleSave(index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        autoFocus
                        className="edit-input"
                      />
                    ) : (
                      <>
                        <p>{archer}</p>   
                        <button className="edit-button" onClick={() => handleEditClick(index)}>
                        <span /*role="img" aria-label="edit"*/>✏️</span>
                        </button>
                      </>
                    )}
                  </div>
                   {/* ici t'es bon pour la suite */}
                  <div className="score-container">                    
                    <p>Total Score : </p>                   
                  </div>
                
                </div>    
              ))}  
            </div>
                
                {/*  Div pour les boutons Reset et Start */}
            <div className="buttons-container">
              <div>
                <button className="new-button">New Game</button>
                <button className="begin-button" onClick={handleStart}>Start Game</button>
              </div>          
              <div>
                {/* <button className="reset-all-button">Reset All</button> */}
                <button className="reset-names-button">Reset Names</button>
                <button className="reset-scores-button">Reset Scores</button>
              </div>
            </div>
          </div>
       }/>           
      <Route path="/Cible" element={<Cible archers={archers} />} />   
      <Route path="/TotArcher1" element={<TotArcher1 archers={archers}/>} /> 
      <Route path="/App" element={<App archers={archers} />} /> 
    </Routes>
  );
};

export default App;

