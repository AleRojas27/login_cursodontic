import React from 'react';
// import './Error404Orange.css';

export default function Error404Orange(){

    return(

        <section class="d-flex align-items-center h-100 bg-warning">
    <div class="container">
        <div class="text-center mx-auto">
            <h1 class="display-1 fw-bold text-warning">404</h1>
            <h3 class="text-secondary fs-4 fw-semibold mb-3">Not Found</h3>
            <h4 class="text-dark fs-5 mb-2">Sorry, we were unable to find that page</h4>
            <p class="font-medium text-muted">Uh-oh! Looks like you took a wrong turn. The page you're looking for isn't here. Try heading back to the homepage or use the search bar to find what you need.</p>
            <img src="assets/images/error-2.png" alt="error-2" class="img-fluid" />
        </div>
    </div>
</section>

    )
}