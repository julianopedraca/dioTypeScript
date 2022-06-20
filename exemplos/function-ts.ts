function somarValoresNumericos(numero1: number, numero2: number):number { //define o tipode saida da funcao também
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 5))

function printaValoresNumericos(numero1: number, numero2: number): void { //essa funcao nao retorna nenhum valor
    console.log(numero1 + numero2);
}

function SomarvaloresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number ): number {
    let resultado = numero1 + numero2
    return callback(resultado)
}

function aoQuadrado(numero: number): number {
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number {
    return numero / numero
}

console.log(SomarvaloresNumericosETratar(1, 5, aoQuadrado))
console.log(SomarvaloresNumericosETratar(1, 5, dividirPorEleMesmo))