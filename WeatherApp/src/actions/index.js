import axios from 'axios'

const API_KEY = '931566d6ea9615f577900f1bbde66a39';
const URL= 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER =  'FETCH_WEATHER';

export function fetchWeather(city,isCanada){
    let constructUrl = URL + '&q='+ city;
    constructUrl = isCanada === true ? constructUrl = constructUrl + ',ca' : constructUrl = constructUrl + ',us';


    console.log(constructUrl);
    //take that url and make a get request on it, return a promise
    const request = axios.get(constructUrl);

    return {
        type: FETCH_WEATHER,
        //does the action have a promise as a payload ? In this case yes !
        //this stop until the promise is resolved, (until request gets the data from server, and then return the DATA to the reducers, its the middleware)
        payload: request
    };
}