function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var div = document.getElementsById('#nested')

  return div.querySelector('div div div div.target')
}
