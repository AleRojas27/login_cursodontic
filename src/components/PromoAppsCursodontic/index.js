import React from 'react';
import './PromoAppsCursodontic.css';

export default function PromoAppsCursodontic(){

    return(

        <div className="container-fluid promoAppsCursodontic">

            <div className="container promoAppsCursodontic__container">

                <h1 className="promoAppsCursodontic__titulo">¡Descarga nuestra App para Android o IOS ahora!</h1>

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <video controls className="promoAppsCursodontic__videoApps">

                            <source src="https://www.youtube.com/watch?v=CK7D4GShbNE" className="videoApps" ></source>

                        </video>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="promoAppsCursodontic__infoApps">

                            <h2 className="infoApps__subtitulo">Obtén acceso a características increíbles en nuestra <span className="subtitulo__span" >aplicación móvil.</span> </h2>

                            <p className="infoApps__text">Disponible para Android o IOS</p>

                            <div className="infoApps__buttonApps">

                                <a href="https://play.google.com/store/apps/details?id=com.cursodontic.cursodontic" className="buttonApps">

                                    <button className="buttonApps__android">

                                        Android

                                    </button>

                                </a>

                                <a href="https://apps.apple.com/mx/app/cursodontic/id1495944144" className="buttonApps">

                                    <button className="buttonApps__ios">

                                        IOS

                                    </button>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}