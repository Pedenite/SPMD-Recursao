var qtd = Number(document.getElementById("valInit").value)
function valoresInit(){
    qtd = Number(document.getElementById("valInit").value)
    document.getElementById("infoQtd").className = "sumir"
    document.getElementById("buttonAN").className = "sumir"
    document.getElementById("valInit").className = "sumir"
    document.getElementById("valoresIniciais").innerHTML += `<p>Informe os valores dos elementos conforme indicado:</p><form action="javascript:">`
    for(let i = 0;i < qtd; i++){
        document.getElementById("valoresIniciais").innerHTML += `<input type="number" placeholder = "a[${i+1}]" name="" id="valorDeA" style="max-width: calc(65vh/3);margin-top: 15px;"><br>`
    }
    document.getElementById("valoresIniciais").innerHTML += `<button class="button" type="submit">Confirmar</button></form>`
}
