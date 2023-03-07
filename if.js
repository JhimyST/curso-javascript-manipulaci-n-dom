var piedra="piedra", papel="papel", tijera="tijera";
function juego(user, maquina){
    if (user != maquina  ){
        if (user==piedra) {
            if (maquina==papel) {
                console.log("perdiste con piedra vs papel")
            }else if(maquina==tijera){
                console.log("ganaste con piedra vs tijera");
            } 
        }else if(user==papel){
            if (maquina==piedra) {
                console.log("ganaste con papel vs piedra")
            }else if(maquina==tijera){
                console.log("perdiste con papel vs tijera");
            }
        }else{
            if (maquina==piedra) {
                console.log("perdiste con tijera vs piedra")
            }else if(maquina==papel){
                console.log("ganaste con tijera vs papel");
            }
        }      
    }else{
        console.log("empate")
    }
}
juego(tijera, tijera);