import React from 'react'
import './WhatsAppIcon.css'

export default function WhatsAppIcon(){

    function handleClick(){

        window.open('https://wa.me/5539892233', '_blank');
    }

    return(

        <button className="whatsAppContacto col-md-0 col-sm-0 col-xs-0" onClick={handleClick}>

            <i className="fa-brands fa-whatsapp iconWhatsAppContacto"></i>

        </button>
    )
}