import React, { useEffect } from "react";
import Menu from '../../components/menu';


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     <Menu />
    </div>
  );
};

export default App;
