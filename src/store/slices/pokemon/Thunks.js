import { PokemonApi } from "../../../Api/PokemonApi";
import { setPokemons, startLoadingPokemons } from "./PokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async ( dispatch , getState ) => {
        dispatch( startLoadingPokemons() );
        
        //Peticion http
        const {data} = await PokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        console.log(data);

        //dispatch(setPokemons());
        dispatch(setPokemons ({ pokemons: data.results, page: page + 1 }) )
    }

}