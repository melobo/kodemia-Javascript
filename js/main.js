// Metodo .map

var numbers = [[1, 2, 4], [4, 3, 5], [5, 6, 5, 6]]

numbers.map(function (arr) {
    let sum = 0
    arr.forEach(function (number) {
        sum += number
    })
    return sum
})