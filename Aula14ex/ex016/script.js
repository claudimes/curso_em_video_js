function Contar(){
    var txtinicio = document.getElementById("txtinicio")
    var txtfim = document.getElementById("txtfim")
    var txtpas = document.getElementById("txtpas")
    var res = document.getElementById("res")
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpas.value)
    var c = inicio
    var contar = ''
    if (inicio <= 0 || inicio > fim) {
        alert('[ERRO]')
    }else {
        for (var c; c <= fim; c += passo) {
            contar += c
            contar += '->'        
        }
    }
    
    res.innerHTML = contar
}


