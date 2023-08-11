import React from 'react';
import './PaginaPrincipal.css';

import PresentacionMembresia from './../PresentacionMembresia';
import MetodosPago from './../MetodosPago';
import NuestrosCursos from './../NuestrosCursos';

export default function PaginaPrincipal(){

    return(

        <React.Fragment>

            <div  className="paginaPrincipal__fondo">

                <PresentacionMembresia />
                <MetodosPago />
                <NuestrosCursos />

            </div>

        </React.Fragment>

    )
}