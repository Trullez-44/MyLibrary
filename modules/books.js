import configURI from '../config.js'
const uri = `${configURI.protocol + configURI.hostname}:${configURI.port}/`
const config ={
    method: undefined,
    header: {"content-type":"application.json"},
    body: undefined
}

export const GetAll = async (endpoint) => {
    config.method = "GET"
    const data  = await (await fetch(`${uri + endpoint}`, config)).json();
    return data

}
export const Post_Funct = async (endpoint, obj) => {
    config.method = "POST"
    config.body = JSON.stringify(obj);
    const data  = await (await fetch(`${uri + endpoint}`, config)).json();
    return data

}
getAll('book');