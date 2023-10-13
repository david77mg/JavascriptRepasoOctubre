// Definir 4 listas de datos numericos, implementar funcion asincronica
// por cada lista para buscar un documento. Si el dato
// existe, devolver en la promesa el dato encontrado.
 
    const lista1=[11223344, 55667788, 99101112];
    const lista2=[123456, 7891011, 98765];
    const lista3=[43210, 7777777, 1357911];
    const lista4=[98772569, 3015707761, 3052299328];

    let inputdato = document.querySelector('#dato');
 

    const buscarLista1 = async () => {
        return new Promise((resolve, reject) => {
            if (lista1.includes(parseInt(inputdato.value))) {
                resolve('Encontrado en la lista N° 1');
            } else {
                reject('Dato no encontrado en la lista N° 1');
            }
        });
    };
    
    const buscarLista2 = async () => {
        return new Promise((resolve, reject) => {
            if (lista2.includes(parseInt(inputdato.value))) {
                resolve('Encontrado en la lista 2');
            } else {
                reject('Dato no encontrado en la lista N° 2');
            }
        });
    };
    
    const buscarLista3 = async () => {
        return new Promise((resolve, reject) => {
            if (lista3.includes(parseInt(inputdato.value))) {
                resolve('Encontrado en la lista N° 3');
            } else {
                reject('Dato no encontrado en la lista N° 3');
            }
        });
    };
    
    const buscarLista4 = async () => {
        return new Promise((resolve, reject) => {
            if (lista4.includes(parseInt(inputdato.value))) {
                resolve('Encontrado en la lista N° 4');
            } else {
                reject('Dato no encontrado en la lista N° 4');
            }
        });
    };
    
    document.querySelector('#btnBuscar').addEventListener('click', () => {
        buscarLista1()
            .then((mensaje) => console.log(mensaje))
            .catch((error) => console.log(error));
        buscarLista2()
            .then((mensaje) => console.log(mensaje))
            .catch((error) => console.log(error));
        buscarLista3()
            .then((mensaje) => console.log(mensaje))
            .catch((error) => console.log(error));
        buscarLista4()
            .then((mensaje) => console.log(mensaje))
            .catch((error) => console.log(error));
    });