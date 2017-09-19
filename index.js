function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var div = document.getElementById('#nested')

  return div.querySelector('div div div div.target')
}
