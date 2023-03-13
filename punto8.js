/*PROBLEMA: Para descubrir la ubicación de un listado con los últimos guerreros jedi de la galaxia se debe recibir un listado de 15 mapas los cuales tienen la siguiente información {nombrePlaneta, latitud, longitud, nivel de oxígeno en el planeta, volumen total del agua del planeta}. Diseñe una solución para:
• Sumar la cantidad total de agua de los 15 planetas
• Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
• Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno
negativo y de ser así mostrar la información general de este
• Encontrar si alguno de los 15 planetas no tiene agua y mostrar la
información general de este*/

let planetas=[
    {
        nombrePlaneta: "neptuno",
        latitud: 23,
        longitud: 42,
        nivelOxígeno:-25 , 
        totalAgua:50
    },
    {
        nombrePlaneta: "pluton",
        latitud: 56,
        longitud: 35,
        nivelOxígeno:48 , 
        totalAgua:0
    },
    {
        nombrePlaneta: "tierra",
        latitud: 45,
        longitud: 78,
        nivelOxígeno: 92 , 
        totalAgua:65
    }

];

let sumarAgua= planetas=>{
    let sumaAgua=0
    let sumaTotalOxigeno=0
    let resultado=[]
    planetas.forEach(planeta => {
        sumaAgua+=planeta.totalAgua;
        sumaTotalOxigeno+= planeta.nivelOxígeno;

    });
    return resultado.push=[{totalAgua:sumaAgua, TotalOxigeno: sumaTotalOxigeno * 100 }]
}

/*
function sumarAgua(planetas) {
    let sumaAgua=0
    let sumaTotalOxigeno=0
    let resultado=[]
    planetas.forEach(planeta => {
        sumaAgua+=planeta.totalAgua;
        sumaTotalOxigeno+= planeta.nivelOxígeno;
    });
    return resultado.push=[{totalAgua:sumaAgua, TotalOxigeno: sumaTotalOxigeno * 100 }]
}
*/
let buscarNegativos=(planetas)=>{
    let planetanegativo= planetas.filter(planeta=> {
        return (planeta.nivelOxígeno<0)
    })
    console.log(planetanegativo)
} 

let buscarsinAgua=(planetas)=>{
    let planetasinAgua= planetas.filter(planeta=> {
        return (planeta.totalAgua==0)
    })
    console.log(planetasinAgua)
}

let totalAgua= sumarAgua(planetas)
console.log(totalAgua)
buscarNegativos(planetas)
buscarsinAgua(planetas)