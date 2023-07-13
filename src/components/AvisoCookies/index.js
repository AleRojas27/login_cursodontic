import React, { useState} from 'react';
import "./AvisoCookies.css"

const AvisoCookies = () => {
    const [aceppted, setAceppted] = useState(localStorage.getItem('cookiesAceppted'));

    const handleAccept = () => {
        setAceppted (true)
        localStorage.setItem('cookiesAceppted', true)
    }

    if (aceppted){
        return null
    }

    return (

    <div id="cookie-banner">

        <p className="infoCookies">Este sitio web utiliza cookies. Haz clic en Aceptar para continuar.</p>

        <div className="opcionesAvisoCookies">

            <button onClick={handleAccept} id="acceptCookies">Aceptar</button>

            <a href="https://www.iubenda.com/privacy-policy/85495804/full-legal" className="mostrarAvisoCompleto" target="_blank" rel="noreferrer">Ver aviso de cookies</a>

        </div>

    </div>
    
    );
};

export default AvisoCookies;