import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './profile';
import Contact from './contact';

const ReactRouterSetup = () => {
  
    return(
            <>
                <Routes>

                    <Route path='/' element={<Profile />}/>
                    <Route path='/contact' element={<Contact />} />
                    {/* <Route path='*' element={<Error />} /> */}

                </Routes> 
            </>
    )

}




export default ReactRouterSetup;