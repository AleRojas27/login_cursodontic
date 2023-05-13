import React from 'react';
import './PromocionProtectoresAcetatos.css';

import imgProtectoresBucales from './../../assets/img/protectores-personalizados.jpg'
import imgPonente from './../../assets/img/luis-lona.jpg'
import imgAcetatos from './../../assets/img/PROTECTORES_MIXTO.jpg'

export default function PromocionProtectoresAcetatos(){

    return(

        <div className="container-fluid promocionProtectoresAcetatos">

            <div className="container container__promocionProtectoresAcetatos">

                <h1 className="text-center promocionProtectoresAcetatos__titulo">
                    
                    ¡Aprovecha nuestra oferta!
                    
                </h1>

                <p className="promocionProtectoresAcetatos__text">
                    
                    Compra nuestro curso de <span className="textAmarillo">Protectores Bucales</span> y los <span className="textAmarillo">Acetatos</span> al mismo tiempo y obtén un 10% de descuento.
                    
                </p>

                <div className="row">

                    <div className="col-lg-6 mt-4">

                        <h2 className="promocionProtectoresAcetatos__subtitulo">Protectores Dentales-Bucales Personalizados</h2>

                        <img src={imgProtectoresBucales} className="imgProtectores" />

                        <div className="promocionProtectoresAcetatos__infoPonente">

                            <img src={imgPonente} className="infoPonente__img" />

                            <span className="infoPonente__primario">Un curso de <span className="infoPonente__secundario">Gustavo Montesinos Rivera</span></span>

                        </div>

                    </div>

                    <div className="col-lg-6 mt-4">

                        <h2 className="promocionProtectoresAcetatos__subtitulo">Paquete de acetatos 20 piezas libre eleccion</h2>

                        <img src={imgAcetatos} className="imgAcetatos" />

                    </div>

                </div>

                <div className="promocionProtectoresAcetatos__precios">

                    <p className="precios__original">
                        
                        Precio original <span className="original__span">$3030</span>
                        
                    </p>

                    <p className="precios__descuento">
                        
                        Obten nuestro paquete por tan solo <span>$2727</span>
                        
                    </p>

                </div>

                <button className="promocionProtectoresAcetatos__button">

                    COMPRA AHORA

                </button>

            </div>

        </div>
    )
}