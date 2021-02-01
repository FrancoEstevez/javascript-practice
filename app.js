// 1) a.
var numeroa = 1
var numerob = 2
var numeroc = numeroa + numerob
console.log("Ejercicio 1a: ", numeroc)

// 1) b.
var nombre = "Franco"
var apellido = "Estevez"
var todo = nombre + apellido
console.log("Ejercicio 1b: ", todo)

// 1) c.
var s1 = "perro"
var s2 = "corre"
var s3 = s1 + s2
console.log("Ejercicio 1c: ", s3.length)

// 2) a.
var diez = "Franco Matias";
console.log("Ejercicio 2a: ", diez.toUpperCase());

// 2) b.
var menos = "elperrocorre"
var cinco = menos.substring(0, 5)
console.log("Ejercicio 2b: ", cinco)

// 2) c
var menos = "elgatocamina"
var tres = menos.substring(9)
console.log("Ejercicio 2c: ", tres)

// 2) d
var dificil = "MESSI ES EL MEJOR"
var todo = dificil.substring(0, 1).toUpperCase() + dificil.substring(1, dificil.length).toLowerCase()
console.log("Ejercicio 2d: ", todo)

// 2) e
var mas = "hola como estas"
var espacio = mas.indexOf(" ")
console.log("Ejercicio 2e: ", espacio)

// 2) f
var dos = "remera pelota"
var espacio = dos.indexOf(" ") 
var mayuscula = dos.substring(0, 1).toUpperCase() + dos.substring(1, espacio + 1).toLowerCase() + dos.substring(espacio + 1, espacio + 2).toUpperCase() + dos.substring(espacio + 2, dos.length).toLowerCase()
console.log("Ejercicio 2f: ", mayuscula)
