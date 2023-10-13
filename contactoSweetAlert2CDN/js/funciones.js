validarContacto = () => {
    //Validar campos vacios
    let documento = document.querySelector('#documento');
    console.log(documento.value);
    let nombres = document.querySelector('#nombres');
    console.log(nombres.value);
    if (documento.value.length == 0){
        // alert('El documento está vacio, verifique.');
        Swal.fire(
            'El documento está vacio, verifique',
            '',
            'error'
          )
    }
    else{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Datos enviados correctos',
                showConfirmButton: false,
                timer: 2000
            })
        }
        if (nombres.value.length == 0){
        // alert('El nombre está vacio, verifique.');
        Swal.fire(
            'El nombre está vacio, verifique',
            '',
            'error'
          )
    }
}

//Capturar el objeto al cual se le dará click
const boton = document.querySelector('#btnEnviar');

//Escuchar eventos del botón
boton.addEventListener('click',validarContacto)