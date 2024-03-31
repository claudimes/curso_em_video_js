function Gerar() {
    let txtn = document.getElementById('txtn')
    let res = document.getElementById('res')
    let n = Number(txtn.value)
    let f = 10

    if (txtn.value.length == 0 || n < 0){
        alert('Por favor digite um número!')
    }else{
        for(let c = 0; c <= f; c++){
            res.innerHTML += `${n} x ${c} = ${n * c} <br>`
        }
    }
  

}


/*
let n = 5
let f = 10
let c = 0

for(let c = 0; c <= f; c++ ){
    console.log(` ${n} x ${c} = ${n * c}`)
}
*/


