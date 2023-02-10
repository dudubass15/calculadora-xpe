const button = document.querySelector('#calcular');
const field_one = document.querySelector('#input__a');
const field_two = document.querySelector('#input__b');
const soma = document.querySelector('#soma > p');
const subtrairA = document.querySelector('#subtrairA > p');
const subtrairB = document.querySelector('#subtrairB > p');
const multiplicarA = document.querySelector('#multiplicarA > p');
const dividirA = document.querySelector('#dividirA > p');
const dividirB = document.querySelector('#dividirB > p');
const potenciaA = document.querySelector('#potenciaA > p');
const potenciaB = document.querySelector('#potenciaB > p');
const raizA = document.querySelector('#raizA > p');
const raizB = document.querySelector('#raizB > p');
const fatorialA = document.querySelector('#fatorialA > p');
const fatorialB = document.querySelector('#fatorialB > p');
const porcentagemA = document.querySelector('#porcentagemA > p');
const porcentagemB = document.querySelector('#porcentagemB > p');
const media = document.querySelector('#media > p');

button.addEventListener('click', () => {
    const one = this.verificarNumeros(field_one.value);
    const two = this.verificarNumeros(field_two.value);

    if (one !== null && two !== null) {
        this.somar(one, two);
        this.subtraira(one, two);
        this.subtrairb(one, two);
        this.multiplicara(one, two);
        this.dividira(one, two);
        this.dividirb(one, two);
        this.potenciaa(one, two);
        this.potenciab(one, two);
        this.raiza(one, two);
        this.raizb(one, two);
        this.fatoriala(one, two);
        this.fatorialb(one, two);
        this.porcentagema(one, two);
        this.porcentagemb(one, two);
        this.mediaa(one, two);
    } else {
        console.log('Não foi possível fazer a operação, número faltando ...');
    }
});

function verificarNumeros(value) {
    return value.length > 0 ? parseInt(value) : null;
}

function somar(one, two) {
    let resultado = 0;
    resultado = one + two;
    soma.innerHTML = resultado;
    limparCampos();
}

function subtraira(one, two) {
    let resultado = 0;
    resultado = one - two;
    subtrairA.innerHTML = resultado;
    limparCampos();
}

function subtrairb(one, two) {
    let resultado = 0;
    resultado = two - one;
    subtrairB.innerHTML = resultado;
    limparCampos();
}

function multiplicara(one, two) {
    let resultado = 0;
    resultado = one * two;
    multiplicarA.innerHTML = resultado;
    limparCampos();
}

function dividira(one, two) {
    let resultado = 0;
    resultado = (one / two).toFixed(2);
    dividirA.innerHTML = resultado;
    limparCampos();
}

function dividirb(one, two) {
    let resultado = 0;
    resultado = (two / one).toFixed(2);
    dividirB.innerHTML = resultado;
    limparCampos();
}

function potenciaa(one, two) {
    let resultado = 0;
    resultado = Math.pow(one, two);
    potenciaA.innerHTML = resultado;
    limparCampos();
}

function potenciab(one, two) {
    let resultado = 0;
    resultado = Math.pow(two, one);
    potenciaB.innerHTML = resultado;
    limparCampos();
}

function raiza(one, two) {
    let resultado = 0;
    resultado = Math.sqrt(one).toFixed(2);
    raizA.innerHTML = resultado;
    limparCampos();
}

function raizb(one, two) {
    let resultado = 0;
    resultado = Math.sqrt(two).toFixed(2);
    raizB.innerHTML = resultado;
    limparCampos();
}

function fatoriala(one, two) {
    let resultado = 0;
    let initial = 0;
    if (one === 0 || one === 1) {
        initial =  1;
    }
    for (var i = one - 1; i >= 1; i--) {
        one *= i;
    }
    initial = one;
    resultado = initial;
    fatorialA.innerHTML = resultado;
    limparCampos();
}

function fatorialb(one, two) {
    let resultado = 0;
    let initial = 0;
    if (two === 0 || two === 1) {
        initial =  1;
    }
    for (var i = two - 1; i >= 1; i--) {
        two *= i;
    }
    initial = two;
    resultado = initial;
    fatorialB.innerHTML = resultado;
    limparCampos();
}

function porcentagema(one, two) {
    let resultado = 0;
    resultado = Math.round(two * 100 / one);
    porcentagemA.innerHTML = resultado + '%';
    limparCampos();
}

function porcentagemb(one, two) {
    let resultado = 0;
    resultado = Math.round(one * 100 / two);
    porcentagemB.innerHTML = resultado + '%';
    limparCampos();
}

function mediaa(one, two) {
    let resultado = 0;
    resultado = (one + two) / 2;
    media.innerHTML = resultado;
    limparCampos();
}

function limparCampos() {
    field_one.value = '';
    field_two.value = '';
}