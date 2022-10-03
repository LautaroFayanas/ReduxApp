import axios from "axios";

export const PokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})