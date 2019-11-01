var qtd = Number(document.getElementById("valInit").value)
function valoresInit(){
    qtd = Number(document.getElementById("valInit").value)
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
    console.log(html)
    tabela.innerHTML += html
    document.getElementById("tblFuncao").classList.remove("sumir")
}