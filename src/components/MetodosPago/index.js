import React from 'react';
import './MetodosPago.css';

export default function MetodosPago(){

    return(

        <div className="container-fluid metodosPago">

            <div className="container metodosPago__container">

                <div className="metodosPago__tipoPago">

                    <i class="fa-brands fa-cc-visa tipoPago"></i>

                    <i class="fa-brands fa-cc-mastercard tipoPago"></i>

                    <i class="fa-brands fa-cc-amex tipoPago"></i>

                    <i class="fa-brands fa-cc-paypal tipoPago"></i>

                    <img src="https://seeklogo.com/images/O/Oxxo-logo-9AC0DE4F4C-seeklogo.com.png" className="tipoPago__oxxo" alt="Tipo de Metodo de Pago" />

                    <img src="https://cursodontic.com/static/media/BasicLogoDenthereumAmarillo.27d0ff6e.png" className="tipoPago__logoDenthereum" alt="Tipo de Metodo de Pago" />

                </div>

            </div>

        </div>

    )
}