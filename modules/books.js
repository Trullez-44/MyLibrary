import { uri as configURI } from "../config.js";
const uri = `${configURI.protocol + configURI.hostname}:${configURI.port}/`;
const config = {
	method: undefined,
	headers: { "Content-Type": "application/json" },
	body: undefined,
};
let objeto = {
	// releaseDate: "2023-10-11",
	// authorId: 1 ,
	// isbn:'ISBN' ,
	// title:'Harry Potter' ,
	// pagination: 230,
	// statusBook: 1,
	// editorialId: 1,
	// categoryId: 1,

};
export const getAll_Funct = async () => {
	config.method = "GET";
	const data = await (await fetch(`${uri + "BOOK"}`, config)).json();
	return data;
};
export const post_Funct = async (obj, consult) => {
	config.method = "POST";
	config.body = JSON.stringify(obj);
    //FALTA HACER VALIDACIONES
    // if (typeof obj !== 'object') return { status: 400, message: 'Invalid Type: ' + obj };
    // if(Array.isArray(obj)) return { status: 400, message: 'Invalid Type: ' + obj };}
	if (consult(obj)) {
		const data = await (await fetch(`${uri}BOOK`, config)).json();
		return "Associated ID: " + data.id;
	} else {
		return console.log("The object is empty");
	}
};
export const deleteOne_Func = async (id) => {
	if (typeof id !== "number") return { status: 400, message: "Invalid Type: " + id };
	config.method = "DELETE";
	// const data = await fetch(`${uri}BOOK/${id}`, config);
    //THE CODE BELOW NEEDS A REESTRUCTURATION,REFACTOR AND KISS
	if (data.status != 404) {
		let res = await data.json();
		console.log("Action was done succesfully");
		return res;
	} else {
		return { status: 404, message: "Invalid ID" };
	}
};
export const put_Funct = async (obj={}) => { 
	if(Object.entries(obj).length==0 || Array.isArray(obj) || typeof obj !== 'object' ) return { status: 400, message: "The object does is empty"}
	// obj.id = 2
	//Desestructuración para el uso y verificación de la información del OBJETO ENTRANTE
	const {id, authorId, categoryId, editorialId, title, releaseDate, isbn, pagination, statusBook } = obj;
	//PRIMERO E IMPORTANTE, VALIDACIÓN DE ID
	if (typeof id !== "number") return { status: 400, message: "Invalid ID Type: " + id };
	//SEGUNDO, FECHAS SIGUIENTE DE HORAS Y ZONA HORARIA
	let date = new Date(releaseDate);
	if (!(date && date.getFullYear() <= 2040)) return { status: 400, message: "Invalid Date: " + releaseDate };
	//DEMÁS VALIDACIONES (D.T.O)
	if (typeof authorId !== "number") return { status: 400, message: "Invalid Author: " + authorId };
	if (typeof categoryId !== "number") return { status: 400, message: "Invalid Category: " + categoryId };
	if (typeof editorialId !== "number") return { status: 400, message: "Invalid Editorial: " + editorialId };
	if (typeof statusBook !== "number") return { status: 400, message: "Invalid Type: " + statusBook };
	if (typeof pagination !== "number") return { status: 400, message: "Invalid Number of Pages: " + pagination };
	if (typeof title !== "string") return { status: 400, message: "Invalid Ttile: " + title }
	if (typeof isbn !== "string") return { status: 400, message: "Invalid ISBN: " + isbn };
	//CONFIGURACIÓN DE REQUEST
	config.method = "PUT";
	config.body = JSON.stringify(obj);
	const data = await (await fetch(`${uri + "BOOK" + "/" + id}`, config)).json();
	return 'exito:)' + data
};
// const consult = (obj) => {
// 	if (Object.keys(obj).length != 0) {
// 		console.log("Action was done succesfully");
// 		return true;
// 	} else {
// 		console.log("CODE 404: NOT FOUND");
// 		return false;
// 	}
// };
console.log(await put_Funct(('dasd')));