const fun = function(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(fun(2, 3, 3))

function soma(a, b){
    return function(c){
        console.log(a + b +c)
    }
}
soma(2, 3)(4)

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar()
//falar()//conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function a(){console.log("Ola")}.
