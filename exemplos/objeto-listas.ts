const pessoa = {
    nome: 'João',
    idade: 27,
    profissao: 'Programador'
}

pessoa.idade =29

const andre: {nome: string, idade: number, profissao:string} = {
    nome: 'Andre',
    idade: 27,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao:string} = {
    nome: 'Paula',
    idade: 27,
    profissao: 'Programadora'
}

enum Profissao {
    Programador,
    Pintor,
    Designer,
    Analista
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[] //cria uma lista de strings
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Programador

}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Programador,
    materias: ['Matemática', 'Português']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática', 'Português']
}

function listar(lista: string[]){
    for (const item of lista) {
        console.log('- ',item)
    }
}

listar(monica.materias)