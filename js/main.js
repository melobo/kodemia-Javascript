var pesosMexicanos = 20
var tipoCambioUSD = 19.57
var tipoCambioEUR = 21.67
var tipoCambioCUC = 26.5 / 0.0511285

console.log('Tengo ' + pesosMexicanos / tipoCambioUSD + ' USD')
console.log('Tengo ' + pesosMexicanos / tipoCambioEUR + ' EUR')
console.log('Tengo ' + pesosMexicanos * tipoCambioCUC + ' CUC')

/* Ejercicio Tarea, edad en segundos*/

var ageYears = 30
var ageMonths = 8
var ageDays = 32
var ageSeconds = (((ageYears * 365 + ageMonths * 30 + ageDays) * 24) * 60) * 60

console.log('Tengo ' + ageYears + ' con ' + ageMonths + ' meses y ' + ageDays + ' días. Por lo tanto tengo ' + ageSeconds + ' segundos y contando.')