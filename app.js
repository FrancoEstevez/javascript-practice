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
console.log(dos.toUpperCase())
var espacio = dos.indexOf(" ") 
var mayuscula = dos.substring(0, 1).toUpperCase() + dos.substring(1, espacio + 1).toLowerCase() + dos.substring(espacio + 1, espacio + 2).toUpperCase() + dos.substring(espacio + 2, dos.length).toLowerCase()
console.log("Ejercicio 2f: ", mayuscula)

// 3) a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
"Diciembre"]
console.log("Ejercicio 3a: ", meses[4] + meses[10])

// 3) b
console.log("Ejercicio 3b: ", meses.sort())

// 3) c
meses.unshift("messi")
meses.push("ronaldo")
 console.log("Ejercicio 3c: ", meses)

// 3) d 
meses.shift()
meses.pop()
console.log("Ejercicio 3d: ", meses)

// 3) e
meses.reverse()
console.log("Ejercicio 3e: ", meses)

// 3) f
console.log("Ejercicio 3f: ", meses.join("-"))

// 3) g
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
"Diciembre"]
console.log("Ejercicio 3g: ", meses.slice(4, 11))

// 4) a 
const random = Math.random()
console.log("Ejercicio 4a: ", random)

if (random >= 0.5){
    alert("Greater than 0,5")
}

else {
    alert("Lower than 0,5")
}

// 4) b
const edad = Math.floor(Math.random() * 100)
console.log("Ejercicio 4b: ", edad)

if (edad <= 2){
    alert("bebe")
}

else if (edad > 2 && edad<=12){
    alert("nino")
}

else if (edad > 13 && edad<=19){
    alert("Adolecente")
}

else if (edad > 20 && edad<=30){
    alert("joven")
}

else if (edad > 31 && edad<=60){
    alert("adulto")
}

else if (edad > 61 && edad<=75){
    alert("Adulto mayor")
}

else {
    alert("anciano")
}

// 5) a
const hola = ["messi", "es", "el"]

for (var i = 0; i < hola.length; i++) {
//    alert(hola[i])
}

// 5) b
for (var i = 0; i < hola.length; i++) {
//    alert(hola[i].substring(0, 1).toUpperCase() + hola[i].substring(1, hola[i].length).toLowerCase())
}

// 5) c
var sentence = ""
for (var i = 0; i < hola.length; i++) {
    sentence = sentence + hola[i]
} alert(sentence)

// 5) d 
const vacio = []
for (var i = 0; i < 10; i++) {
    vacio.push(i)
    console.log(vacio)
}console.log(vacio)

const cuantaRegresiva = (numero) => {
    if (typeof numero === "number") {
        alert("Es un numero")
    } else {
        alert("No es un numero")
    }
}
cuantaRegresiva(10)
cuantaRegresiva("hola")
cuantaRegresiva([])
cuantaRegresiva({})

