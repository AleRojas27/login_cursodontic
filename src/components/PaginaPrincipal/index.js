import React from 'react';
import './PaginaPrincipal.css';

import PresentacionMembresia from './../PresentacionMembresia';

export default function PaginaPrincipal(){

    return(

        <React.Fragment>

            <div  className="paginaPrincipal__fondo">

                <PresentacionMembresia />

            </div>

        </React.Fragment>

    )
}