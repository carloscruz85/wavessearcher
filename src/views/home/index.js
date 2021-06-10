import React, { useEffect, useContext } from "react";
import Logo from '../../assets/images/logo-surf-city.png'
import {DataContext} from '../../context/context'
import List from '../list'

const App = () => {

  const { globalData } = useContext(DataContext)
  const {lang} = globalData
  useEffect(() => {
   
    window.scrollTo(0, 0);
    
  }, []);
  // console.log(globalData.filtered.length);
  return (
    <>
      {globalData.filtered.length === 0 || globalData.filtered.length === undefined ?
      <div className="container" >
        <div className="logo-container">
          <img src={Logo} alt="Surf City" className="logo"/>
        </div>        
        <div className="intro basic-p" style={{marginTop: '1rem'}}>
          {
           lang === 'es' ? (<div>
             <h3>Bienvenido al Buscador de Olas</h3>
            <p>Las playas de El Salvador son el lugar perfecto para hacer surf 🏄. <br />Gracias a nuestra privilegiada geografía contamos con los mejores spots para los amantes de las olas 🤙</p>
            <p>En este buscador hemos agrupado nuestras playas según las clasificaciones que los expertos usan, como el tipo de ola, dirección, características de la playa etc, estos criterios los encontrarás en el menú de la izquierda</p>
          </div>) : (
            <div>
              <h3> Welcome to the Wave Searcher </h3>
             <p> The beaches of El Salvador are the perfect place to surf 🏄. <br /> Thanks to our privileged geography we have the best spots for wave lovers 🤙 </p>
             <p> In this search we have grouped our beaches according to the classifications that the experts use, such as the type of wave, direction, type of the beach, etc., these criteria can be found in the menu on the left </p>
            </div>
          )
          }
        </div>
    </div>
    : <List />
    }
    </>

  );
};

export default App;