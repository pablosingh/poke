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
import NavBar from './NavBar';
import NavBarTwo from './NavBarTwo';
// import s from '../styles/Head.module.css';
import styled from 'styled-components';

export default function Head() {
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    useEffect( () => {
        dispatch( loadCards() );
        dispatch( loadPagesCards() );
        dispatch( loadTypes() );
    }, [] );
    useEffect( () => {
        dispatch( loadPagesCards() );
        dispatch( loadSubCards() );
        dispatch( setActualPageCards(0) );
    }, [state.cards] );
    return (
        <Container>
            <Logo/>
            <NavBar/>
            <NavBarTwo/>
        </Container>
    )
};


const Container = styled.div`
    width: 100vw;
    height: 20vh;
    background: linear-gradient(45deg, rgba(1,120,152,255),rgba(1,120,152,255) 10.71%);
    display: flex;
    justify-content: space-around;
    position: fixed;
    z-index: 1;
`;