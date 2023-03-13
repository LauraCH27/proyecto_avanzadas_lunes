/**2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de acceso a las naves 
 * de guerra los cuáles reposan en la base de datos central, para ello debe programar una función que permita recibir la palabra clave de cada nave y separar imprimiendo solo el nombre del piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn */
let NavesPiloto = [
    {codigo:"ARQ2557",  nombre: "Finn"},
    {codigo:"ARQ2555",  nombre: "Sara_Bel_Sun"},
    {codigo:"ARQ2555",  nombre: "Laura_Bel_Sun"},
    {codigo:"ARQ2556",  nombre: "Nodin_Chavdri"}
]
/*function buscarnombre(NavesPiloto){
let pilotos=NavesPiloto.find(function(piloto) {
    return (piloto.codigo=="ARQ2555")
} )*/

let buscarnombre=(NavesPiloto)=>{
    let pilotos=NavesPiloto.find(function(piloto) {
        return (piloto.codigo=="ARQ2555")
    } )
    console.log(pilotos.nombre)
}
buscarnombre(NavesPiloto)