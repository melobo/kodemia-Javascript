// // Ejercicio uno DOM

// var objArray = [
//     {
//         'nodename': 'p',
//         'content': 'Hola'
//     },
//     {
//         'nodename': 'p',
//         'content': 'Mundo'
//     },
//     {
//         'nodename': 'h1',
//         'content': 'perros'
//     }
// ]

// const appendTags = objArray => {
//     const parentNode = document.getElementById('container')
//     objArray.forEach(element => {
//         let childNode = document.createElement(`${element.nodename}`)
//         childNode.innerText = `${element.content}`
//         parentNode.appendChild(childNode)
//     })
// }

// // Example

// const treeNodes = [
//     {
//         'nodeName': 'p',
//         'content': 'Hola'
//     },
//     {
//         'nodeName': 'p',
//         'content': 'Mundo'
//     },
//     {
//         'nodeName': 'h1',
//         'content': 'holi'
//     }
// ]
// const buildTree = (nodes, parent) => {
//     const parentNode = document.getElementById(parent)
//     nodes.forEach(
//         ({ nodeName, content }) => {
//             const node = document.createElement(nodeName)
//             node.innerText = content
//             parentNode.appendChild(node)
//         }
//     )
// }
// const buildTreeInnerHTML = (nodes, parent) => {
//     const parentNode = document.getElementById(parent)
//     let accNodes = ''
//     nodes.forEach(({ nodeName, content }) => {
//         const node = `<${nodeName}> ${content} </${nodeName}>`
//         accNodes += node
//     })
//     parentNode.innerHTML = accNodes
// }
// const buildTreeInnerHTMLWithReduce = (nodes, parent) => {
//     const parentNode = document.getElementById(parent)
//     const accNodes = nodes.reduce((acc, { nodeName, content }) => {
//         return `${acc} <${nodeName}> ${content} </${nodeName}>`
//     }, '')
//     parentNode.innerHTML = accNodes
// }

var posts = [
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing some stuff and such.'
    },
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing some stuff and such.'
    },
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing some stuff and such.'
    },
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing sholacrayolaome stuff and such.'
    },
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing some stuff and such.'
    },
    {
        'img': 'https://picsum.photos/300/200',
        'title': 'This thing here',
        'subtitle': 'This subtitle here',
        'text': 'A long text here describing some stuff and such.'
    }
]

const parentNode = document.getElementById('content')
const accNodes = posts.reduce((acc, { img, title, subtitle, text }) => {
    return `${acc} 
    <div class="col-xl-4 col-md-6 col-12">
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
                <p class="card-text">${text}</p>
                <a href="#" class="btn btn-secondary">See more</a>
            </div>
        </div>
    </div>`
}, '')
parentNode.innerHTML = accNodes