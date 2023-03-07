var piedra="piedra", papel="papel", tijera="tijera";
function juego(user, maquina){
    
        switch (true) {
            case (user==maquina):
                console.log("Empate")
                break
            case (user==piedra && maquina==tijera):
                console.log("ganaste con "+piedra+" vs "+tijera)
                break;
            case(user==papel && maquina==piedra):
                console.log("ganaste con "+papel+" vs "+piedra)
                break;
            case(user==tijera && maquina==papel):
                console.log("ganaste con "+tijera+" vs "+papel)
                break;
            default:
                console.log("Perdiste")
        }

}
juego(piedra,papel)
