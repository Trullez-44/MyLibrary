import prompts from "prompts";
const url = "http://127.0.0.1:5444/TESTING-SAPA"
const data_get=async() => {
  let data = await(await fetch(url)).json();
}

const number = await prompts({
    type: 'number',
    name: 'value',
    message: 'Ingrese un numero: '
  });

// data_get();
let dict = {
    greetings: 'hi',
    person:'John',
    age: 34,
    //date
    date:' today'
}
const data_post=async () => {
  
    let call = (await fetch("http://127.0.0.1:5444/TESTING-SAPA"))
    let data = await call.json();
    let config ={
      method:"POST",
      header: {"content-type":"application.json"},
      body: JSON.stringify(dict)
    }
  }
data_post();
const data_put=async (number) => {
  
  let call = (await fetch("http://127.0.0.1:5444/TESTING-SAPA"+id))
  let data = await call.json();
  let config ={
    method:"PUT",
    header:{"content-type":"application.json"},
    body: JSON.stringify(data)
  }
}

data_put();