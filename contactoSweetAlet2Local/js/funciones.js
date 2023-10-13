validarContacto = () => {
    //Validar campos vacios
    let documento = document.querySelector('#documento');
    console.log(documento.value);
    let nombres = document.querySelector('#nombres');
    console.log(nombres.value);
    if (documento.value.length == 0){
        // alert('El documento está vacio, verifique.');
        Swal.fire(
                'El docuemntos esta vacio, verificar',
                    '',
                'error'

)



    }

else{
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 2000
      })

}
    if(nombres.value.length == 0){
        // alert('El nombre está vacio, verifique.');

        Swal.fire('El nombre está vacio, verifique')


        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //       )
        //     }
        //   })



    }

   
}

//Capturar el objeto al cual se le dará click
const boton = document.querySelector('#btnEnviar');







//Escuchar eventos del botón
boton.addEventListener('click',validarContacto)