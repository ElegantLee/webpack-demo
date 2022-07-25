import _ from 'lodash'
import printMe from './print'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  
  element.innerText = _.join(['Hello ', 'Webpack'], ' ')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)
  return element
}


document.body.appendChild(component())
