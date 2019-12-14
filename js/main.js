// Ejercicio funcion creadora de objetos

// [
//     ['Jorge', 'Perez', 23],
//     ['Juan', 'Torres', 25],
//     ['Daniel','Guzman', 30]
// ]

// [
//     {
//         firstName: 'Nombre',
//         lastName: 'Apellido',
//         age: 24
//     }
// ]

function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

var personList = [
    ['Jorge', 'Perez', 23],
    ['Juan', 'Torres', 25],
    ['Daniel', 'Guzman', 30]
]

function Person(first, last, age) {
    this.firstName = first
    this.lastName = last
    this.age = age
}
const parsePersonMatrix = matrix => {
    return matrix.map(person => new Person(person[0], person[1], person[2])).map(({ firstName, lastName }) => {
        return `${firstName} ${lastName}`
    })
}

// Ejercicio uno

const numberArray = (number, length) => {
    let list = []
    for (let index = 1; index <= length; index++) {
        list.push(number * index)
    }
    return list
}

// Ejercicio dos

var petAges = {
    Mona: 'Diez años',
    Micaela: 'Dos años'
}

const objectToMatrix = (object) => {
    let array = []
    let properties = []
    for (let property in object) {
        properties.push(property)
    }
    for (let index = 0; index < properties.length; index++) {
        array.push([properties[index], properties[keys[index]]])
    }
    return array
}