function Calculadora(notaP1, pesoP1, notaP2, pesoP2, pesoP3, mediaDesejada) {
    const notaP3 = (parseFloat(mediaDesejada) * (parseFloat(pesoP1) + parseFloat(pesoP2) + parseFloat(pesoP3)) - parseFloat(pesoP1) * parseFloat(notaP1) - parseFloat(pesoP2) * parseFloat(notaP2)) / parseFloat(pesoP3);
    return (notaP3);
}

export default Calculadora;