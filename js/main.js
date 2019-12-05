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