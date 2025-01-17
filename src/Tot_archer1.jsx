

import { useNavigate } from 'react-router-dom';
import './tot_archer.css'

const TotArcher1 = () => {
    const navigate = useNavigate();
    const colors = [ "#ff4d4d", "#05b876", "#06a8da", "#ced205", "#9d02a5", "#c66e02"];
    
    // Récupérer les archers depuis localStorage
    const archers = JSON.parse(localStorage.getItem('archers')) || [];
    const archer = archers[0] ||'aucun archer disponible';

    // const handleBack = () => {
    //     navigate('/');
    // };
    
    const handleStart = () => {
        navigate('/App');
    };

    return (
        <div className='archer-container'> 
            <header className='archer-header'>
                <div key={0} className="archer-card" style={{backgroundColor: colors[0 % colors.length]}}>
                    <div className='archer-name' >
                        <p>{archer}</p>   
                    </div>                        
                </div>    
            </header>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col"> Fleches   </th>
                            <th scope="col">    1</th>
                            <th scope="col">    2</th>
                        </tr> 
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Cible 1</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 2</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 3</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 4</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    <tr>
                        <th scope="row">Cible 5</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 6</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 7</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 81</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 91</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 10</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 11</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 12</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 13</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 14</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 15</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 16</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 17</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 18</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 19</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 20</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    <tr>
                        <th scope="row">Cible 21</th>
                        <td> 20 </td>
                        <td> 15 </td>
                    </tr>    
                    </tbody>    
                    <tfoot>
                        <tr>
                            <th>Tot Fleches : </th>
                            <td> 420 </td>
                            <td> 315 </td>
                        </tr>
                        <tr>
                            <th scope="row" colSpan="2">Score Total</th>
                            <td> 735 </td>
                        </tr>
                    </tfoot>
                </table>    
            </div>                    
            <div>
                <button className="Home-button" onClick={handleStart}>Home</button>
            </div>
        </div>      
    );
}
export default TotArcher1;