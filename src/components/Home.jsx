import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Cards from './Cards';
import Paged from './Paged';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
import s from '../styles/Home.module.css';
import DivAnimated from './DivAnimated';

export default function Home() {
    const loading = useSelector( state => state.loading );
    return (
        <div className={s.container}>
            {
                loading ? <Loading/> : 
                <>
                    <Filters/>
                    <div className={s.bigArea}>
                        <SearchBar/>
                        <Paged/>
                        {/* <Cards/> */}
                        <DivAnimated element={ <Cards/> }/>
                    </div>
                </>
            }
        </div>
    )
}
