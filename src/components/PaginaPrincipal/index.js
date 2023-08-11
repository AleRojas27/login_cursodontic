import React from 'react';
import './PaginaPrincipal.css';

import PresentacionMembresia from './../PresentacionMembresia';
import MetodosPago from './../MetodosPago';

export default function PaginaPrincipal(){

    return(

        <React.Fragment>

            <div  className="paginaPrincipal__fondo">

                <PresentacionMembresia />
                <MetodosPago />

            </div>

        </React.Fragment>

    )
}