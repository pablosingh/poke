import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchPokemon } from '../redux/actions';
import s from '../styles/Card.module.css';
import styled from 'styled-components';

export default function Card(props) {
    const { idApi, name, types, image, attack} = props.pokemon;
    const dispatch = useDispatch();
    return (
        <Container>
            <Link to="/pokemon" 
                onClick={ () => {
                    dispatch(searchPokemon(idApi));
                }}>
                    <img src={image} alt="Imagen" className={s.imgCard}/>
                    <h2 className={s.nameCard}>{name}</h2>
                    <p>Attack : {attack}</p>
                    <p>Types : { types && types.join(' | ')}</p>
            </Link>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5em 1em;
    border-radius: 0.3em;
    background-color: rgb(34, 150, 228);
    padding: 1em 0;
    @media(max-width: 768px){
        min-width: 45%;
    }
    @media(min-width: 768px){
        min-width: 15%;
    }
    *{
        text-decoration: none;
        color: black;
    }
    :hover{
        background-color: rgba(215, 248, 246, 0.8);
    }
`;
