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
export const post_Funct = async (obj) => {
    config.method = "POST"
    config.body = JSON.stringify(obj);
    
    const data  = await (await fetch(`${uri}BOOK`, config)).json();
    return data

}
export const deleteOne_Func = async (id) => {
    if (typeof id !== 'number') return {status: 400, message: 'Invalid Type: ' + id};
    config.method = "DELETE"
    const data  = await (await fetch(`${uri + 'BOOK' + '/' + id}`, config)).json();
    return data
}
export const put_Funct = async (obj, id) => {
    config.method = "PUT"
    config.body = JSON.stringify(obj);
    
    const data  = await (await fetch(`${uri+'BOOK'+ '/' + id}`, config)).json();
    return data
}
// post_Funct(objeto);
console.log(await put_Funct(objeto, 1));

