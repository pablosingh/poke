import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { deletePokemon } from '../redux/actions'
import { Message } from './Message';
import s from '../styles/Delete.module.css';

export default function Delete() {
    let history = useHistory();
    const dispatch = useDispatch();
    const actualPokemon = useSelector( state => state.pokemon );
    const deleting = () => {
        dispatch(deletePokemon(actualPokemon.idApi));
        history.push('/deleteSuccess')
    }
    return (
        <div className={s.container}>
            <SearchBar/>
            <h1>Pokemon</h1>
            <Card pokemon={actualPokemon}/>
            <h1>Delete ?</h1>
            <div>
                <button onClick={deleting} className={s.btn}>Yes</button>
                <button onClick={ () => history.push('/')} className={s.btn}>No</button>
            </div>
        </div>
    )
}
