import React, { useState, useEffect } from 'react';
import TemplateBase from '../../components/TemplateBase';
import './main.css';
import { Link } from 'react-router-dom';


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



        setItems(items);
    };

    return (
        <TemplateBase>
            <div className="text-center">
                <ul className="mt-3 pb-3">
                    <li className="lista mb-5 fs-40">Matérias :</li>
                    {items.map(item => (
                        <>

                            <li className="lista fs-35 m-4" key={item.id}>
                                <Link style={{ color: 'whitesmoke' }} to={`/materia/${item.id}`}>{item.materia}</Link>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </TemplateBase>
    );
}

export default Main;
