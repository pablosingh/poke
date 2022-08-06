import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Pokemon from './Pokemon';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete';
import { About } from './About';
import { Message } from './Message';
import styled from 'styled-components';

export default function Body() {
    return (
        <Container>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/pokemon">
                <Pokemon/>
            </Route>
            <Route exact path="/create">
                <Create/>
            </Route>
            <Route exact path="/edit">
                <Edit/>
            </Route>
            <Route exact path="/delete">
                <Delete/>
            </Route>
            <Route exact path="/deleteSuccess">
                <Message message={'Exito al Borrar'}/>
            </Route>
            <Route exact path="/editSuccess">
                <Message message={'Exito al Editar'}/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
        </Container>
    )
};

const Container = styled.div`
    width: 100vw;
    min-height: 80vh;
    @media(max-width: 768px){
        padding-top: 15vh;
    }
    @media(min-width: 768px){
        padding-top: 20vh;
    }
`;
