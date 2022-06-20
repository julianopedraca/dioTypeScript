let anyEstaDeVolta: any
anyEstaDeVolta = 1
anyEstaDeVolta = 'casa'
anyEstaDeVolta = 5

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta

let unknownValor: unknown
unknownValor = 3
unknownValor = 'casa'
unknownValor = true
unknownValor = 'vai sim'

let stringTest2: string = 'agora vai'
//stringTest2 = unknownValor

if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor
}

function jogaErro (erro: string, codigo:number): never {
    throw{erro: erro, codigo: codigo}
}

jogaErro('deu erro', 500)