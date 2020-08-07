import React, { useState, useEffect } from 'react';
import TemplateBase from '../../components/TemplateBase';
import './main.css';
import { Link } from 'react-router-dom';
import Calculadora from '../../tools/Calculadora';

function Main() {
    useEffect(() => {
        fetchItems();
        console.log(items);
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://api.polijunior.com.br/notas'
        );
        const items = await data.json();

        // Adiciona Nota da P3 em todos os items
        items.map(item => (
            item.nota_p3 = Calculadora(item.nota_p1, item.peso_p1, item.nota_p2, item.peso_p2, item.peso_p3, item.media_pretendida)
        ))

        setItems(items);
    };

    return (
        <TemplateBase>
            <table className="table table-borderless mt-4 text-center">
                <thead>
                    <tr className="trh">
                        <th scope="col">Matéria :</th>
                        <th scope="col">Nota para a P3 :</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr className="trd" key={item.id}>
                            <td><Link style={{ color: 'whitesmoke' }} to={`/materia/${item.id}`}>{item.materia}</Link></td>
                            <td>{item.nota_p3}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </TemplateBase>
    );
}

export default Main;
