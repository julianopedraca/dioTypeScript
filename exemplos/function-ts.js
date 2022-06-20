"use strict";
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 5));
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function SomarvaloresNumericosETratar(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(SomarvaloresNumericosETratar(1, 5, aoQuadrado));
console.log(SomarvaloresNumericosETratar(1, 5, dividirPorEleMesmo));
