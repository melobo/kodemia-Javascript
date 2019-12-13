dog = {
    breed: 'Basset hound',
    name: 'Sr. Peabody'
}

for (property in dog) {
    console.log(`property: ${property}, value: ${dog[property]}`)
    if (property === 'weight') {
        console.log(dog[property].amount, dog[property].unit)
    }
}

//

var dogsArray = [
    {
        breed: 'Basset hound',
        name: 'Sr. Peabody'
    },
    {
        breed: 'Basset hound',
        name: 'Sr. Peabody'
    },
    {
        breed: 'Basset hound',
        name: 'Sr. Peabody'
    }
]
dogsArray[2].name

// Promedio con campo general

var alumnos = [
    {
        'firstName': 'Kevin',
        'lastName': 'Perez',
        'age': 23,
        'finalAverage': 8.9
    },
    {
        'firstName': 'Itiel',
        'lastName': 'Valera',
        'age': 31,
        'finalAverage': 6.4
    },
    {
        'firstName': 'Adan',
        'lastName': 'Mijangos',
        'age': 30,
        'finalAverage': 9.1
    }
]
const getFinalAverageOne = group => {
    return group.reduce((acc, cValue) => {
        return acc + cValue.finalAverage
    }, 0) / group.length
}

// Promedio de grupo dada tira de materias

var alumnos = [
    {
        'firstName': 'Kevin',
        'lastName': 'Perez',
        'age': 23,
        'assigments': [
            {
                'name': 'Math',
                'grade': 7.3
            },
            {
                'name': 'History',
                'grade': 4
            }
        ]
    },
    {
        'firstName': 'Itiel',
        'lastName': 'Valera',
        'age': 31,
        'assigments': [
            {
                'name': 'Math',
                'grade': 9
            },
            {
                'name': 'History',
                'grade': 6.5
            }
        ]
    },
    {
        'firstName': 'Adan',
        'lastName': 'Mijangos',
        'age': 30,
        'assigments': [
            {
                'name': 'Math',
                'grade': 6
            },
            {
                'name': 'History',
                'grade': 10
            }
        ]
    }
]
const getFinalAverage = group => {
    return group.reduce((acc, cValue) => {
        return acc + cValue.assigments.reduce((acc2, cValue2) => {
            return acc2 + cValue2.grade
        }, 0) / cValue.assigments.length
    }, 0) / group.length
}

// Abstraer el objeto persona con los datos necesarios para sacar el RFC sin homoclave, , crear un array de personas y obtener un array con el RFC de cada uno
// Abstraer el objeto alumno, y dado un array de alumnos dar promedio por materia por periodo