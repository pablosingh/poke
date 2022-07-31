import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { loadTypes } from '../redux/actions';
import { 
    loadCards,
    loadPagesCards,
    loadSubCards,
    loadSubPagesCards,
    setActualPageCards,
    loadTypes,
    // loadPages, searchPokemon, loadFilters, 
    } from '../redux/actions';
import { useSelector } from 'react-redux';
import Logo from './Logo';
import User from './User';
import NavBar from './NavBar';
import s from '../styles/Head.module.css';

export default function Head() {
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    useEffect( () => {
        dispatch( loadCards() );
        dispatch( loadPagesCards() );
        // dispatch( loadSubCards() );
        dispatch( loadTypes() );
        // dispatch( searchPokemon(1) );
        // dispatch( loadFilters() );
    }, [] );
    useEffect( () => {
        dispatch( loadPagesCards() );
        dispatch( loadSubCards() );
        dispatch( setActualPageCards(0) );
    }, [state.cards] );
    return (
        <div className={s.head}>
            <Logo/>
            <NavBar/>
            <User/>
        </div>
    )
}
