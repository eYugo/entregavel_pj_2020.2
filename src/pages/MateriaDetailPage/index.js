import React, { useState, useEffect } from 'react';
import TemplateBase from '../../components/TemplateBase';
import Calculadora from '../../tools/Calculadora';


function MateriaDetailPage({ match }) {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(
            `https://api.polijunior.com.br/notas/${match.params.id}`
        );
        const item = await data.json();

        // Adiciona Nota da P3 no item
        item.nota_p3 = Calculadora(item.nota_p1, item.peso_p1, item.nota_p2, item.peso_p2, item.peso_p3, item.media_pretendida)

        setItem(item);
    };

    return (
        <TemplateBase>
            <div className="text-center">
                <ul className=" mt-4">
                    <li className="lista mb-3"><h4>Matéria : {item.materia}</h4></li>
                    <li className="lista">Nota P1 : {item.nota_p1}</li>
                    <li className="lista">Peso P1 : {item.peso_p1}</li>
                    <li className="lista">Nota P2 : {item.nota_p2}</li>
                    <li className="lista">Peso P2 : {item.peso_p2}</li>
                    <li className="lista">Peso P3 : {item.peso_p3}</li>
                    <li className="lista">Média Pretendida : {item.media_pretendida}</li>
                    <hr className="linha2" />
                    <li className="lista"><h1>Nota P3 : {item.nota_p3}</h1></li>
                </ul>
            </div>
        </TemplateBase >
    );
}

export default MateriaDetailPage;
