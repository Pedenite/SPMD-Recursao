var qtd = 0

function qtdVal(){
    qtd = Number(document.getElementById("valInit").value)
}
function valoresInit(){
    for(;qtd>0;qtd--){
        document.getElementById("valorDeA").placeholder = `a[${qtd}]`
    }
}
