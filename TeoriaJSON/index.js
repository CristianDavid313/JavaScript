//Sentencia basica para manipular un JSON
async function obtenerData() {
    const response = await fetch("http://127.0.0.1:5500/TeoriaJSON/data.json");

    //Si recibimos la informacion en tipo texto lo podemos "traducir" a formato JSON si lo requerimos

    /*const json = await response.text();
    console.log(JSON.parse(json));*/

    const json = await response.json();
    console.log(json);
}

obtenerData();

//Sentencia para utilizar fetch then
async function obtenerData2() {
    const response = await fetch("http://127.0.0.1:5500/TeoriaJSON/data.json")
    .then(response => response.json)
    .then(json => console.log(json))
    .catch(error => console.log('Solicitud fallida', error))
}

obtenerData2();