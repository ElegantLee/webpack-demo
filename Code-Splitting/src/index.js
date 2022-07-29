async function getComponent() {
  const element = document.createElement('div')
  const { default: _ } = await import('lodash')
  element.innerText = _.join(['Hello ', 'Webpack'], ' ')

  return element
}

getComponent().then(component => {
  document.body.appendChild(component)
})
