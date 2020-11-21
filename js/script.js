import dadosTabela from './dadosDaTabela.js'

const $tabela = document.getElementById('tabela')
const $modoNoturno = document.getElementById('botao-noturno')
const $filtrarTabela = document.getElementById('filtrar-tabela')

window.addEventListener('load', criarTabela())

$filtrarTabela.addEventListener('click', () => {
    const opcao = document.getElementById('configuracoes').value
    switch(opcao) {
        case 'sintetica':
            criarTabelaContasSinteticas()
            break
        case 'analitica':
            criarTabelaContasAnaliticas()
            break
        case 'nenhum':
            retirarFiltros()
            break
    }

})

$modoNoturno.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('noturno-body')
    document.querySelectorAll('td').forEach(element => {
        if(element.style.backgroundColor != 'white'){
            element.classList.toggle('noturno')
        }
    })
})

function criarTabela(){
    const cabecalho = document.createElement('tr')
    const tituloClassificacao = document.createElement('th')
    const tituloNomenclatura = document.createElement('th')
    const tituloGrau = document.createElement('th')

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
        } else {
            novaLinha.setAttribute('class', 'analitica')
        }

        novaLinha.appendChild(classificacao)
        novaLinha.appendChild(nomenclatura)
        novaLinha.appendChild(grau)
        $tabela.appendChild(novaLinha)
    }
}

function criarTabelaContasSinteticas(){
    document.querySelectorAll('.sintetica').forEach(item => item.style = '')
    document.querySelectorAll('.analitica').forEach(item => item.style.display = 'none')
}

function criarTabelaContasAnaliticas() {
    document.querySelectorAll('.analitica').forEach(item => item.style = '')
    document.querySelectorAll('.sintetica').forEach(item => item.style.display = 'none')
}

function retirarFiltros() {
    document.querySelectorAll('.sintetica').forEach(item => item.style = '')
    document.querySelectorAll('.analitica').forEach(item => item.style = '')
}