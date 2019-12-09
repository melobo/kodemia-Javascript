// Ejercicio uno

function capitalizer(phrase) {
    var stringToArray = phrase.toLowerCase().split(' ')
    var arrayCapitalize = []
    for (var index = 0; index < stringToArray.length; index++) {
        var word = stringToArray[index]
        var wordCapitalize = `${word[0].toUpperCase()}${word.slice(1)}`
        arrayCapitalize[index] = wordCapitalize
    }
    var arrayToString = arrayCapitalize.join(' ')
    return arrayToString
}

// Ejercicio dos

function longestWord(phrase) {
    var stringToArray = phrase.split(' ')
    var longestWord = stringToArray[0]
    for (var index = 0; index < stringToArray.length - 1; index++) {
        var comparedWord = stringToArray[index + 1]
        if (comparedWord.length > longestWord.length) {
            longestWord = comparedWord
        }
    }
    return longestWord
}

// Ejercicio tres

function amountOfOnes(matrix) {
    var joinedNumbers = matrix.join()
    var amountOfOnes = 0

    for (var index = 0; index < joinedNumbers.length; index++) {
        if (joinedNumbers[index] === '1') {
            amountOfOnes++
        }
    }
    return amountOfOnes
}