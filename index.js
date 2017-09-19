function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var div = document.getElementById('nested')

  return div.querySelector('div div div.target')
}

function deepestChild() {
  return document.querySelector('div.grand-node div div div')
}
