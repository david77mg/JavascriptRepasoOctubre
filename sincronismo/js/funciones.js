proceso1=async()=>{
let suma1=0
return new Promise((resolve,reject) =>setTimeout(()=>{
    for(let i=0; i<5000;i++)
    {
        suma1+=i
    }
    resolve(`Proceso_1: La suma es ${suma1}`)
}, 5000) //retraso de 5 segundos
)
}


proceso2=async()=>{
    let suma2=0
    return new Promise((resolve,reject) =>setTimeout(()=>{
        for(let i=0; i<20000;i++)
        {
            suma2+=i
        }
        resolve(`Proceso_2: La suma es ${suma2}`)
    }, 10000) //retraso de 10 segundos
    )
}


    proceso3=async()=>{
        let suma3=0
        return new Promise((resolve,reject) =>setTimeout(()=>{
            for(let i=0; i<1000;i++)
            {
                suma3+=i
            }
            resolve(`Proceso_3: La suma es ${suma3}`)
        }, 3000) //retraso de 3 segundos
        )
    }

// email:
// dilopezz@sena.edu.co

// 
document.querySelector('#btnBuscar')
.addEventListener('click',()=>{
    proceso1().then(mensaje=>console.log(mensaje))

    proceso2().then(mensaje2=>console.log(mensaje2))

    proceso3().then(xyz=>console.log(xyz))


})



// hacerlo sincronico de forma normal