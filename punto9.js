/*function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante){
    setTimeout(function(){
        let estudiante={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            planeta:planeta,
            estatura:estatura,
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}
crearEstudiante("pedro","marte",14,1.86, function(edad){
    if(edad<15){
        console.log("su edad es " + edad + " tu clase es manajo de la fuerza")

    }else{
        console.log("su edad es " + edad + " tu clase será uso del sable")

    }
})*/
let crearEstudiante=(nombre,planeta,edad,estatura,clasificarEstudiante)=>{
    setTimeout(()=>{
        let estudiante={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            planeta:planeta,
            estatura:estatura,
        }
        clasificarEstudiante(estudiante.edad)
    },1000)
}
crearEstudiante("pedro","marte",14,1.86, (edad)=>{
    if(edad<15){
        console.log("su edad es " + edad + " tu clase es manajo de la fuerza")

    }else{
        console.log("su edad es " + edad + " tu clase será uso del sable")

    }
})