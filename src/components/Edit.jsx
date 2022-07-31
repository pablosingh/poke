import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { 
    ERROR_POKEMON,
    searchPokemon,
    edit
    // addToCards, 
    // SET_POKEMON 
} from '../redux/actions'
import SearchBar from './SearchBar';
import s from '../styles/Edit.module.css';

export default function Edit() {
    let history = useHistory();
    useEffect(() => {
        setData({
            idApi: actualPokemon.idApi,
            name: actualPokemon.name,
            image: actualPokemon.image,
            hp: actualPokemon.hp,
            attack: actualPokemon.attack,
            defense: actualPokemon.defense,
            speed: actualPokemon.speed,
            height: actualPokemon.height,
            weight: actualPokemon.weight
        });
        var obj = {}
        if ( actualPokemon.types ) 
        for(let i=0; i<actualPokemon.types.length; i++)
            obj[`${actualPokemon.types[i]}`] = true;
        setChecked({
            ...obj
        });
    }, []);
    const dispatch = useDispatch();
    const types = useSelector( state => state.types );
    const actualPokemon = useSelector( state => state.pokemon );

    const [data, setData] = useState({});
    const [checked, setChecked] = useState({});

    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const validate = (checked) => {
        let array = [];
        for ( const prop in checked )
            if ( checked[prop] )
                array.push(prop);
        return array;
    }
    const submiting = e => {
        e.preventDefault();
        // console.log('Editando...');
        const toSend = {
            idApi: data.idApi,
            name: data.name,
            image: data.image,
            hp: Number(data.hp),
            attack: Number(data.attack),
            defense: Number(data.defense),
            speed: Number(data.speed),
            height: Number(data.height),
            weight: Number(data.weight),
            types: [...validate(checked)]
        }
        for( const prop in toSend )
            if ( prop!=='name' && prop!=='image' && prop!=='id' && !Array.isArray(toSend[prop]) )
                if( isNaN(toSend[prop]) )
                    toSend[prop] = 1;
        // console.log(toSend);
        dispatch(edit(toSend));
        history.push('/editSuccess')
    }
    const checking = e => {
        setChecked({
            ...checked,
            [e.target.name]: e.target.checked
        });
    }
    return (
        <div className={s.supercontainer}>
            <SearchBar/>
            <form className={s.container} action='POST'>
                <div className={s.subContainer}>
                    <fieldset className={s.data}>
                        <h2>Edit Pokemon</h2>
                        <label htmlFor="name" className={s.labelData} >Name 
                            <input type="text" name="name" className={s.inputData} 
                            onChange={changing} value={data.name}/></label>
                        <label htmlFor="image" className={s.labelData} >Image 
                            <input type="text" name="image" className={s.inputData}
                            onChange={changing} value={data.image}/></label>
                        <label htmlFor="hp" className={s.labelData} >Hp 
                            <input type="text" name="hp" className={s.inputData}
                            onChange={changing} value={data.hp}/></label>
                        <label htmlFor="attack" className={s.labelData} >Attack 
                            <input type="text" name="attack" className={s.inputData}
                            onChange={changing} value={data.attack}/></label>
                        <label htmlFor="defense" className={s.labelData} >Defense 
                            <input type="text" name="defense" className={s.inputData}
                            onChange={changing} value={data.defense}/></label>
                        <label htmlFor="speed" className={s.labelData} >Speed
                            <input type="text" name="speed" className={s.inputData}
                            onChange={changing} value={data.speed}/></label>
                        <label htmlFor="height" className={s.labelData} >Height 
                            <input type="text" name="height" className={s.inputData}
                            onChange={changing} value={data.height}/></label>
                        <label htmlFor="weight" className={s.labelData} >Weight 
                            <input type="text" name="weight" className={s.inputData}
                            onChange={changing} value={data.weight}/></label>
                        <button type="submit" onClick={submiting}
                            className={s.btn}>Edit</button>
                    </fieldset>
                    <fieldset className={s.types}>
                        <label htmlFor="types" className={s.itemType} >Types<br/></label>
                        <div className={s.listTypes}>
                            { types && types.map( t => <label className={s.itemType} key={t} >{t}
                                <input type="checkbox" name={t}
                                onChange={checking} 
                                defaultChecked={actualPokemon.types?.includes(t)?true:false}
                                className={s.check}
                                /></label> ) }
                        </div>
                    </fieldset>
                </div>
            </form>
        </div>
    )
}
