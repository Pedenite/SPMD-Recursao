const altura = 60 //altura do vetor que forma fogo
const largura = 60  //largura do vetor que forma o fogo
const fogoPixelMatriz = []  // vetor que forma o fogo
var div = document.getElementById('fogoDoom') //div que irá conter o fogo
const paletaDeCores = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
//paleta de cores com 37 cores para o fogo

function inicio(){ //inicio
    criarEstrutura()    //inicia o vetor do fogo com 0 (apagado)
    criarBaseFogo() //inicia a base do fogo
    gerarFogo() //gera a parte grafica do fogo
    setInterval(calcularPropagacao, 1)    //executa a função em intervalos de 100 e atualiza a propagação do fogo
    
}

function criarEstrutura(){
    const numeroPixels = altura * largura   //total de pixels do fogo (matriz)
    for(let i = 0; i < numeroPixels; i++){
        fogoPixelMatriz[i] = 0  //inicia todos os pixeis com 0
    }
    
}

function calcularPropagacao(){
    for(let coluna = 0; coluna < largura; coluna++){

        for(let linha = 0; linha < altura; linha++){
            const pixelIndex = coluna + (linha * largura)   //index da matriz
            atualizarIntencidade(pixelIndex)    //atualiza todos os pixels da matriz

        }
    }

    gerarFogo() //gera a parte grafica do fogo depois de atualizar a porpagação
}

function atualizarIntencidade(pixelIndexAtualizar){

    const referenciaPixel = pixelIndexAtualizar + largura   //pega o pixel de baixo como referencia

    if(pixelIndexAtualizar >= ((altura-1)*largura)){    //caso pegue a ultima linha, retorna nada na função pois nao tem pixel de referencia
        return
    }else{
        const decaimento = Math.floor(Math.random()*3)  //taxa randomica de diminuição do fogo ao subir
        
        if(fogoPixelMatriz[referenciaPixel]-decaimento >= 0){

            fogoPixelMatriz[pixelIndexAtualizar - decaimento] = fogoPixelMatriz[referenciaPixel]-decaimento //pega a intencidade dos pixels inferiores para definir o seu e diminui a intencidade, pega os inferiores para dar movimento a chamas e por isso nao apenas o de baixo

        }else{

            fogoPixelMatriz[pixelIndexAtualizar] = 0 // não exite uma cor negativa, por isso o menor valor é 0 (preto)

        }
    }

}


function criarBaseFogo(){
    for(let c = 0; c < largura; c++){
        fogoPixelMatriz[c+((altura-1)*largura)] = 36    //set da base do fogo em 36(fogo mais forte)
    }
}

function gerarFogo(){
    let html = '<table cellpadding = 0 cellspacing = 0>'    //gera uma string html para iniciar uma tabela na div com os pixels do fogo

    for(let linha = 0; linha < altura; linha++){
        html += '<tr>'
        for(let coluna = 0; coluna < largura; coluna++){
            const pixelIndex = coluna + (linha * largura)   //index da matriz
            var intencidadeFogo = fogoPixelMatriz[pixelIndex] //pega o valor da intencidade do fogo
            let debug = false   //opçao para mostrar numeros ou o fogo em si
            if(debug == true){
                html += '<td>'
                html += `<div class= "index">${pixelIndex}</div>`
                html += intencidadeFogo //opção de motrar numeros
                html += '</td>'
            }else{
                let cores = paletaDeCores[intencidadeFogo]
                let corRGB = `${cores.r},${cores.g},${cores.b}`
                html += `<td style="background-color: rgb(${corRGB})">`//converte os valores da intencidade para rgb que estao na paleta de cores
                html += '</td>'
            }
            


        }
        html += '</tr>'
    }

    html += '</table>'
    div.innerHTML = html
    
}



inicio()