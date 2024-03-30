function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        alert('[ERRO] Verifique os dados informados')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crim.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovm.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adum.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idm.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'crif.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovf.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'aduf.jpg')
            }else {
                //Idoso
                img.setAttribute('src', 'idf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}