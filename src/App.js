import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import PostSuccessful from './Components/PostSuccessful';
import { Analytics } from "@vercel/analytics/react"
function App() {
  const [formDetails, setFormDetails] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form setFormDetails={setFormDetails} />} />
          <Route path='/post-successful' element={<PostSuccessful formDetails={formDetails} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
