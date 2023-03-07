var estudiantes=["Maria","Jose","Carlos","Pablo"]

function saludarEstudiantes(estudiante){
    console.log("Salió, "+estudiante)
}

while (estudiantes.length>0) {
    console.log(estudiantes)
    var estudiante=estudiantes.shift()
    saludarEstudiantes(estudiante)
    
}