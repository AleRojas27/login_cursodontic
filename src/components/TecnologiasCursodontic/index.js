import React from 'react';
import './TecnologiasCursodontic.css';

import imgLogoDenthereum from './../../assets/img/LogoDenthereumAmarillo.png';
import imgPrometeo from './../../assets/img/prometeo.png';
import imgProximamente from './../../assets/img/proximamente-img.png'

export default function TecnologiasCursodontic(){

    return (

        <div className="container-fluid tecnologiasCursodontic">

            <div className="container tecnologiasCursodontic__container">

                <h1 className="tecnologiasCursodontic__titulo">

                    ¿Que es Cursodontic?

                </h1>

                <p className="tecnologiasCursodontic__introduccion">

                    Somos una empresa tecnológica y de educación dirigida al área dental, la primer plataforma que te paga <span className="introduccionSpan">Denthereum</span>  por aprender y en integrar <span className="introduccionSpan">IA</span> para nuestro Chatbot 'Prometeo' y potenciar a los dentistas de todo habla hispana.

                </p>

                <div className="row">

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">

                        <div className="tecnologiasCursodontic__datosTecnologias">

                            <img src={imgLogoDenthereum} className="datosTecnologias__imgDenthereum" />

                            <h2 className="datosTecnologias__subtituloDenthereum">Denthereum </h2>

                            <p className="datosTecnologias__infoDenthereum">La primer Crypto-moneda dirigida para dentistas y/o tecnicos dentales que les permiten poder comprar muestros cursos, materiales, etc. </p>

                        </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">

                        <div className="tecnologiasCursodontic__datosTecnologias">

                            <img src={imgPrometeo} className="datosTecnologias__imgPrometeo" />

                            <h2 className="datosTecnologias__subtituloPrometeo">Prometeo</h2>

                            <p className="datosTecnologias__infoPrometeo">Prometeo es nuestro chatbot desarrollado con IA para sacarte de tus dudas sobre nuestra plataforma y datos dentales generales. </p>

                        </div>

                    </div>

                    <div className="col-xl-0 col-lg-0 col-md-2 col-sm-0 col-xs-0"></div>

                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-12 col-xs-12">

                            <div className="tecnologiasCursodontic__datosTecnologias">

                                <img src={imgProximamente} className="datosTecnologias__imgProximamente" />

                                <h2 className="datosTecnologias__subtituloProximamente">Proximamente!!</h2>

                                <p className="datosTecnologias__infoProximamente">Proximamente conoceras nuestra proxima actualizacion que vendra con noticias interesante.</p>

                            </div>

                    </div>

                    <div className="col-xl-0 col-lg-0 col-md-2 col-sm-0 col-xs-0"></div>

                </div>

            </div>

        </div>

    )
}