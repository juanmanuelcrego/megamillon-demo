// INICIAR SORTEO
iniSorteo= () => {
    let jug1= document.getElementById('jug_1').value;
    let jug2= document.getElementById('jug_2').value;
    let jug3= document.getElementById('jug_3').value
    let jug4= document.getElementById('jug_4').value
    let jug5= document.getElementById('jug_5').value

    let count= 0

    if (jug1 < 10){
        const p= 10;
        document.getElementById('num_1').innerHTML= Math.floor(Math.random() * p);
            if(jug1 == document.getElementById('num_1').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_1').innerHTML= jug1
            } else {
                document.getElementById('acert_1').innerHTML= "-"
            }
    } else {
        document.getElementById('num_1').innerHTML= Math.floor(Math.random() * 100);
            if(jug1 == document.getElementById('num_1').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_1').innerHTML= jug1
        } else {
            document.getElementById('acert_1').innerHTML= "-"
        }
    }

    if (jug2 > 10 && jug2 < 20){
        const p= 20;
        document.getElementById('num_2').innerHTML= Math.floor(Math.random() * p) + 10;
            if(jug2 == document.getElementById('num_2').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_2').innerHTML= jug2
            } else {
                document.getElementById('acert_2').innerHTML= "-"
            }
    } else {
        document.getElementById('num_2').innerHTML= Math.floor(Math.random() * 100);
            if(jug2 == document.getElementById('num_2').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_2').innerHTML= jug2
            } else {
                document.getElementById('acert_2').innerHTML= "-"
            }
    }

    if (jug3 < 10){
        const p= 10;
        document.getElementById('num_3').innerHTML= Math.floor(Math.random() * p);
            if(jug3 == document.getElementById('num_3').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_3').innerHTML= jug3
            } else {
                document.getElementById('acert_3').innerHTML= "-"
            }
    } else {
        document.getElementById('num_3').innerHTML= Math.floor(Math.random() * 100);
            if(jug3 == document.getElementById('num_3').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_3').innerHTML= jug3
            } else {
                document.getElementById('acert_3').innerHTML= "-"
            }
    }

    if (jug4 < 10){
        const p= 10;
        document.getElementById('num_4').innerHTML= Math.floor(Math.random() * p);
            if(jug4 == document.getElementById('num_4').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_4').innerHTML= jug4
            } else {
                document.getElementById('acert_4').innerHTML= "-"
            }
    } else {
        document.getElementById('num_4').innerHTML= Math.floor(Math.random() * 100);
            if(jug4 == document.getElementById('num_4').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_4').innerHTML= jug4
            } else {
                document.getElementById('acert_4').innerHTML= "-"
            }
    }

    if (jug5 < 10){
        const p= 10;
        document.getElementById('num_5').innerHTML= Math.floor(Math.random() * p);
            if(jug5 == document.getElementById('num_5').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_5').innerHTML= jug5
            } else {
                document.getElementById('acert_5').innerHTML= "-"
            }
    } else {
        document.getElementById('num_5').innerHTML= Math.floor(Math.random() * 100);
            if(jug5 == document.getElementById('num_5').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acert_5').innerHTML= jug5
            } else {
                document.getElementById('acert_5').innerHTML= "-"
            }
    }



    if (count == 5) {
        setTimeout(function(){
            document.getElementById('balls').style.display = "block"
        }, 1000);
        setTimeout(function() {
            document.getElementById('resultado').innerHTML= "¡5 aciertos!"
            document.getElementById('resultado-1').style.display = "block"
            
        }, 4000)

    } else if (count == 4){
        setTimeout(function(){
            document.getElementById('balls').style.display = "block"
        }, 1000);
        setTimeout(function() {
            document.getElementById('resultado').innerHTML= "¡4 aciertos!" 
            document.getElementById('resultado-1').style.display = "block"
        }, 4000)

        
    } else if(count == 3){
        setTimeout(function(){
            document.getElementById('balls').style.display = "block"
        }, 1000);
        setTimeout(function() {
            document.getElementById('resultado').innerHTML= "¡3 aciertos!"
            document.getElementById('resultado-1').style.display = "block"
        }, 4000)

        
    } else {
        setTimeout(function(){
            document.getElementById('balls').style.display = "block"
        }, 1000);
        setTimeout(function() {
            document.getElementById('resultado').innerHTML= "0 aciertos..." 
            document.getElementById('resultado-1').style.display = "block" 
        }, 4000)
       
    }

}


btnBack = () => {
    if(document.getElementById('resultado-1').style.display === "block") {
        document.getElementById('resultado-1').style.display = "none"
        document.getElementById('balls').style.display = "none"
    }
}

// MEGA MILLON 

iniMega = () => {
    let mega1= document.getElementById('mega_1').value;

    let count= 0

    if (mega1 < 10){
        const p= 10;
        document.getElementById('meg_1').innerHTML= Math.floor(Math.random() * p);
            if(mega1 == document.getElementById('meg_1').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acertmega_1').innerHTML= mega1
                document.getElementById('jack').innerHTML= mega1
            } else {
                document.getElementById('acertmega_1').innerHTML= "-"
            }
    } else {
        document.getElementById('meg_1').innerHTML= Math.floor(Math.random() * 100);
            if(mega1 == document.getElementById('meg_1').innerHTML){
                count ++
                console.log(count)
                console.log('Numero Correcto!')
                document.getElementById('acertmega_1').innerHTML= mega1
                document.getElementById('jack').innerHTML= mega1
        } else {
            document.getElementById('acertmega_1').innerHTML= "-"
        }
    }

    if (count == 1) {
        setTimeout(function(){
            document.getElementById('balls-power').style.display = "flex"
        }, 1000);
        setTimeout(function(){
            document.getElementById('resultado-mega').innerHTML= "¡Acertaste!"
            document.getElementById('resultado-2').style.display = "block"
        }, 4000);
        setTimeout(function(){
            document.getElementById('content-jack').style.display = "flex"
        }, 5500);
        setTimeout(function(){
            document.getElementById('content-jack').style.display = "none"
        }, 15000);
            
    } else {
        setTimeout(function(){
            document.getElementById('balls-power').style.display = "flex"
        }, 1000);
        setTimeout(function(){
            document.getElementById('resultado-mega').innerHTML= "No acertaste..." 
            document.getElementById('resultado-2').style.display = "block"
        }, 4000);
        
    }

}

btnBackMega = () => {
    if(document.getElementById('resultado-2').style.display === "block") {
        document.getElementById('resultado-2').style.display = "none"
        document.getElementById('balls-power').style.display = "none"
    }
}