import imgLoading from '../img/charizard_black.gif';
import s from '../styles/Loading.module.css';
import { AiOutlineReload } from 'react-icons/ai';
import styled from 'styled-components';

export const Loading = () => {
    return (
        <div className={s.container}>
            <img src={imgLoading} alt="loading" className={s.img}/>
            <Title>
                <h1 className={s.h1}>Cargando </h1>
                <AiOutlineReload className={s.logo} />
            </Title>
        </div>
    )
};

const Title = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
`;