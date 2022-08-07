import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import s from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <Container>
            <Link to="/" className={s.btn}>Home</Link>
            <Link to="/create" className={s.btn}>Create</Link>
            <Link to="/about" className={s.btn}>About</Link>
        </Container>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    @media(max-width: 768px){
        display: none;
      }
`;
