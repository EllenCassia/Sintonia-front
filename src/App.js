import React from 'react';

import NavBar from './components/Header/NavBar';
import AppRoutes from './routes/AppRoutes';


function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRoutes /> 
    </div>
  );
}

export default App;
