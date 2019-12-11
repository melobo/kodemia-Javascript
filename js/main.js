// Metodo .map

var numbers = [[1, 2, 4], [4, 3, 5], [5, 6, 5, 6]]

numbers.map(function (arr) {
    let sum = 0
    arr.forEach(function (number) {
        sum += number
    })
    return sum
})

// Ejercicio uno

var words = ['Asshole', 'armand', 'love', 'faith']

words.filter(function (word) {
    return word[0] === 'a' || word[0] === 'A'
})

// Ejercicio dos

var numbers = [2, 4]

var filtered = numbers.filter(function (number) {
    return number % 2 === 0 && number >= 0
})

if (numbers.length === filtered.length) {
    console.log(`Todos elementos de ${numbers} son pares y positivos`)
} else {
    console.log(`No todos elementos de ${numbers} son pares y positivos`)
}

// Ejercicio tres

numbers.map(function (number) {
    return number ** 2
})

// Ejercicio cuatro

var numbers = [[1, 2, 3, 0], [10, 0, 3, 4], [1, 2, 0], [4, 3, 2, 1]]
const reduceMatrix = matrix => {
    return matrix.reduce((acc, cValue) => {
        return acc + cValue.reduce((acc2, cValue2) => acc2 + cValue2, 0)
    }, 0)
}
console.log(reduceMatrix(numbers))
// Output -> 36