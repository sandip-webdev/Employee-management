import React from 'react';
import Dashboard from './pages/Admin/Dashboard';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

import Update from './pages/Admin/Update';
import  AddData  from './pages/Admin/AddData';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/admin'element={<Dashboard/>}/>
    <Route path='/add-data'element={<AddData/>}/>
    <Route path='/edit-data/:id'element={<Update/>}/>
      



      
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )

}

export default App