import React from 'react';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import AddContact from '../components/AddContact/AddContact';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navbar/Navbar';

function App() {
    return (
        <>
         <Router>
           <Navbar/>

<Routes>
  <Route path="/" element={<Contact></Contact>} />
  {/* <Route path="/contact" element={<Contact></Contact>} /> */}
  <Route path="/add-contact" element={<AddContact></AddContact>} />
  {/* <Route path="/register" element={<Register></Register>} />       
   */}
</Routes>
</Router>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
