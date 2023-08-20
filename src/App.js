import logo from './logo.svg';
import './App.css';
import {TextFieldButton } from './TextFieldButton';
import { HomePage } from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatedForm } from './CreatedForm';

function App() {
  return (
    <BrowserRouter>
  
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/form' element={<CreatedForm/>}/>
          
        </Routes>
       
      </BrowserRouter>
  );
}

export default App;
