const textos = [{titulo:'Organização Financeira', texto: [['Você saberá quanto está gastando e ganhando mensalmente, além de conseguir rastrear quais seus maiores gastos e fazer sobrar dinheiro no final do mês.'],
['É nessa parte que falamos sobre possíveis financiamentos ou controle de dívidas.']]},
{titulo:'Reserva de Emergência', texto: ['Vamos planejar o tamanho da reserva financeira ideal para suprir suas necessidades caso aconteça alguma emergência.']},
{titulo:'Investimentos', texto: ['Juntos, descobriremos o seu perfil de investidor, sua aptidão ao risco e começaremos nessa maravilhosa jornada dos investimentos, através de educação financeira e consultoria.']},
{titulo:'Independeência Financeira / Aposentadoria', texto: ['A sua independência financeira será planejada conforme seus objetivos futuros e seu perfil de investidor.',
'Vamos criar uma metodologia de aportes que faça sentido para sua vida financeira e, com o pensamento no longo prazo, conseguir gerar uma fonte de renda para o seu futuro.']},
{titulo:'Análise de Financiamentos', texto: ['Se você já tem um financiamento, está pagando caro ou não sabe se fez o melhor negócio, analisamos o seu financiamento e tentamos achar a melhor solução para ele, planejando até mesmo uma quitação antecipada ou portabilidade para outro banco.']}]  


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
}

const desfazer = (object, id) => {
    let titulo = textos[id-1].titulo
    object.innerHTML = 
    `<h4 class="servicos__titulo texto__${id}">${titulo}</h4>
    `
}