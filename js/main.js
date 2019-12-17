// Ejercicio dos repaso

const objectToMatrix = obj => {
    let array = []
    let properties = []
    for (let property in obj) {
        properties.push(property)
    }
    for (let index = 0; index < properties.length; index++) {
        array.push([properties[index], obj[`${properties[index]}`]])
    }
    return array
}

// Ejercicio uno eliminar elementos duplicados de array

var array = [1, 'bobo', 1, 'bobo', 'bobo', 3, 6, 7, 8, 8, 8, 'holi']

const eliminateDuplicates = array => {
    let newArray = []
    array.forEach(element => {
        if (!newArray.includes(element)) {
            newArray.push(element)
        }
    })
    return newArray
}

// Ejercicio uno DOM

var liNodes = document.getElementsByTagName('li')
var array = ['a', 'bogo', 'cola', 'd', 'e']

array.forEach((element, index) => liNodes[index].innerText = element)

// Ejercicio dos h4ck3r 5p34k

var phrase = 'javascript is cool'

const hackerSpeak = phrase => {
    let array = phrase.split('')
    let newArray = []
    array.map(element => {
        let character = element
        if (character === 'a' || character === 'A') {
            character = '4'
        } else if (character === 'e' || character === 'E') {
            character = '3'
        } else if (character === 'i' || character === 'I') {
            character = '1'
        } else if (character === 'o' || character === 'O') {
            character = '0'
        } else if (character === 's' || character === 'S') {
            character = '5'
        }
        newArray.push(character)
    })
    return newArray.join('')
}