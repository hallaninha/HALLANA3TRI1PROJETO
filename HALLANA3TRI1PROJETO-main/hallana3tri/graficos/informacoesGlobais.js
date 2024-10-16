const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function viazualizarInformacoesGlobais() {
const res = await fetch (url)  
const dados = await res.json ()
const paragrafo = document.createElement ('p')
paragrafo.classList.add ('grafico-container_texto')
paragrafo.innerHTML = 'Voce sabia que o mundo tem'
}

viazualizarInformacoesGlobais()
