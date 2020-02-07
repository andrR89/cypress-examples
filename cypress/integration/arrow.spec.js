/// <references types="cypress" />

it('nada agora', function () {});

// function soma(a,b) {
//     return a+b;
// }


// const soma = (a, b) => {
//     return a +b;
// }

const soma = (a, b) => a + b;

console.log(soma(1, 4));

it('teste com função', function () {
    console.log('function', this)
});

it('teste com arrow', () => {
    console.log('Arrow', this)
});