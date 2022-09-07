import React from 'react';
import Homepage from './Components/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;