// require('./main.css')
import './style.css'
import Icon from './icon.jpg'
import toml from './data.toml'
import yaml from './data.yaml'
import json from './data.json5'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

// const show = require('./show')
// show('Webpack')
const app = window.document.getElementById('app')
app.innerText = 'Hello ' + 'Webpack'
app.classList.add('hello')

const myIcon = new Image()
myIcon.src = Icon
app.appendChild(myIcon)
