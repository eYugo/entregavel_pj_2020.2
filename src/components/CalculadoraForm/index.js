import React, { useState } from 'react';
import FormField from '../FormField'
import Calculadora from '../../tools/Calculadora'
import PopUp from '../PopUp'

function CalculadoraForm() {

    const initialData = {
        notaP1: '',
        pesoP1: '',
        notaP2: '',
        pesoP2: '',
        pesoP3: '',
        mediaDesejada: '',
    }

    const [data, setData] = useState(initialData);

    // Adiciona o dado nos dados
    function setDatum(key, value) {
        setData({
            ...data,
            [key]: value,
        });
    }

    function handleChange(event) {
        setDatum(
            event.target.getAttribute('name'),
            event.target.value,
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        const nota_P3 = Calculadora(data.notaP1, data.pesoP1, data.notaP2, data.pesoP2, data.pesoP3, data.mediaDesejada);
        const notaP3 = Math.round(nota_P3 * 100) / 100; //Arredondando a nota
        // Adiciona Nota da P3 nos dados
        setDatum('notaP3', notaP3);
        handleShow();
    }

    // PopUp - Modal
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <form className="form-signin text-center" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal wh">Calcule a nota da P3:</h1>
                <FormField
                    label="Nota P1"
                    name="notaP1"
                    value={data.notaP1}
                    onChange={handleChange}
                    className="input-group input-group-sm"
                />
                <FormField
                    label="Peso P1"
                    name="pesoP1"
                    value={data.pesoP1}
                    onChange={handleChange}
                    className="input-group input-group-sm mb-3"
                />
                <FormField
                    label="Nota P2"
                    name="notaP2"
                    value={data.notaP2}
                    onChange={handleChange}
                    className="input-group input-group-sm"
                />
                <FormField
                    label="Peso P2"
                    name="pesoP2"
                    value={data.pesoP2}
                    onChange={handleChange}
                    className="input-group input-group-sm mb-3"
                />
                <FormField
                    label="Peso P3"
                    name="pesoP3"
                    value={data.pesoP3}
                    onChange={handleChange}
                    className="input-group input-group-sm mb-3"
                />
                <FormField
                    label="Média"
                    name="mediaDesejada"
                    value={data.mediaDesejada}
                    onChange={handleChange}
                    className="input-group input-group-sm mb-3"
                />

                <button className="btn btn-lg btn-secondary btn-block mt-4" type="submit">Calcular</button>
            </form>
            <PopUp
                media={data.mediaDesejada}
                notaP3={data.notaP3}
                show={show}
                handleClose={handleClose}
            />
        </>
    );
}

export default CalculadoraForm;