import React from "react";
import { Link } from "react-router-dom";
import './HeaderLogin.css';

import logoCursodontic from './../../assets/img/logoBlanco.png';

export default function HeaderLogin(){

    return(

        <div className="container-fluid headerLogin">

            <div className="container">

                <div className="">

                    <img src={logoCursodontic} className="headerLogin__logo" alt="Logo Cursodontic" />

                    <Link to="/chatbot" className="">

                        <span className="">Chatbot Cursodontic </span>

                    </Link>

                    <Link to="/promocion" className="">

                        <span>Promocion Protectores y Acetatos</span>

                    </Link>

                </div>

            </div>

        </div>
    )
}