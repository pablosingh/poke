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
    const [nextData, setNextData] = useState(false);
    const dispatch = useDispatch();

    const handleNextData = () => {
        setNextData(!nextData);
    };

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
        console.log(toSend);
        // console.log(checked);
        // dispatch( { type: SET_POKEMON, payload: ERROR_POKEMON } )
        // history.push('/pokemon');
        dispatch( { type: ADD_TO_CARDS, payload: toSend } );
        dispatch( { type: SET_POKEMON, payload: toSend } );
        history.push('/pokemon');
    }
    return (
        <Container>
            <Form>
                <div>
                { !nextData ? <LabelsAndInputs>
                        <h2>Create Pokemon</h2>
                        <label htmlFor="name" className={``} >Name 
                            <input type="text" name="name" className={`inputData`} value={data['name']}
                            onChange={changing}/></label>
                        <label htmlFor="image" className={``} >Image 
                            <input type="text" name="image" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="hp" className={``} >Hp 
                            <input type="text" name="hp" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="attack" className={``} >Attack 
                            <input type="text" name="attack" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="defense" className={``} >Defense 
                            <input type="text" name="defense" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="speed" className={``} >Speed
                            <input type="text" name="speed" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="height" className={``} >Height 
                            <input type="text" name="height" className={`inputData`}
                            onChange={changing}/></label>
                        <label htmlFor="weight" className={``} >Weight 
                            <input type="text" name="weight" className={`inputData`}
                            onChange={changing}/></label>
                        <ButtonCreatePhone onClick={handleNextData}>Next</ButtonCreatePhone>
                    </LabelsAndInputs> : <></>}
                        { nextData ? <TypesPhone> 
                                <h4><label htmlFor="types" className={``} >Types<br/></label></h4>
                                <div>
                                    { types && types.map( t => <LabelItem key={t} >{t}
                                        <input type="checkbox" name={t}
                                        onChange={checking}/></LabelItem> ) }
                                </div>
                                <ButtonCreatePhone type="submit" onClick={submiting}>Create Ph</ButtonCreatePhone>
                        </TypesPhone> : <></> }
                        <ButtonCreate type="submit" onClick={submiting}>Create</ButtonCreate>
                </div>
                <Types>
                    <h4><label htmlFor="types" className={``} >Types</label></h4>
                    <div>
                        { types && types.map( t => <label className={``} key={t} >{t}
                            <input type="checkbox" name={t}
                            onChange={checking} className={s.check}/></label> ) }
                    </div>
                </Types>
            </Form>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
`;

const Form = styled.form`
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(139, 138, 138, 0.7);
    border-radius: 0.5em;
`;

const LabelsAndInputs = styled.fieldset`
    font-size: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 0.5em;
    border: none;
    label{
        .inputData{
            border: none;
            border-radius: 0.2em;
            padding: 0;
            margin: 0.5em 0.7em;
        }
    }
`;

const Types = styled.fieldset`
    margin: 1em 0em;
    font-size: 1.5em;
    border-radius: 0.5em;
    border: none;
    @media(max-width: 768px){
        display: none;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
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
        flex-wrap: wrap;
        justify-content: space-between;
        label{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
`;

const ButtonCreate = styled.button`
    font-size: 1em;
    background-color: rgba(34, 150, 228, 0.5);
    border-radius: 0.2em;
    border: none;
    padding: 0.5em;
    margin: 0.7em 2em;
    :hover{
        background-color: rgb(50, 190, 224);
    }
    @media(max-width: 768px){
        display: none;
    }
`;

const ButtonCreatePhone = styled.button`
    font-size: 1em;
    background-color: rgba(34, 150, 228, 0.5);
    border-radius: 0.2em;
    border: none;
    padding: 0.5em;
    margin: 0.7em 2em;
    :hover{
        background-color: rgb(50, 190, 224);
    }
    @media(min-width: 768px){
        display: none;
    }
`;

const LabelItem = styled.label`
    margin: 0.1em 1em;
    input{
        margin-left: 0.5em;
    }
`;