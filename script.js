const textos = [{titulo:'Organização Financeira', texto: [['Você saberá quanto está gastando e ganhando mensalmente, além de conseguir rastrear quais seus maiores gastos e fazer sobrar dinheiro no final do mês.'],
['É nessa parte que falamos sobre possíveis financiamentos ou controle de dívidas.']]},
{titulo:'Reserva de Emergência', texto: ['Vamos planejar o tamanho da reserva financeira ideal para suprir suas necessidades caso aconteça alguma emergência.']},
{titulo:'Investimentos', texto: ['Mesmo se você nunca investiu, juntos começaremos nessa maravilhosa jornada dos investimentos. Nossa metodologia é baseada no acompanhamento dos seus investimentos e em muita educação financeira, além de descobrirmos o seu perfil de investidor e sua aptidão ao risco.']},
{titulo:'Independência Financeira / Aposentadoria', texto: ['A sua Independência Financeira ou Aposentadoria será planejada conforme seus objetivos de vida.',
'Com investimentos mensais, que façam sentido para sua vida financeira e com o pensamento no longo prazo, vamos conseguir gerar uma fonte de renda para o seu futuro.']},
{titulo:'Análise de Financiamentos', texto: ['Se você já tem um financiamento, está pagando caro ou não sabe se fez o melhor negócio, analisamos o seu financiamento e tentamos achar a melhor solução para ele, planejando até mesmo uma quitação antecipada ou portabilidade para outro banco.']}]  

const caixas = document.querySelectorAll(".servicos__caixa")

const desfazer = (id) => {
    let caixasEditavel = [...caixas]
    caixasEditavel.splice(id-1, 1)

    for (let el of caixasEditavel) {
        let elID = Number(/\d/.exec(el.id))
        let titulo = textos[elID].titulo

        el.classList.add('servicos__caixa')
        el.classList.remove('servicos__caixa--hover')

        el.innerHTML = 
        `<h4 class="servicos__titulo texto__${elID+1}">${titulo}</h4>
        `
    }
}

const mudarTexto = (object, id) => {
    let texto = ''
    for (let el of textos[id-1].texto) {
        texto += `<p>${el}</p>`
    }
    let titulo = textos[id-1].titulo

    object.innerHTML = 
    `<h4 class="servicos__titulo--hover">${titulo}</h4>
    ${texto}
    `
    object.classList.add('servicos__caixa--hover')
    object.classList.remove('servicos__caixa')

    desfazer(id)
}



const depoimentos = document.querySelector("#depoimentos__items")

depoimentos.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        event.target.scrollBy(1,0)
    } else {
        event.target.scrollBy(-1,0)
    }
})

document.querySelector("#depoimentos__right").addEventListener("click", () => {
    depoimentos.scrollBy(1,0)
})

document.querySelector("#depoimentos__left").addEventListener("click", () => {
    depoimentos.scrollBy(-1,0)
})




const entrevistasLista = [
    "https://www.youtube.com/embed/ROXQWPTcWuI",
    "https://www.youtube.com/embed/vJMXdPqXHA8",
    "https://www.youtube.com/embed/HzBYRI4kgaA", 
    "https://www.youtube.com/embed/oYpTXxqnK88",
    "https://www.youtube.com/embed/mWjrtFVwJmc",
    "https://www.youtube.com/embed/hVlCSsXxDds",
    ]

const entrevistas = document.querySelector("#entrevistas__video")

let entrevistasAtual = 0

const removerClasse = () => {
    document.querySelector(`#entrevistas__circulo${entrevistasAtual}`).classList.remove('circulos__circulo--ativo')
}

const addClasse = () => {
    document.querySelector(`#entrevistas__circulo${entrevistasAtual}`).classList.add('circulos__circulo--ativo')
}

document.querySelector("#video__right").addEventListener("click", () => {
    removerClasse()

    entrevistasAtual++
    if(entrevistasAtual > entrevistasLista.length - 1) {
        entrevistasAtual = 0
    }
    entrevistas.setAttribute("src", entrevistasLista[entrevistasAtual])

    addClasse()
})

document.querySelector("#video__left").addEventListener("click", () => {
    removerClasse()

    entrevistasAtual--
    if(entrevistasAtual < 0) {
        entrevistasAtual = 5
    }
    entrevistas.setAttribute("src", entrevistasLista[entrevistasAtual])

    addClasse()
})

const mudarCirculo = (idnumber) => {
    document.querySelector(`#entrevistas__circulo${idnumber}`).addEventListener("click", () => {
        removerClasse()
    
        entrevistasAtual = idnumber
    
        entrevistas.setAttribute("src", entrevistasLista[entrevistasAtual])
    
        addClasse()
    })
}

for (let i = 0; i < 6; i++) {
    mudarCirculo(i)
}

