function Tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Issp é, antes de começara a mostar a Tabuada, eu limpo a area de Tabuada.
        //Usamos o while para teste, porem na pratica recomenda usar o for
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}