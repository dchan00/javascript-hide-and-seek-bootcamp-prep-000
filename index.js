function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var div = document.getElementById('nested')

  return div.querySelector('div div div.target')
}

function deepestChild() {
  var div = document.getElementById('grand-node')
  return div.querySelector('div div div')
}
