import printMe from './print'

const app = window.document.getElementById('app')
const btn = document.createElement('button')
app.innerText = 'Hello ' + 'Webpack'

btn.innerHTML = 'Click me and check the console!'
btn.onclick = printMe

app.appendChild(btn)
