import React, { useEffect } from "react";


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>

     Hi

    </div>
  );
};

export default App;
