import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Cards from './Cards';
import Paged from './Paged';
import s from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={s.container}>
            <Filters/>
            <div className={s.bigArea}>
                <SearchBar/>
                <Paged/>
                <Cards/>
            </div>
        </div>
    )
}
