import dadosTabela from './dadosDaTabela.js'

const $tabela = document.getElementById('tabela')
const $configuracoes = document.getElementById('configuracoes')
const $modoNoturno = document.getElementById('botao-noturno')


window.addEventListener('load', criarTabela())

$modoNoturno.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('noturno-body')
    document.querySelectorAll('td').forEach(element => {
        if(element.style.backgroundColor != 'white'){
            element.classList.toggle('noturno')
        }
    })
})

function criarTabela(){
    let cabecalho = document.createElement('tr')
    let tituloClassificacao = document.createElement('th')
    let tituloNomenclatura = document.createElement('th')
    let tituloGrau = document.createElement('th')

    tituloClassificacao.innerHTML = 'Classificação'
    tituloNomenclatura.innerHTML = 'Nomenclatura'
    tituloGrau.innerHTML = 'Grau'

    cabecalho.appendChild(tituloClassificacao)
    cabecalho.appendChild(tituloNomenclatura)
    cabecalho.appendChild(tituloGrau)

    $tabela.appendChild(cabecalho)

    for(let i = 0; i < dadosTabela['Planilha1'].length; i++){
        let novaLinha = document.createElement('tr')
        let classificacao = document.createElement('td')
        let nomenclatura = document.createElement('td')
        let grau = document.createElement('td')

        classificacao.innerHTML = dadosTabela['Planilha1'][i].Classificação
        nomenclatura.innerHTML = dadosTabela['Planilha1'][i].Nomenclatura
        grau.innerHTML = dadosTabela['Planilha1'][i].Grau

        if(grau.innerHTML == 1 || grau.innerHTML == 2 || grau.innerHTML == 3) {
            novaLinha.setAttribute('class', 'sintetica')
        }

        novaLinha.appendChild(classificacao)
        novaLinha.appendChild(nomenclatura)
        novaLinha.appendChild(grau)
        $tabela.appendChild(novaLinha)
    }
}
