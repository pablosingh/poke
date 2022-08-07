import React from 'react';
import { Link } from 'react-router-dom';
// import s from '../styles/Logo.module.css';
import logo from '../img/ash_pikachu.png';
import styled from 'styled-components';

export default function Logo() {
    return (
        <Container>
            <Link to="/" className="link">
                <img src={logo} className="logo" alt="Logo"/>
                <span className="pokemon">Pokemon</span>
            </Link>
        </Container>
    )
};

const Container = styled.div`
.link{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    padding-top: 0.6em;

    .logo{
        @media(max-width: 768px){
            width: 15vw;
        }
        @media(min-width: 768px){
            width: 7vw;
        }
    }
    .pokemon{
        color: black;
        font-size: 1.5em;
        font-weight: bold;
    }    
}   
`;