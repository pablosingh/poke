export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_ACTUAL_PAGE_CARDS = 'SET_ACTUAL_PAGE_CARDS';
export const LOAD_PAGES_CARDS = 'LOAD_PAGES_CARDS';
export const LOAD_SUB_CARDS = 'LOAD_SUB_CARDS';
export const LOAD_SUB_PAGES_CARDS = 'LOAD_SUB_PAGES_CARDS';
export const ORDER_BY_NAME_ASC = 'ORDER_BY_NAME_ASC';
export const ORDER_BY_NAME_DES = 'ORDER_BY_NAME_DES';
export const ORDER_BY_ATTACK_ASC = 'ORDER_BY_ATTACK_ASC';
export const ORDER_BY_ATTACK_DES = 'ORDER_BY_ATTACK_DES';
export const LOAD_TYPES = 'LOAD_TYPES';
export const SET_POKEMON = 'SET_POKEMON';
export const SEARCH_BY_ID = 'SEARCH_BY_ID';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTERS_BY_TYPES = 'FILTERS_BY_TYPES';
export const ADD_TO_CARDS = 'ADD_TO_CARDS';
export const ERROR_POKEMON = { name: 'ERROR - NOMBRE DUPLICADO' };
export const EDIT = 'EDIT';
export const DELETE_POKEMON = 'DELETE_POKEMON';
export const SET_LOADING = 'SET_LOADING';

export function loadCards(){
    return async function (dispatch){
        const promesas = [];
        const subPromesas = [];
        const all = [];
        try {
            await fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=500` )
                .then( js => js.json() )
                .then( data => data.results.forEach( r => promesas.push( fetch(r.url) ) ))
                .then( () => {
                    Promise.all(promesas)
                        .then( values => values.forEach( v => subPromesas.push( v.json() ) ) )
                        .then( () => {
                            // console.log(subPromesas);
                            Promise.all(subPromesas)
                                .then( pokemones => {
                                    pokemones.forEach( p => {
                                        let types = [];
                                        p.types.forEach( t => types.push(t.type.name));
                                        all.push({
                                            idApi: p.id,
                                            name: p.name,
                                            image: p.sprites.front_default,
                                            hp: p.stats[0].base_stat,
                                            attack: p.stats[1].base_stat,
                                            defense: p.stats[2].base_stat,
                                            speed: p.stats[5].base_stat,
                                            height: p.height,
                                            weight: p.weight,
                                            types
                                        });
                                    });
                                } )
                                // .then( () => console.log(all) )
                                .then( cards => dispatch( { type: LOAD_CARDS, payload: all } ) )
                                .then( s => dispatch( { type: SET_LOADING, payload: false } ) )
                        } )
                })
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        }
    };
};


export function loadTypes(){
    const types = [
        "normal", "fighting", "flying", "poison", "ground",
        "rock", "bug", "ghost", "steel", "fire", 
        "water", "grass", "electric", "psychic", "ice", 
        "dragon", "dark","fairy"
    ];
    return {
        type: LOAD_TYPES, 
        payload: types
    };
};

export function searchPokemon(idOrName){
    if(isNaN(Number(idOrName)))
        return {
            type: SEARCH_BY_NAME,
            payload: idOrName
        };
    else
        return {    
            type: SEARCH_BY_ID,
            payload: idOrName
        };
};

export const setActualPageCards = (page) => ({ type: SET_ACTUAL_PAGE_CARDS, payload: page });

export const loadPagesCards = () => ({ type: LOAD_PAGES_CARDS, payload: null });

export const loadSubCards = () => ({ type: LOAD_SUB_CARDS, payload: null });

export const loadSubPagesCards = () => ({ type: LOAD_SUB_PAGES_CARDS, payload: null });

// ***********************************************************************************
export const orderByNameAsc = () => ({ type: ORDER_BY_NAME_ASC, payload: null });
export const orderByNameDes = () => ({ type: ORDER_BY_NAME_DES, payload: null });
export const orderByAttackAsc = () => ({ type: ORDER_BY_ATTACK_ASC, payload: null });
export const orderByAttackDes = () => ({ type: ORDER_BY_ATTACK_DES, payload: null });
// ***********************************************************************************

export const filtersByTypes = (types) => ({ type: FILTERS_BY_TYPES, payload: types });

export const addToCards = (pokemon) => ({ type: ADD_TO_CARDS, payload: pokemon });

export const edit = (pokemon) => ({ type: EDIT, payload: pokemon }); 
export const deletePokemon = (idApi) => ({ type: DELETE_POKEMON, payload: idApi });
export const setLoading = () => ({ type: SET_LOADING, payload: null});