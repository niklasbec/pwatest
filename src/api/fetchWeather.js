import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character';

export const fetchWeather = async () => {
    const {data} = await axios.get(URL)
    return data
}