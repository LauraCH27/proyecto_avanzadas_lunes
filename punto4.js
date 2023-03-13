/**PROBLEMA: QUI-GON JINN está encargado de revisar n sables de luz y contabilizar la cantidad de energía de sables que tienen negativa en Joules. Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables defectuosos con energía negativa fue de 2 sables. */
let entrada =[
    2,4,-8,5,-6, -3 , 10, -7
]
/*function contar (energia){
    let negativos= 0
     energia.forEach(negativo => {
        if(negativo < 0 ){
            negativos ++
        }  
    });
    return(negativos)

}*/
let contar=energia=>{let negativos= 0
     energia.forEach(negativo => {
        if(negativo < 0 ){
            negativos ++
        }  
    });
    return(negativos)

}
let entradas= contar (entrada)
console.log(entradas)
