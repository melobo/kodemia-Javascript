/** Ejercicio uno */

var word = "Perros"
var wordSingular = word[0] + word[1] + word[2] + word[3] + word[4]

console.log(wordSingular)

/** Ejercicio dos */

var number = 30

if (number >= 0 && number <= 100 && number % 10 === 0) {
    console.log('El número esta entre 0 y 100 y ademas es multiplo de 10')
}

/** String interpolation */

console.log(`El resultado de 1 + 10 es: ${1 + 10}`)

/** string.substring(start, end) */

var secondWord = "Gatitos"

console.log(secondWord.substring(2, 6))

/** string.trim() */

var thirdWord = "    Space    "

console.log(thirdWord.trim(thirdWord))

/** Ejercicio tres */

var fourthWord = "Hola"

if (fourthWord.length % 2 === 0) {
    if (fourthWord.length < 10) {
        console.log('La palabra tiene una longitud de 0 a 10 caracteres')
    } else if (fourthWord.length < 15) {
        console.log('La palabra tiene una longitud de 10 a 15 caracteres')
    }
}