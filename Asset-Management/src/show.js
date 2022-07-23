import Icon from './icon.jpg'
function show(content) {
  const app = window.document.getElementById('app')
  app.innerText = 'Hello ' + content
  app.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon
  app.appendChild(myIcon)
}

module.exports = show