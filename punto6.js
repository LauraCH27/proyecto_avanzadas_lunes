/**PROBLEMA: Para habilitar la guerra de los clones es necesario clasificar la edad de estos, 
 * elabore un programa que permita recibir 20 edades y 20 códigos diferentes generadas aleatoriamente 
 * y determine cual de esas edades es la
 *  mayor. Si se repite la misma edad se debe contar el número de repeticiones */

/*function generarNumero(min, max) {
    return Math.floor (Math.random() * (max - min) + min);
  }
function generarEdadAleatoria() {
    let clones =[]
    for(i=1;i<100;i++){
    let random = Math.floor(Math.random()*100)
    let codigos = generarNumero(100,501)
    clones.push({edades:random, codigos:codigos})
    }
    console.log(clones)

    return clones
  }
  let edadaleatoria = generarEdadAleatoria()
  function mayorEdad (clones){
        setTimeout (function(){
            let mayor = 0
              let repeticiones= 0
              clones.forEach(function(clone){
                 if(mayor < parseInt( clone.edades)) {
                    mayor = clone.edades;
                        }else if (clone.edades === mayor){
                          repeticiones ++;
                        }              
              })
            console.log(`La edad mayor es ${mayor} y se repite ${repeticiones} veces.`)
            },2000)      
      }
      mayorEdad(edadaleatoria);*/

      let generarNumero=(min, max) =>{return Math.floor (Math.random() * (max - min) + min);}
    let generarEdadAleatoria=()=> {
        let clones =[]
        for(i=1;i<20;i++){
        let random = Math.floor(Math.random()*100)
        let codigos = generarNumero(100,501)
        clones.push({edades:random, codigos:codigos})
        }
        console.log(clones)
    
        return clones
      }
      let edadaleatoria = generarEdadAleatoria()
      let mayorEdad = (clones)=>{
            setTimeout (()=>{
                let mayor = 0
                  let repeticiones= 0
                  clones.forEach(function(clone){
                     if(mayor < parseInt( clone.edades)) {
                        mayor = clone.edades;
                            }else if (clone.edades === mayor){
                              repeticiones ++;
                            }              
                  })
                console.log(`La edad mayor es ${mayor} y se repite ${repeticiones} veces.`)
                },2000)
               
          }
          mayorEdad(edadaleatoria);
          
          
    
      
    
    
    
    
    
    
      
      

  





