/** Ejercicio uno */

var numbers = [1, 2, 3, 4, 5]
var position = 0

while (position < numbers.length) {
    console.log(numbers[position])
    position++
}

position = numbers.length

while (position >= 0) {
    console.log(numbers[position])
    position--
}

/** var numbers = [1, 2, 3, 4, 5, [6, 7, 8, 9, 10]]
var position = 0 */

/** Ejercicio dos */

/** While */

var word = 'perro'
var vowels = 'aeiouAEIOU'

var count = 0
var vowelsAmount = 0
while (count < word.length) {
    let letter = word[count]
    if (vowels.includes(letter)) {
        vowelsAmount++
    }
    count++
}

if (vowelsAmount >= 3) {
    console.log(`En efecto brou tiene ${vowelsAmount} vocales`);
} else {
    console.warn('Te falta brou');
}

/** Do while */

var word = 'Eutanasia'
var vowels = 'aeiouAEIOU'

var count = 0
var vowelsAmount = 0

do {
    let letter = word[count]
    if (vowels.includes(letter)) {
        vowelsAmount++
    }
    count++
} while (count < word.length)

if (vowelsAmount >= 3) {
    console.log(`En efecto brou tiene ${vowelsAmount} vocales`);
} else {
    console.warn('Te falta brou');
}

/** For */

var word = 'cacatua'
var vowels = 'aeiouAEIOU'

var vowelsAmount = 0
for (var count = 0; count < word.length; count++) {
    let letter = word[count]
    if (vowels.includes(letter)) {
        vowelsAmount++
    }
}

if (vowelsAmount >= 3) {
    console.log(`En efecto brou tiene ${vowelsAmount} vocales`);
} else {
    console.warn('Te falta brou');
}

/** Ejercicio tres */

var numberOne = 1
var numberTwo = 32

var multipleCount = 0
if (numberOne >= 0 && numberTwo >= 0) {
    if (numberOne < numberTwo) {
        for (count = numberOne; count <= numberTwo; count++) {
            if (count % 8 === 0) {
                multipleCount++
            }
        }
        console.log(`Existen ${multipleCount} multiplos de 8 en tu rango númerico`)
    } else {
        console.warn('El primer número debe ser menor al segundo')
    }
} else {
    console.warn('Los números deben ser positivos')
}