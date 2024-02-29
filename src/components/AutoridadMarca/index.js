import React from 'react';
import "./AutoridadMarca.css";

export default function AutoridadMarca(){

    return(

        <div className="container-fluid autoridadMarca">

            <div className="container autoridadMarca__container">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <img src="https://static.wixstatic.com/media/1aac03_8c82ca899e354fd58f67d1ef530ab1be~mv2.png/v1/fill/w_980,h_546,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1aac03_8c82ca899e354fd58f67d1ef530ab1be~mv2.png" className="autoridadMarca__img" alt="imagen de referencia" />

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="autoridadMarca__informacionMarca">

                            <h1 className="informacionMarca__titulo">OUR STATS</h1>

                            <p className="informacionMarca__text">Lorem ipsum dolor sit amet, consectetur adipising elit, Mattis morbi sed euismed nibh aenean tellus ac.</p>

                            <div className="informacionMarca">

                                <div className="informacionMarca__datosAlumnos">

                                    <h2 className="datosMarca__titulo">Alumnos</h2>

                                    <p className="datosMarca__total">1,500+</p>

                                </div>

                                <div className="informacionMarca__datosClases">

                                    <h2 className="datosMarca__titulo">Clases</h2>

                                    <p className="datosMarca__total">5,000+</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}