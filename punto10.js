/*let alimentos= [
    {nombre: "zanahoria", tipo : "vegetal", nivelEnerigia: 201},
    {nombre: "cucaracha", tipo : "insecto", nivelEnerigia: 210},
    {nombre: "papa", tipo : "vegetal", nivelEnerigia: 340},
    {nombre: "pepino", tipo : "vegetal", nivelEnerigia: 301},
]*/
let nombres = [
    "Hormiga",
    "Gusano",
    "Escarabajo",
    "Cucaracha",
    "Abeja",
    "Mariposa",
    "Margarita",
    "Papa",
    "Zanahoria",
    "Lechuga",
    "Espinaca",
    "Tomate",
    "Pimiento",
    "Cebolla",
    "Gallina",
    "Perro",
    "Gato",
    "Ratón",
    "Elefante",
    "Jirafa"
  ];
let tipos = ["vegetal","animal","insecto"];

/*function generarNumero(min, max) {
    return Math.floor (Math.random() * (max - min) + min);
  }

function generarAlimentos() {
    let alimentos=[]
    for(i=0;i<10;i++){
        let nombre= nombres[Math.floor(Math.random() * nombres.length)];
        let tipo= tipos[Math.floor(Math.random() * tipos.length)];
        let nivelEnergia= generarNumero(100,501)
        alimentos.push({nombre:nombre,tipo:tipo,nivelEnergia:nivelEnergia})
    }
   // console.log (alimentos)
    return alimentos
}
    function primaria (alimentos,callback){
        setTimeout(function () {
                        let resultado= alimentos.filter(
                            function(alimento){
                                return(alimento.tipo==="vegetal" && alimento.nivelEnergia > 200)
                            }
                        )
                        console.log(resultado)
                        callback(resultado)
                    },2000
        )              
        
    } 
    let alimentos = generarAlimentos()
console.log(alimentos)
   primaria(alimentos,function(resultado){
        let nivelEnergia=0
        resultado.forEach(resultado => {
            nivelEnergia= resultado.nivelEnergia + nivelEnergia
        });
        console.log("La sumatoria de niveles de energia es " + nivelEnergia)
    })*/ 
    let generarNumero= (min, max)=> {
        return Math.floor (Math.random() * (max - min) + min);
      }
    
    let generarAlimentos=() =>{
        let alimentos=[]
        for(i=0;i<10;i++){
            let nombre= nombres[Math.floor(Math.random() * nombres.length)];
            let tipo= tipos[Math.floor(Math.random() * tipos.length)];
            let nivelEnergia= generarNumero(100,501)
            alimentos.push({nombre:nombre,tipo:tipo,nivelEnergia:nivelEnergia})
        }
       // console.log (alimentos)
        return alimentos
    }
        let primaria = (alimentos,callback) =>{
            setTimeout(() =>{
                            let resultado= alimentos.filter(
                                (alimento)=>{
                                    return(alimento.tipo==="vegetal" && alimento.nivelEnergia > 200)
                                }
                            )
                            console.log(resultado)
                            callback(resultado)
                        },2000
            )              
            
        } 
        let alimentos = generarAlimentos()
    console.log(alimentos)
       primaria(alimentos,(resultado)=>{
            let nivelEnergia=0
            resultado.forEach(resultado => {
                nivelEnergia= resultado.nivelEnergia + nivelEnergia
            });
            console.log("La sumatoria de niveles de energia es " + nivelEnergia)
        })
           
       
    
    
