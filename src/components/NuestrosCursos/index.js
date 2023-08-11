import React, { useState } from 'react';
import classNames from 'classnames';
import './NuestrosCursos.css';

export default function NuestrosCursos(){
    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    const getCategoryButtonClasses = (index) => {
        return classNames('categorias', {
        active: activeCategory === index,
        });
    };

    return(

        <div className="container-fluid nuestrosCursos">

            <div className="container nuestrosCursos__container">

                <div className="nuestrosCursosInfo">

                    <h1 className="nuestrosCursosInfo__titulo">Nuestros Cursos</h1>

                    <p className="nuestrosCursosInfo__text">Accede a 49 cursos en 4 categorias</p>

                    <div className="nuestrosCursosInfo__categorias">

                        <button
                        className={getCategoryButtonClasses(0)}
                        onClick={() => handleCategoryClick(0)}
                        >
                            
                            Formación Clinica

                        </button>

                        <button
                        className={getCategoryButtonClasses(1)}
                        onClick={() => handleCategoryClick(1)}
                        >

                            Formación Técnica

                        </button>

                        <button
                        className={getCategoryButtonClasses(2)}
                        onClick={() => handleCategoryClick(2)}
                        >

                            Habilidades Empresariales

                        </button>

                        <button
                        className={getCategoryButtonClasses(3)}
                        onClick={() => handleCategoryClick(3)}
                        >

                            Gratis

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}