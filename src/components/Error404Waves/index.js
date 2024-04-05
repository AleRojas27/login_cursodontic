import React from 'react';
import './Error404Waves.css';

export default function Error404Waves(){

    return(

        <section class="page-section">
        <div class="page-decoration-1"></div>
        <div class="page-decoration-2"></div>
        <div class="page-decoration-3"></div>
        <div class="full-width-screen">
            <div class="container-fluid">
                <div class="content-detail">
                    <h1 class="global-title"><span>4</span><span>0</span><span>4</span></h1>
                    <div class="page-desc">
                    <h4 class="sub-title">Oops!</h4>
                    <p class="detail-text">We're sorry,<br></br> The page you were looking for doesn't exist anymore.</p> 
                    <div class="back-btn">
                        <a href="index.html" class="btn">Back to Home</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}