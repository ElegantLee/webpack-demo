import _ from 'lodash'
import Print from './print'

function component() {
  const element = document.createElement('div')
  element.innerText = _.join(['Hello ', 'Webpack'], ' ')
  element.onclick = Print.bind(null, 'Hello webpack')
  return element
}  

document.body.appendChild(component())