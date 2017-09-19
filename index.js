function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  var div = document.getElementById('nested')

  return div.querySelector('div div div.target')
}

function deepestChild() {
  var div = document.getElementById('grand-node')

  while (div.children[0]) {
     div=div.querySelector('div')

  }
  return div
  //return div.querySelector('div div div div div')
}

function increaseRankBy(n) {
  const div = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for(let i=0; i<div.length; i++) {
    div[i].innerHTML = (parseInt(div[i].innerHTML)+n).toString()
  }
}
