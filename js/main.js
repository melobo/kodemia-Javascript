/*crear un boton que diga "agregar koder"*/
/*al darle clic debe tomar los datos de cada uno de los campos del formulario y crear un objeto llamado koderObject (koderName, koderEmail, koderAddress)*/
/*debe agregar el koderObject a kodersArray*/
/*debe crear una card por cada koder registrado*/

var kodersArray = []
var cardsArray = []

const validateEmptyInput = () => {
    let koderMail = document.getElementById("koder-email").value;
    if (koderMail === "") {
        document.getElementById("koder-email").classList.add("alert-danger", "border-danger");
    } else {
        document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    }
}
const clearError = () => {
    document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    document.getElementById("koder-email").classList.add("alert-success", "border-success");
}

const fullCardList = (cardsArray) => {
    let parentNode = document.getElementById("cards")
    parentNode.innerHTML = cardsArray.reduce((acc, card) => {
        return acc + card
    }, '')
}

const createCard = ({ koderName, koderEmail, koderAdress }) => {
    cardsArray.push(`
    <div class="card col-12 col-md-6 col-xl-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${koderName}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${koderEmail}</h6>
            <p class="card-text">${koderAdress}</p>
        </div>
    </div>
    `)
    fullCardList(cardsArray)
}

const addKoder = () => {
    let koderName = document.getElementById('koder-name').value
    let koderEmail = document.getElementById('koder-email').value
    let koderAdress = document.getElementById('koder-address').value
    let koderObject = { koderName, koderEmail, koderAdress }
    kodersArray.push(koderObject)
    createCard(koderObject)
}

document.getElementById('add-button').addEventListener('click', addKoder)