import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={s.container}>
            <Link to="/" className={s.btn}>Home</Link>
            <Link to="/create" className={s.btn}>Create</Link>
            <Link to="/about" className={s.btn}>About</Link>
        </div>
    )
}
