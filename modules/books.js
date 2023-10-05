import {uri as configURI} from '../config.js'
const uri = `
${configURI.protocol +
configURI.hostname}:
${configURI.port}/`
const config ={
    method: undefined,
    headers: {"Content-Type":"application/json"},
    body: undefined
}
let objeto = {
    greetings: "Bye",
    person: "Andrew",
    age: 21,
    date:"tomorrow"
}
export const getAll = async (endpoint) => {
    config.method = "GET"
    const data  = await (await fetch(`${uri + endpoint}`, config)).json();
    return data
}
export const post_Funct = async (obj) => {
    config.method = "POST"
    config.body = JSON.stringify(obj);
    
    const data  = await (await fetch(`${uri}BOOK`, config)).json();
    return data

}
export const deleteOne = async (endpoint, id) => {
    if (typeof id !== 'number') return {status: 400, message: 'Invalid Type: ' + id};
    config.method = "DELETE"
    const data  = await (await fetch(`${uri + endpoint + '/' + id}`, config)).json();
    return data
}



// post_Funct(objeto);
console.log(await deleteOne('BOOK', 5));

