"use strict";
var pessoa = {
    nome: 'João',
    idade: 27,
    profissao: 'Programador'
};
pessoa.idade = 29;
var andre = {
    nome: 'Andre',
    idade: 27,
    profissao: 'Pintor'
};
var paula = {
    nome: 'Paula',
    idade: 27,
    profissao: 'Programadora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Programador"] = 0] = "Programador";
    Profissao[Profissao["Pintor"] = 1] = "Pintor";
    Profissao[Profissao["Designer"] = 2] = "Designer";
    Profissao[Profissao["Analista"] = 3] = "Analista";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Programador
};
var jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Programador,
    materias: ['Matemática', 'Português']
};
var monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática', 'Português']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(monica.materias);
