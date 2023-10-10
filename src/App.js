import React from 'react';

import NavBar from './components/Header/NavBar';
import AppRoutes from './routes/AppRoutes';
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppRoutes /> 
    </div>
  );
}

export default App;
