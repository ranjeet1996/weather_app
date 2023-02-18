import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './pages/Home/Home';
import { ForeCast } from './components/ForeCast/ForeCast';
import { DatatoTransfer } from "./components/CreateContext"
import { useState } from 'react';

function App() {
  const [state, setState] = useState("");
  
  

  return (
    
    <div className='app'>
   <BrowserRouter>
         <Routes>
          <Route index element={<DatatoTransfer.Provider value={{state,setState}}><Home></Home></DatatoTransfer.Provider>}></Route>
          <Route path='/forecast' element={<DatatoTransfer.Provider value={{state,setState}}><ForeCast></ForeCast></DatatoTransfer.Provider>}></Route>
         </Routes>
   </BrowserRouter>
   </div>
   
  );
}

export default App;
