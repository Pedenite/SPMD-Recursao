var n = 2
var resultado = document.getElementById("resultado")
resultado.innerHTML += `<td>1</td><td>2</td>`
function seqAtual(){
    let txtSeq = document.getElementById("sequenciaAN")
    txtSeq.innerText = `a[${n}] = a[${n-1}] + 2*${n} = ??? + ??? = ???`
}
function calc(n){
    if(n <= 1){
        return 2
    }else{
        return (calc(n-1)+(2*n))
    }
}
function confirmar(){  
    let an = Number(document.getElementById("numAN").value)
    let an1 = Number(document.getElementById("numA1").value)
    let sn = Number(document.getElementById("numSN").value)
    console.log(an+" "+typeof(an))
    if(an == calc(n) && an1 == calc(n-1) && sn == 2*n){
        document.getElementById("numAN").value = ""
        document.getElementById("numA1").value = ""
        document.getElementById("numSN").value = ""
        resultado.innerHTML += `<td>${n}</td><td>${an}</td>`
        n++
        document.getElementById("numA1").focus()
        seqAtual()
    }else{
        window.alert(`Errado! a[${n}] = ${calc(n)} e a[${n-1}] = ${calc(n-1)}`)
    }
    
}