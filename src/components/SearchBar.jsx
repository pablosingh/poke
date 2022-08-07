import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { searchPokemon } from '../redux/actions';
import NavFilters from './NavFilters';
import s from '../styles/SearchBar.module.css';
import styled from 'styled-components';

export default function SearchBar() {
    const estado = useSelector(state => state);
    const [ searchText, setSearchText ] = useState("");

    let history = useHistory("/pokemon");
    const dispatch = useDispatch();

    const changing = (e) => setSearchText(e.target.value);
    
    const submiting = e => { 
        e.preventDefault();
        dispatch(searchPokemon(searchText));
        setSearchText("");
        history.push('/pokemon');
    }

    return (
        // <div>
        <ContainerFilters>
            <NavFilters/>
            <form className={s.container} action='POST'>
                <input type="searchText" 
                    placeholder="Search" 
                    onChange={changing}
                    value={searchText}
                    className={s.searchText}/>
                    <button type='submit' onClick={ submiting } className={s.btn}>
                        Search
                    </button>
            </form>
                {/* <button onClick={ ()=> console.log(estado)}>
                    Estado
                </button> */}
        {/* </div> */}
        </ContainerFilters>
    )
};

const ContainerFilters = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;