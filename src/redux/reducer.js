import { 
    LOAD_CARDS,
    LOAD_TYPES,
    LOAD_SUB_CARDS,
    SET_ACTUAL_PAGE_CARDS,
    LOAD_PAGES_CARDS,
    LOAD_SUB_PAGES_CARDS,
    ORDER_BY_NAME_ASC,
    ORDER_BY_NAME_DES,
    ORDER_BY_ATTACK_ASC,
    ORDER_BY_ATTACK_DES,
    SET_POKEMON,
    FILTERS_BY_TYPES,
    ADD_TO_CARDS,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    EDIT,
    DELETE_POKEMON
} from './actions';

import { order } from './functionsFilters';

const initialState = {
    cards: [],
    subCards: [],
    actualPageCards: 0,
    pagesCards: [],
    subPagesCards: [],
    maxPageCards: 0,
    types: [],
    // ******************
    amountForPage: 10,
    pokemon: {}
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            console.log("load");
            return {
                ...state,
                cards: [...action.payload]
            };
        case LOAD_TYPES:
            return {
                ...state,
                types: [...action.payload]
            };
        case SET_ACTUAL_PAGE_CARDS:
            let setPages = [];
            if ( action.payload > 4 && action.payload<=state.maxPageCards )
                for ( let i=action.payload-4; i<=action.payload+4 && i<=state.maxPageCards; i++ )
                    setPages.push(i);
            else
                setPages = state.pagesCards.slice(0,9);
            return {
                ...state,
                subPagesCards: [...setPages],
                actualPageCards: action.payload
            };
        case LOAD_PAGES_CARDS:
            let pages = [];
            let nroPagesCards = 0;
            nroPagesCards = state.cards.length / state.amountForPage;
            if (nroPagesCards%1 != 0) 
                ++nroPagesCards;
            nroPagesCards = Math.trunc(nroPagesCards);
            for( let i=0; i<nroPagesCards; i++)
                pages.push(i);
            return {
                ...state,
                maxPageCards: nroPagesCards,
                pagesCards: [...pages]
            };
        // case LOAD_SUB_PAGES_CARDS: 
        //     return {
        //         ...state,
        //         // subPagesCards: [...state.pagesCards.slice(0,10)]
        //     };
        case LOAD_SUB_CARDS:
            let subCards = [];
            let index = state.actualPageCards * state.amountForPage;
            subCards = state.cards.slice( 
                index,
                index + state.amountForPage
                );
            return {
                ...state,
                subCards
            };
        // ****************************************************
        case ORDER_BY_NAME_ASC: 
            return {
                ...state,
                cards: [...order(state.cards, 'name', 'asc')]
            };
        case ORDER_BY_NAME_DES: 
            return {
                ...state,
                cards: [...order(state.cards, 'name', 'des')]
            };
        case ORDER_BY_ATTACK_ASC: 
            return {
                ...state,
                cards: [...order(state.cards, 'attack', 'asc')]
            };
        case ORDER_BY_ATTACK_DES: 
            return {
                ...state,
                cards: [...order(state.cards, 'attack', 'des')]
            };
        case SET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            };
        case SEARCH_BY_NAME:
            let pokemon;
            pokemon = state.cards.find( p => p.name == action.payload);
            return {    
                ...state, 
                pokemon
            };
        case SEARCH_BY_ID:
            let pokemon2 = state.cards.find( p => p.idApi == action.payload);
            return {
                ...state, 
                pokemon: pokemon2
            };
        case FILTERS_BY_TYPES:
            let selectedTypes = [...action.payload];
            console.log(selectedTypes);
            let filterByTypes =  state.cards.filter( c => {
                console.log(c);
                for(let i=0; i<selectedTypes.length; i++){
                    if ( !c.types.includes( selectedTypes[i] ) )
                        return false;
                }
                return true;
            } );
            console.log(state.cards);
            console.log(filterByTypes);
            return {
                ...state,
                cards: [...filterByTypes]
            };
        case ADD_TO_CARDS:
            state.cards.push(action.payload);
            return {
                ...state,
            };
        case EDIT:
            let indexToEdit = state.cards.findIndex( p => p.idApi == action.payload.idApi);
            state.cards[indexToEdit] = action.payload;
            return {
                ...state,
                cards: [...state.cards]
            };
        case DELETE_POKEMON:
            // console.log("reducer deleted");
            let otherCards = state.cards.filter( c => c.idApi != action.payload );
            // console.log(otherCards);
            return {
                ...state,
                cards: otherCards
            };
        default: return {...state};
    }
};