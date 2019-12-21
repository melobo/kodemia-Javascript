var posts = {
    'firstName': 'Cesar',
    'lastName': 'Villegas',
    'age': 30,
    'pitch': false
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        responseHandler(this.response)
    }
}

// xhttp.open('POST', 'https://ajaxkode.firebaseio.com/koders.json')
// xhttp.send(JSON.stringify(posts))

xhttp.open('GET', 'https://ajaxkode.firebaseio.com/koders.json')
xhttp.send()

const responseHandler = response => {
}

var parentNode = document.getElementsByClassName('container')[0]

