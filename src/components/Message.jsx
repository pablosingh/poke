import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import s from '../styles/Message.module.css';

export const Message = (props) => {
    const message = props.message;
    let history = useHistory();
    useEffect(() => {
        setTimeout(() => history.push('/'), 2000);
    }, []);
    return (
        <div className={s.container}>
            <h1 className={s.msg}>{message}</h1>
        </div>
    )
};