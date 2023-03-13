/**3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante,
 *  Cree una función de flecha que permita calcular la temperatura media de la luna a partir de la temperatura máxima y mínima de cada día */

let tempmax = 8
let tempmin = 5 
/*function calcular (Tempmax ,Tempmin){
    return (Tempmax + Tempmin)/2
}*/
let calcular=(Tempmax ,Tempmin)=>{
    return (Tempmax + Tempmin)/2
}
let temperatura=calcular(tempmax, tempmin)
console.log(temperatura)

