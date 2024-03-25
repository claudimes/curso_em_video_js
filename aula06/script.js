//window.document.write('Ola Mundo!')
var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
//var d = document.getElementsByName('msg')[0]
//corpo.style.background = 'black'
document.write(p1.innerHTML)
/*alert(p1.innerText)
p1.style.color = 'blue'
d.style.background = 'green'
document.write('Está escrito assim: ' + p1.innerText)
d.innerText = 'Olá'*/
//var d = window.document.querySelector("div#msg")
//d.style.background = 'blue'
var d = window.document.querySelector("div#msg")
d.style.background = 'blue'
//var h = document.getElementById('h1')
var h = document.querySelector("h1.h1")
h.innerHTML = 'Aqui é o JavaCript mandando ver'
h.style.background = 'yellowgreen'
h.style.textAlign = 'center'

