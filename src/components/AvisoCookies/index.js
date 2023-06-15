import React, { useState, useEffect } from 'react';
import "./AvisoCookies.css"

const AvisoCookies = () => {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
    setAccepted(true);
    }
    }, []);

    const acceptCookies = () => {
    // localStorage.setItem('cookiesAccepted', true);
    setAccepted(true);
    };

    if (accepted) {
    return null; // Si las cookies ya fueron aceptadas, no se muestra el aviso
    }

    return (

    <div id="cookie-banner">

        <p>Este sitio web utiliza cookies. Haz clic en Aceptar para continuar.</p>
        <button onClick={acceptCookies}>Aceptar</button>

    </div>
    
    );
};

export default AvisoCookies;