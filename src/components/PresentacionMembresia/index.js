import React from 'react';
import './PresentacionMembresia.css';

//IMAGENES

import dentistaPresentacion from './../../assets/img/slider1.png';

export default function PresentacionMembresia(){

    return(

        <div className="container-fluid presentacionMembresia">

            <div className="container presentacionMembresia__container">

                <div className="row">

                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <h1 className="presentacionMembresia__titulo">
                            
                            CONVIERTETE EN UN ALUMNO PREMIUM

                        </h1>

                        <p className="presentacionMembresia__infoText">

                            Sí en verdad quieres aprender al máximo, tenemos la solución perfecta para ti, suscribete a nuestra <span className="infoText__span">Membresia Premium. </span>

                        </p>

                        <button className="presentacionMembresia__button">

                            ¡SUBE A PREMIUM AHORA!

                        </button>

                    </div>

                    <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="presentacionMembresia__imgPresentacion">

                            <img src={dentistaPresentacion} className="imgPresentacion" alt="Imagen de presentacion" />

                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}