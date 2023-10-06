import {uri as configURI} from '../config.js'
const uri = `${configURI.protocol+configURI.hostname}:${configURI.port}/`
const config ={
    method: undefined,
    headers: {"Content-Type":"application/json"},
    body: undefined
}
let objeto = {
    greetings: "I miss you",
    person: "Luisa",
    age: 20,
    date:"5 months ago"
}
export const getAll_Funct = async () => {
    config.method = "GET"
    const data  = await (await fetch(`${uri + 'BOOK'}`, config)).json();
    return data
}
export const post_Funct = async (obj, consult) => {
    config.method = "POST"
    config.body = JSON.stringify(obj);
    if(consult(obj)){
        const data  = await (await fetch(`${uri}BOOK`, config)).json();
        return 'Associated ID: ' + data.id
    }
    else{
        return console.log('The object is empty');
    }
    
}
export const deleteOne_Func = async (id, consult) => {
    if (typeof id !== 'number') return {status: 400, message: 'Invalid Type: ' + id};
    config.method = "DELETE"
    const data  = await fetch(`${uri}BOOK/${id}`, config);
    if(data.status != 404){
        let res = await data.json();
        console.log('Action was done succesfully');
        return res
    }
    else{
        return {status: 404, message: 'Invalid ID'};
    }
}


export const put_Funct = async (obj, id, consult) => {
    config.method = "PUT"
    config.body = JSON.stringify(obj);
    const data  = await (await fetch(`${uri+'BOOK'+ '/' + id}`, config)).json();
    if(consult(data)){
        return data
    }
    else{
        return {}
    }
}
const consult = (obj) =>{
    if(Object.keys(obj).length != 0){
        console.log('Action was done succesfully');
        return true
    }
    else{
        console.log('CODE 404: NOT FOUND');
        return false
        }
    }

console.log(await post_Funct(objeto, consult));
