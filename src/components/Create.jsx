import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { 
    SET_POKEMON,
    ERROR_POKEMON,
    addToCards,
    ADD_TO_CARDS
 } from '../redux/actions';
import s from '../styles/Create.module.css';
import styled from 'styled-components';

export default function Create() {
    let history = useHistory();

    const [data, setData] = useState({});
    const [checked, setChecked] = useState({});
    const dispatch = useDispatch();

    const checking = e => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    const validate = (checked) => {
        let array = [];
        for ( const prop in checked )
            if ( checked[prop] )
                array.push(prop);
        return array;
    }

    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const types = useSelector( state => state.types );
    const idApi = useSelector( state => state.cards.length );
    const submiting = e => {
        e.preventDefault();
        // console.log('Creando...');
        const toSend = {
            idApi: idApi+1,
            name: data.name,
            image: data.image,
            hp: data.hp,
            attack: data.attack,
            defense: data.defense,
            speed: data.speed,
            height: data.height,
            weight: data.weight,
            types: [...validate(checked)]
        }
        // console.log(toSend);
        // console.log(checked);
        // dispatch( { type: SET_POKEMON, payload: ERROR_POKEMON } )
        // history.push('/pokemon');
        dispatch( { type: ADD_TO_CARDS, payload: toSend } );
        dispatch( { type: SET_POKEMON, payload: toSend } );
        history.push('/pokemon');
    }
    return (
        <Form>
            <Fieldset>
                <h2>Create Pokemon</h2>
                <label htmlFor="name" className={s.labelData} >Name 
                    <input type="text" name="name" className={s.inputData} value={data['name']}
                    onChange={changing}/></label>
                <label htmlFor="image" className={s.labelData} >Image 
                    <input type="text" name="image" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="hp" className={s.labelData} >Hp 
                    <input type="text" name="hp" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="attack" className={s.labelData} >Attack 
                    <input type="text" name="attack" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="defense" className={s.labelData} >Defense 
                    <input type="text" name="defense" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="speed" className={s.labelData} >Speed
                    <input type="text" name="speed" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="height" className={s.labelData} >Height 
                    <input type="text" name="height" className={s.inputData}
                    onChange={changing}/></label>
                <label htmlFor="weight" className={s.labelData} >Weight 
                    <input type="text" name="weight" className={s.inputData}
                    onChange={changing}/></label>

                <TypesPhone>
                <label htmlFor="types" className={s.itemType} >Types<br/></label>
                <div>
                    { types && types.map( t => <label key={t} >{t}
                        <input type="checkbox" name={t}
                        onChange={checking}/></label> ) }
                </div>
                </TypesPhone>
                <button type="submit" onClick={submiting}
                    className={s.btn}>Create</button>
            </Fieldset>
            <Types>
                <label htmlFor="types" className={s.itemType} >Types<br/></label>
                <div>
                    { types && types.map( t => <label className={s.itemType} key={t} >{t}
                        <input type="checkbox" name={t}
                        onChange={checking} className={s.check}/></label> ) }
                </div>
            </Types>
        </Form>
    )
};

const Form = styled.form`
    display: flex;
    align-items: center;
    padding: 1em;
`;

const Fieldset = styled.fieldset`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 0.5em;
    /* background-color: rgba(139, 138, 138, 0.555); */
    border: none;
`;

const Types = styled.fieldset`
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    border-radius: 0.5em;
    border: none;
    @media(max-width: 768px){
        display: none;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

const TypesPhone = styled.div`
    display: flex;
    flex-direction: column;
    
    @media(min-width: 768px){
        display: none;
    }
    div{
        max-width: 768px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        label{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`;

const TypesPhoneDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(43, 66, 55, 44);
    color: rgba(77, 24, 150);
`;