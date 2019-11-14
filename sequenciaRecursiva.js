var n = 2
var resultado = document.getElementById("resultado")
var func = Number(document.getElementById("funcao").value)

//Vars FeedBack
var acertos = 0
var erros = 0
var dicas = 0



function iniciarFunc(){
    func = Number(document.getElementById("funcao").value)
    if(func==1){
        resultado.innerHTML = ` <tr><td>n</td><td>a[n]</td></tr><td>1</td><td>2</td>`
    }
    if(func==2){
        resultado.innerHTML = ` <tr><td>n</td><td>a[n]</td></tr><td>1</td><td>1</td>`
    }
    if(func==3){
        resultado.innerHTML = ` <tr><td>n</td><td>a[n]</td></tr><td>1</td><td>5</td>`
    }
    n = 2
    seqAtual()
    document.getElementById("btn-avancar10").style.display = ''
    zerarContadores()
    feedback()
}

function seqAtual(){
    let txtSeq = document.getElementById("sequenciaAN")
    if(func == 1){
        txtSeq.innerText = `a[${n}] = a[${n-1}] + 2•n`
        document.getElementById("numA1").placeholder = `a[${n-1}]`
        document.getElementById("numSN").placeholder = `2•n`
        document.getElementById("numAN").placeholder = `a[${n-1}] + (2•n)`
    }
    if(func == 2){
        txtSeq.innerText = `a[${n}] = a[${n-1}] + ((2•n)-1)`
        document.getElementById("numA1").placeholder = `a[${n-1}]`
        document.getElementById("numSN").placeholder = `(2•n)-1`
        document.getElementById("numAN").placeholder = `a[${n-1}] + ((2•n)-1)`
    }
    if(func == 3){
        txtSeq.innerText = `a[${n}] = a[${n-1}] + (n+4)`
        document.getElementById("numA1").placeholder = `a[${n-1}]`
        document.getElementById("numSN").placeholder = `n+4`
        document.getElementById("numAN").placeholder = `a[${n-1}] + (n+4)`
    }
}

function calc(n){
    if(func == 1){   
        if(n <= 1){
            return 2
        }else{
            return (calc(n-1)+(2*n))
        }
    }
    if(func == 2){   
        if(n <= 1){
            return 1
        }else{
            return (calc(n-1)+(2*n-1))
        }
    }
    if(func == 3){   
        if(n <= 1){
            return 5
        }else{
            return (calc(n-1)+(n+4))
        }
    }
}

function confirmar(){
    let an = Number(document.getElementById("numAN").value)
    let an1 = Number(document.getElementById("numA1").value)
    let sn = Number(document.getElementById("numSN").value)


    if(an == calc(n) && an1 == calc(n-1) && sn == an-an1){
        document.getElementById("numAN").value = ""
        document.getElementById("numA1").value = ""
        document.getElementById("numSN").value = ""
        resultado.innerHTML += `<td>${n}</td><td>${an}</td>`
        n++
        document.getElementById("numA1").focus()
        seqAtual()
        acertos++
        feedback()
    }else{
        if(func == 1){
            window.alert(`Errado!\n\nNote que:  a[${n}] = a[${n-1}] + 2•n`)
        }
        if(func == 2){
            window.alert(`Errado!\n\nNote que:  a[${n}] = a[${n-1}] + ((2•n)-1)`)
        }
        if(func == 3){
            window.alert(`Errado!\n\nNote que:  a[${n}] = a[${n-1}] + (n+4)`)
        }
        erros++
        feedback()
    }
    
}

function avancar_10(element){
    if(func != 0){
        let n2 = n+10
        for(;n<n2;n++){
            let an = Number(document.getElementById("numAN").value  )
            let an1 = Number(document.getElementById("numA1").value)
            let sn = Number(document.getElementById("numSN").value)
            an = calc(n)
            an1 = calc(n-1)
            sn == an-an1
            document.getElementById("numAN").value = ""
            document.getElementById("numA1").value = ""
            document.getElementById("numSN").value = ""
            resultado.innerHTML += `<td>${n}</td><td>${an}</td>`
            element.style.display = "none"
        }
        document.getElementById("numA1").focus()
        seqAtual()
        controlador()
    }
}

function ajuda(){
    if(func == 1){
        window.alert(`a[${n}] = a[${n-1}] + 2•${n}`)
    }
    if(func == 2){
        window.alert(`a[${n}] = a[${n-1}] + ((2•${n})-1)`)
    }
    if(func == 3){
        window.alert(`a[${n}] = a[${n-1}] + (${n}+4)`)
    }
    dicas++
    feedback()
}

function zerarContadores(){
    acertos = 0
    erros = 0
    dicas = 0
}

function feedback(){
    document.getElementById("feedback").innerText = `Acertos: ${acertos}, Erros ${erros}, Dicas ${dicas}. Nota: ${(((acertos/(acertos+erros))*10)-(dicas/((acertos/(acertos+erros))*10))).toFixed(2)}`
}
