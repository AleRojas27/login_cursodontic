import React from 'react';
import './BotonComprarOferta.css';

export default function BotonComprarOferta(){

    return(

        <div className="container-fluid">

            <div className="container">

                <div className="">

                    <button className="promocionProtectoresAcetatos__button"> 

                        <span className="">

                            <i className="fa-solid fa-cart-shopping"></i>
                            COMPRA AHORA
                                            
                        </span>

                        <span className="buttonText__precioRebaja">
                                            
                            $2500 <span className="precioRebaja__fiat"> MXN</span>

                            <span className="buttonText__precioOriginal">
                                                
                            $3030 <span className="precioOriginal__fiat"> MXN</span>
                                                
                            </span>
                                            
                        </span>
                                        
                    </button>

                </div>

            </div>

        </div>

    )

}