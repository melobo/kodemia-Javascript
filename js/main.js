// Ejercicio repaso

for (index = 0; index <= 100; index += 2) {
    if (index > 0) {
        console.log(index)
    }
}

// Ejercicio uno INCOMPLETE

var employees = ['David', 'Jose']
var absence = [4, 2]
var dailySalary = 450
var discount = 0.02
var monthlySalary = dailySalary * 30
var salaryDiscount = 0
var finalSalary = []

for (index = 0; index < employees.length; index++) {
    finalSalary[index] = monthlySalary - absence[index] * (dailySalary * discount)
    console.log(`El salario mensual con descuentos de ${employees[index]} es de ${finalSalary[index]}`)
}

// Ejercicio dos

/*
var separatedNames = [['David', 'Moranchel'], ['Jorge', 'Camarillo']]

for (var index = 0; index < separatedNames.length; index++) {
    var firstName = separatedNames[index][0]
    var lastName = separatedNames[index][1]
    console.log(`${firstName} ${lastName}`)
}
*/

function joinName(separatedNames) {
    var fullName = []
    for (var index = 0; index < separatedNames.length; index++) {
        fullName[index] = separatedNames[index][0] + ' ' + separatedNames[index][1]
    }
    return fullName
}

// Ejercicio tres

function joinWord(separatedWord) {
    var word = ''
    for (var index = 0; index < separatedWord.length; index++) {
        word = word.concat(separatedWord[index])
    }
    return word
}

//Ejercicio cuatro

function palindromo(text) {
    var normalOrder = ''
    for (index = 0; index < text.length; index++) {
        if (text[index] !== ' ') {
            normalOrder += text[index]
        }
    }
    var inverseOrder = ''
    for (var index = normalOrder.length - 1; index >= 0; index--) {
        inverseOrder += normalOrder[index]
    }
    if (normalOrder === inverseOrder) {
        console.log(`${text} es un palindromo`)
    } else {
        console.log(`${text} no es un palindromo`)
    }
}