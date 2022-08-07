import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    orderByNameAsc,
    orderByNameDes,
    orderByAttackAsc,
    orderByAttackDes,
    loadCards
} from '../redux/actions';
import styled from 'styled-components';
import BurguerButton from './BurguerNav';

function NavFilters() {
    const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <a onClick={ () => {
                dispatch(orderByNameAsc());
                handleClick();
                }} >Nombre Asc</a>
            <a onClick={ () => {
                dispatch(orderByNameDes());
                handleClick();
                }}  >Nombre Des</a>
            <a onClick={ () => {
                dispatch(orderByAttackAsc());
                handleClick();
                }}  >Fuerza Asc</a>
            <a onClick={ () => {
                dispatch(orderByAttackDes());
                handleClick();
                }}  >Fuerza Des</a>
            <a onClick={ () => {
                dispatch( loadCards() );
                handleClick();
                }}  >Reset Filtros</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <h2>Filtros</h2>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default NavFilters;


const NavContainer = styled.nav`
margin: 0em 1em;
border-radius: 0.5em;
@media(min-width: 768px){
    display: none;
}
  h2{
    color: white;
    font-weight: 400;
    padding: 0em 0.5em;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: rgb(34, 150, 228);
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    padding-top: 5rem;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 130vh;
  }
`;