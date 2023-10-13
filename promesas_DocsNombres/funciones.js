


const buscarUsuario = (dato)=>{


const documentos = [1010, 1011, 1020, 1030, 1957, 5550];
const nombres = ['carmen', 'ines', 'juan', 'Daniela', 'Maria', 'janeth'];
 // Agregar el codigo que devuelva en la promesa el nombre solo si
 // el documento existe.!

/* Check if a value exists in the data array */
    const inputdato = documentos.indexOf(parseInt(dato));
    let encontrado = false;

    for (let i = 0; i < documentos.length; i++) {
      // if(documentos.indexOf(inputdato) !== -1){    
      if (dato == documentos[i]) {
        encontrado = true;

      }
    
    }
  
  return new Promise((resolve, reject) => {

    if (inputdato !=-1) {
     // let C = juntarArreglos(A, B);
    // const nombre=C[0][i];
      const nombre=nombres[inputdato];
  
   resolve(nombre);
   
      
    } else {
      reject('Dato No Encontrado');
    }
  });




};




document.querySelector('#btnBuscar')
.addEventListener('click',
()=>buscarUsuario(document.getElementById('dato').value)
.then(mensaje=>console.log(mensaje))
.catch(error=>console.log(error))
)




/* TRY-- Forma_2: función para juntar los elementos de dos arreglos diferentes. */
// function juntarArreglos(A, B) {
//   let contenido = [A, B];

//   return contenido.reduce(
//       (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
//       Array.from({
//           length: Math.max(...contenido.map(d => d.length))
//       }).map(d => [])
//   );
// };

