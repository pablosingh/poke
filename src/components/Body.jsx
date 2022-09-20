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
import DivAnimated from './DivAnimated';

export default function Body() {
    return (
        <Container>
            <Route exact path="/">
                <DivAnimated element={ <Home/> }/>
                {/* <Home/> */}
            </Route>
            <Route path="/pokemon">
                <DivAnimated element={ <Pokemon/> }/>
                    {/* <Pokemon/> */}
            </Route>
            <Route exact path="/create">
                <DivAnimated element={ <Create/> }/>
                    {/* <Create/>    */}
            </Route>
            <Route exact path="/edit">
                <DivAnimated element={ <Edit/> }/>
                    {/* <Edit/> */}
            </Route>
            <Route exact path="/delete">
                <DivAnimated element={ <Delete/> }/>
                    {/* <Delete/> */}
            </Route>
            <Route exact path="/deleteSuccess">
                {/* <Message message={'Exito al Borrar'}/> */}
                <DivAnimated element={ <Message message={'Exito al Borrar'}/> }/>
            </Route>
            <Route exact path="/editSuccess">
                {/* <Message message={'Exito al Editar'}/> */}
                <DivAnimated element={ <Message message={'Exito al Editar'}/> }/>
            </Route>
            <Route exact path="/about">
                {/* <About/> */}
                <DivAnimated element={ <About/> }/>
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
