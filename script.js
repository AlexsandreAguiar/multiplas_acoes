function verificar(){
    var v1 = Number(window.prompt('Informe o primeiro número: '))
    var v2 = Number(window.prompt('Informe o segundo número: '))
    var escolha = Number(window.prompt(`Valores informados: ${v1} e ${v2}\nO que vamos fazer?
[1]Somar\n[2]Subtrair\n[3]Multiplicar\n[4]Dividir`))

    
    switch (escolha) {
        case 1:
            div2.innerHTML = `${v1} + ${v2} = ${v1+v2}`
            break 
        case 2:
            div2.innerHTML = `${v1} - ${v2} = ${v1-v2}`
            break
        case 3:
            div2.innerHTML = `${v1} x ${v2} = ${v1*v2}`
            break
        case 4:
            div2.innerHTML = `${v1} / ${v2} =${(v1/v2).toLocaleString('pt-BR')}` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
            break
        default:
            div2.innerHTML = `OPÇÃO INVÁLIDA! Você digitou ${v1} e ${v2}, mas não sei o que fazer com eles. </p>`
            break
    }
    div1.innerHTML = 'Calculando...'
}

/*if (escolha == 1){
        res = v1 + v2
        div2.innerHTML = `${v1} + ${v2} = ${res}`
    } else if (escolha == 2){
        res = v1 - v2
        div2.innerHTML = `${v1} - ${v2} = ${res}`
    } else if (escolha == 3){
        res = v1 * v2
        div2.innerHTML = `${v1} * ${v2} = ${res}`
    } else if (escolha == 4){
        res = v1 / v2
        div2.innerHTML = `${v1} / ${v2} = ${res}`
    } else {
        div2.innerHTML = `Opção inválida! Você digitou ${v1} e ${v2}, mas não sei o que fazer com ele`
    }
}*/