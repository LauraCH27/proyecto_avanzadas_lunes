/**PROBLEMA: se necesita clasificar 10 números enteros positivos o negativos que contienen códigos de naves de guerra. 
 * Diseño un algoritmo que permita recibir dichos 50 números e indicar 
 * ¿Cuál fue el más cercano a cero? (Si el número es negativo se debe mostrar el resultado del valor absoluto) */
/*let numeros=[-10, 2, 3.5, -8, -4.5, 34, -1, -56, 45, -23, -9]
function cercaCero(datos){
    //let nmenor = 0
    let nmenor = datos.find(function (dato){
        return (dato > 0)
    })
    if (datos[0]< 0){
           datos[0] * -1   
    }else{
         datos[0]
    }
    datos.forEach( dato=> {
        if(dato < 0){
          let datotmp =   dato * -1
                if(datotmp < nmenor ){
                    nmenor = datotmp
                }
                    }else if (dato < nmenor){
                        nmenor = dato
                    }  
    });
    console.log(nmenor)
}
cercaCero(numeros)*/
let numeros=[-10, 2, 3.5, -8, -4.5, 34, -1, -56, 45, -23, -9]
function cercaCero(datos){
    //let nmenor = 0
    let nmenor = datos.find((dato)=>{
        return (dato > 0)
    })
    if (datos[0]< 0){
           datos[0] * -1   
    }else{
         datos[0]
    }
    datos.forEach( dato=> {
        if(dato < 0){
          let datotmp =   dato * -1
                if(datotmp < nmenor ){
                    nmenor = datotmp
                }
                    }else if (dato < nmenor){
                        nmenor = dato
                    }  
    });
    console.log(nmenor)
}

