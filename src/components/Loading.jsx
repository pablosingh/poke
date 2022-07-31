// import imgLoading from '../img/trueno_pikachu.gif';
import imgLoading from '../img/charizard_black.gif';
import s from '../styles/Loading.module.css';

export const Loading = () => {
    return (
        <div className={s.container}>
            <img src={imgLoading} alt="loading" className={s.img}/>
            <h1 className={s.h1}>Cargando...</h1>
        </div>
    )
};