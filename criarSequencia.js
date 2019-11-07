var qtd = Number(document.getElementById("valInit").value)
var n
var func
function valoresInit(){
    qtd = Number(document.getElementById("valInit").value)
    n = qtd + 1
    document.getElementById("infoQtd").className = "sumir"
    document.getElementById("buttonAN").className = "sumir"
    document.getElementById("valInit").className = "sumir"
    let html
    html = `<p id="infoAddValoresInit">Informe os valores dos elementos conforme indicado:</p><form action="javascript:addValoresInit()">`
    for(let i = 1;i <= qtd; i++){
        html += `<input type="number" placeholder = "a[${i}]" name="" id="valorDeA${i}" style="max-width: calc(65vh/3);margin:10px auto 10px;display:block;">`
    }
    html += `<button id="addValoresInitBtn"class="button" type="submit">Confirmar</button></form>`
    document.getElementById("valoresIniciais").innerHTML = html
    document.getElementById("numAN").placeholder = `a(${n})`
}
function addValoresInit(){
    let tabela = document.getElementById("resultado")
    document.getElementById("addValoresInitBtn").className = "sumir"
    document.getElementById("infoAddValoresInit").className = "sumir"
    let html = ""
    for(let i = 1;i <= qtd; i++){
        let n = Number(document.getElementById(`valorDeA${i}`).value)
        html += `<tr><td>${i}</td><td>${n}</td></tr>`
        document.getElementById(`valorDeA${i}`).className = "sumir"
    }
    tabela.innerHTML += html
    document.getElementById("funcaoCriadaDiv").innerHTML = `<p>a(n)=</p><form action = "javascript:definirFunc()"><input type="text" placeholder = "Digite sua função..." name="" id= "criarFunc" style= "max-width: calc(65vh/3);"><button class="button" id="buttonNewFunc" type="submit">Confirmar</button></form>`
    
}
function definirFunc(){
    document.getElementById("funcaoCriadaDiv").classList.add("sumir")
    document.getElementById("tblFuncao").classList.remove("sumir")
    document.getElementById("funcaoCriadaParagrafo").innerText = "a(n) = "+String(document.getElementById("criarFunc").value)
}
function a(n){
    func =  String(document.getElementById("criarFunc").value)
    for(let i = 1;i <= qtd; i++){
        if(n == i){
            return Number(document.getElementById(`valorDeA${i}`).value) //valores iniciais para a parada da recurção
        }
    }
    return eval(func)//função
}
function avancar_10C(element){
    let n2 = n+10
    for(;n<n2;n++){
        let an = Number(document.getElementById("numAN").value)
        an = a(n)
        document.getElementById("numAN").value = ""
        resultado.innerHTML += `<td>${n}</td><td>${an}</td>`
    }
    document.getElementById("numAN").focus()
    document.getElementById("numAN").placeholder = `a(${n})`
    element.className = "sumir"
}
function confirmarC(){
    let an = Number(document.getElementById("numAN").value)
    if(an == a(n)){
        document.getElementById("numAN").value = ""
        resultado.innerHTML += `<td>${n}</td><td>${an}</td>`
        n++
        document.getElementById("numAN").placeholder = `a(${n})`
        document.getElementById("numAN").focus()
    }else{
        window.alert(`Errado! a[${n}] = ${a(n)}`)
    }
    
}