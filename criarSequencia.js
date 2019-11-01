let qtd = Number(document.getElementById("valInit").value)

function valoresInit(){
    for(let i = 0;i < qtd; i++){
        document.getElementById("valoresIniciais").innerHTML += `<input type="number" placeholder = "a[${i+1}]" name="" id="valorDeA" style="max-width: calc(65vh/3);margin-top: 15px;"><br>`
    }
    
}
