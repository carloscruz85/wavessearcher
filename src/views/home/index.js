import React, { useEffect, useContext } from "react";
import Logo from '../../assets/images/logo-surf-city.png'
import {DataContext} from '../../context/context'

const App = () => {

  const { globalData } = useContext(DataContext)
  const {lang} = globalData
  useEffect(() => {
   
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div className="container" >
        <div className="logo-container">
          <img src={Logo} alt="Surf City" className="logo"/>
        </div>
        <div className="intro basic-p" style={{marginTop: '1rem'}}>
          {
           lang === 'es' ? 'Bienvenido al Buscador de Olas, encuentra las mejores olas de El Salvador, sólo busca en el menú a la izquierda los en cada criterio de búsqueda' : 'Welcome to the Waves Searcher, find for the best waves of El Salvador, just go to the menu at the left and search in each category'
          }
        </div>
    </div>
  );
};

export default App;