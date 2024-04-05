import React from 'react';
import './Error404Pendulum.css';

export default function Error404Pendulum(){

    return(

        <section class="page-section">
            <div class="full-width-screen">
                <div class="container-fluid">
                <div class="content-detail">
                    <div class="pendulum-platform">
                    <div class="pendulum-holder"></div>
                    <div class="pendulum-thread">
                        <div class="pendulum-knob"></div>
                        <div class="pendulum">405</div>
                    </div>
                    <div class="pendulum-shadow"></div>
                    </div>
                    <div class="text-detail">
                    <h4 class="sub-title">Oops!</h4>
                    <p class="detail-text">We're sorry,<br></br> The page you were looking for doesn't exist anymore.</p> <div class="back-btn">
                            <a href="index.html" class="btn">Back to Home</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        
    )
}