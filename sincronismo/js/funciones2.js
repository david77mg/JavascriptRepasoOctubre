proceso1=()=>{
let suma1=0

    for(let i=0; i<5000;i++)
    {
        suma1+=i
    }
    return suma1;
  
}


proceso2=()=>{
    let suma2=0
   
        for(let i=0; i<20000;i++)
        {
            suma2+=i
        }
        return suma2;
}


    proceso3=()=>{
        let suma3=0
  
            for(let i=0; i<1000;i++)
            {
                suma3+=i
            }
 
            return suma3;
        
        
    }

// email:
// dilopezz@sena.edu.co

// 
document.querySelector('#btnBuscar')
.addEventListener('click',()=>{
    console.log('la suma1 es:'+ proceso1());
    console.log('la suma2 es:'+ proceso2());
    console.log('la suma3 es:'+ proceso3());

})

// hacerlo sincronico de forma normal


