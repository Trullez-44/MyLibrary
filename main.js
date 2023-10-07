// GET REQUEST FUNCTION
const url = "http://127.0.0.4:5444/TESTING-SAPA";
/* const data_get=async() => {
  let data = await(await fetch(url)).json();
  console.log(data[0]['testing-object']);
} */
//CALLING
// data_get();
//NEW DATA TO POST

//POST REQUEST FUNCTION
const data_post = async (data) => {
	// console.log(JSON.stringify(data));
	let config = {
		method: "POST",
		header: { "content-type": "application.json" },
		body: JSON.stringify(data),
	};
	console.log(config[2]);
	let sender = await (await fetch(url, config)).json();
	console.log(sender);
	console.log("finish");
};
//CALLING
/* data_post(dict); */
/*  */
// const data_put=async (id) => {
//   let call = (await fetch("http://127.0.0.1:5444/TESTING-SAPA"+id))
//   let data = await call.json();
//   let config ={
//     method:"PUT",
//     header:{"content-type":"application.json"},
//     body: JSON.stringify(data)
//   }
// }

// data_put();
