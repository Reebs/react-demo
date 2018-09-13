import axios from 'axios';

export function getBandInfo(band){
    return axios.get(`https://rest.bandsintown.com/artists/${band}?app_id=davedemo`);
}
