import axios from 'axios';

const URL="http://localhost:4000";

export const getDataApi = async()=>{
    try{
        console.log("panthil malaiya")
        // const data = await axios.get(`${URL}/auth/google/callback`);
        console.log('***',"data")
        return true
    }catch(e){
        console.log("error ",e);
    }
}