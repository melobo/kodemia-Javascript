// Ejercicio repaso

var words = ['hola', 'perro', 'Alan', 'aso', 'Arbol']
var vowels = 'aeiouAEIOU'
const filterWords = (words) => words.filter(word => vowels.includes(word[0]))
console.log(filterWords(words));

// Ejercicio uno

var words = ['horror', 'oso', 'lobo', 'iris']

words.reduce((acc, arr) => acc + arr[0], '')

// Abstracción objeto

// PC 
// >Procesador
// >>Marca
// >>Ghz
// >>número de cores
// >>tipo de cores
// >Tarjeta Madre
// >>Factor de tarjeta madre 
// >Tarjeta Gráfica
// >>Marca
// >Cantidad de RAM
// >>Tipo de RAM 
// >Sistema de enfriamiento
// >>Tipo de sistema
// >Almacenamiento
// >>Cantidad de almacenamiento
// >>Tipo de almacenamiento
// >Gabinete
// >Perifericos