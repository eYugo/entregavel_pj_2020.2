import React from 'react';
import { Link } from 'react-router-dom';
import './TB.css';

function TemplateBase({ children }) {
    return (
        <div className="bg-dark corpo">
            <div className="container">
                <header className="header-css text-center">
                    <div className="container pt-3 mb-4">
                        <h1>Nota da P3!</h1>
                        <p className="mb-4 wh">Veja o quanto você precisa tirar na P3 para obter sua média desejada!</p>
                        <Link className="btn btn-md btn-outline-light" to="/">Minhas Matérias</Link>
                        <Link className="btn btn-md btn-outline-light ml-1" to="/calculadora">Calculadora</Link>
                    </div>
                </header>
                <hr className="linha1" />
                {children}
            </div>
        </div >
    );
}

export default TemplateBase;