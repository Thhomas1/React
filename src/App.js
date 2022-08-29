import React, {} from "react";
import './App.css';
import Public from './Routes/Public';
import AuthProvider from './Context/AuthProvider';
function App() {
  

  return (
    <AuthProvider>
      <Public />
      
        <style>
          {'body { background-color: #C3F5E8; font-family: new times roman;display: center;text-align: center;  }'}
          
        </style>
      
    </AuthProvider>
  );
}

export default App;
