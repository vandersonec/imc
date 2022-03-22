let nome, altura, peso, imc

nome = prompt('Digite seu nome:')
altura = parseFloat(prompt('Digite sua altura em centímetros:'))
peso = parseFloat(prompt('Digite seu peso:'))

imc = peso/((altura/100)**2)

document.write(`Olá, <strong>${nome.toUpperCase()}</strong> de acordo com seu peso e sua altura seu imc estar em <strong>${imc.toFixed(2)}</strong><br>
Situação: ${imcSituacao(imc)} !`)

function imcSituacao(imc) {
    let abaixoDoPeso = imc < 18.5
    let pesoNormal = imc >= 18.5 && imc <= 24.9
    let sobrepeso = imc >= 25 && imc <= 29.9
    let obesidadeI = imc >= 30 && imc <= 34.9
    let obesidadeII = imc >= 35 && imc <= 39.9
    let obesidadeIII = imc >= 40
    let situacao

    if (abaixoDoPeso) {
        situacao = `<strong>Abaixo do peso</strong>`
    }
    if (pesoNormal) {
        situacao = `<strong>Peso Normal</strong>`
    }
    if (sobrepeso) {
        situacao = `<strong>Acima do peso (sobrepeso)</strong>`
    }
    if (obesidadeI) {
        situacao = `<strong>Obesidade I</strong>`
    }
    if (obesidadeII) {
        situacao = `<strong>Obesidade II</strong>`
    }
    if (obesidadeIII) {
        situacao = `<strong>Obesidade III</strong>`
    }

    return situacao
}