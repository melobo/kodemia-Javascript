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