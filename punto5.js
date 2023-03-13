/** PROBLEMA: Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada licencia de software vendida menos el 5% de deducciones por impuestos sobre el total devengadp. Codifica un programa que calcule e imprima el salario mensual de un vendedor dado;*/


//let licenciasVendidas = parseInt(prompt("Por favor ingrese el número de licencias vendidas:"));
function calcular(){

    let total_devengado = 3500000 + 1500000 * 3
    total_devengado -= total_devengado * 0.05
   
    return(total_devengado)
}
let arroja = calcular ()
console.log("El salario mensual total es:" + arroja);
/*let calcular=()=>{

    let total_devengado = 3500000 + 1500000 * 3
    total_devengado -= total_devengado * 0.05
   
    return(total_devengado)
}*/



