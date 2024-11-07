function triangle(base, altura) {
    return alert(base*altura/2)
}
function rectangle(base, altura) {
    return alert(base*altura)
}
function square(lado) {
    return alert(lado*lado)
}
function trapeze(baseMaior,baseMenor, altura){
    return alert((baseMaior+baseMenor)*altura/2)
}
function circle(raio) {
    return alert(3.14*(raio*raio))
}
let menu = ''

do{
    menu = prompt(`opção disponivel
        1-área do triângulo
        2-área do retângulo
        3-área do quadrado
        4-áreaa do trapézio
        5-área do círculo
        6-sair`)

    switch (menu) {
        case '1':
            triangle(prompt('Digite o valor da base'), prompt('Digite o valor da altura'))
            break
        case '2':
            rectangle(prompt('Digite o valor da base'), prompt('Digite o valor da altura'))
            break
        case '3':
            square(prompt('Digite o valor do lado'))
            break
        case '4':
            trapeze(prompt('Digite o valor da base maior'), prompt('Digite o valor da base menor'), prompt('Digite o valor da altura'))
            break
        case '5':
            circle(prompt('Digite o valor do raio'))
            break
        case '6':
            alert('programa encerrado')
            break            
    }
} while (menu !== '6')