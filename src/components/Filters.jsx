import React, { useState } from 'react';
import { 
    orderByNameAsc,
    orderByNameDes,
    orderByAttackDes,
    orderByAttackAsc,
    filtersByTypes,
    loadCards
} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import s from '../styles/Filters.module.css';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export default function Filters() {
    const dispatch = useDispatch();
    const types = useSelector( state => state.types );

    const [checked, setChecked] = useState({});

    const changing = (e) => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    const validate = () => {
        let array = [];
        for ( const prop in checked )
            if ( checked[prop] )
                array.push(prop);
        return array;
    }

    return (
        // <div className={s.container}>
        <Container>
            <div className={s.order}>
                <h2 className={s.subTitle}>Ordenar por</h2>
                <button onClick={ ()=> {
                    dispatch(orderByNameAsc());
                } }className={s.btn} >Nombre Asc</button>
                <button onClick={ ()=> {
                    dispatch(orderByNameDes());
                } } className={s.btn}>Nombre Des</button>
                <button onClick={ ()=> {
                    dispatch(orderByAttackAsc());
                } } className={s.btn}>Fuerza Asc</button>
                <button onClick={ ()=> {
                    dispatch(orderByAttackDes());
                } } className={s.btn}>Fuerza Des</button>
                <button onClick={ ()=> {
                        dispatch( loadCards() );
                    } } className={s.btn}>Reset Filtros</button>
            </div>
           
            <div className={s.filter}>
                { types && types.map( t => <label
                        key={t} className={s.item}>
                            {t}
                        <input type="checkbox" 
                        name={t}
                        value={t}
                        onChange={changing}
                        className={s.check}
                        />
                    </label>) }
                <button onClick={()=>{
                    console.log(validate());
                    dispatch(filtersByTypes(validate()));
                    }} className={s.btn}>Aplicar</button>
            </div>
            {/* </div> */}
            </Container>
    )
};

const Container = styled.div`
    padding: 0.5em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    @media(max-width: 768px){
        display: none;
      }
`;