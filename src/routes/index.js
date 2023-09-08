import React from 'react';



import Home from './../views/Home'



import { BrowserRouter, Routes, Route } from 'react-router-dom';





class Rotas extends React.Component {
    render() {

        return (
        
                <BrowserRouter>
                    <Routes >

                        
                        <Route exact path="/" element={<Home/>} />
                       

                    </Routes>
                    </BrowserRouter>
               
            

            

        )
    }
}


export default Rotas;