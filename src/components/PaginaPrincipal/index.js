import React from 'react';
import './PaginaPrincipal.css';

import PresentacionMembresia from './../PresentacionMembresia';
import MetodosPago from './../MetodosPago';
import NuestrosCursos from './../NuestrosCursos';
import AutoridadMarca from './../AutoridadMarca';
import PromoAppsCursodontic from './../PromoAppsCursodontic';
import TecnologiasCursodontic from './../TecnologiasCursodontic';

export default function PaginaPrincipal(){

    return(

        <React.Fragment>

            <div  className="paginaPrincipal__fondo">

                <PresentacionMembresia />
                <MetodosPago />
                <NuestrosCursos />
                <AutoridadMarca />
                <PromoAppsCursodontic />
                <TecnologiasCursodontic />

            </div>

        </React.Fragment>

    )
}