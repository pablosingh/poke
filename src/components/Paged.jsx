import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    loadSubCards,
    setActualPageCards, 
} from '../redux/actions';
import s from '../styles/Paged.module.css';

export default function Paged() {
    const pagesCards = useSelector( state => state.subPagesCards);
    const actualPage = useSelector( state => state.actualPageCards);
    const maxPages = useSelector( state => state.maxPageCards);

    const dispatch = useDispatch();
    const next='>>', prev='<<';
    useEffect(() => {
        dispatch( loadSubCards());
    }, [actualPage]);

    return (
        <div className={s.container}>
            <div className={s.containerBtn}>
                <button className={s.btn}
                onClick={()=> {
                    if ( actualPage>0 ){
                        dispatch( setActualPageCards(actualPage-1) );
                    }
                } }
                    >{prev}</button>

                { pagesCards && pagesCards.map( p => <button 
                    key={p}
                    className={`${s.btn} ${(p===actualPage) ? s.active : ` `}`}
                    onClick={()=> {
                        dispatch( setActualPageCards(p) );
                    } }
                    >{p+1}</button>) }

                <button 
                    className={s.btn}
                    onClick={()=> {
                        if ( actualPage<maxPages ){
                            dispatch( setActualPageCards(actualPage+1) );
                        }
                    } }
                    >{next}</button>
            </div>
        </div>
    )
}
