function Calculadora(notaP1, pesoP1, notaP2, pesoP2, pesoP3, mediaDesejada) {
    const notaP3 = (parseInt(mediaDesejada) * (parseInt(pesoP1) + parseInt(pesoP2) + parseInt(pesoP3)) - parseInt(pesoP1) * parseInt(notaP1) - parseInt(pesoP2) * parseInt(notaP2)) / parseInt(pesoP3);
    return (notaP3);
}

export default Calculadora;