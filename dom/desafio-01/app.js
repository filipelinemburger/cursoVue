
new Vue({
    el: '#desafio',
    data: {
        nome: 'Filipe',
        idade: '29',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EscudoCriciumaEC.svg/1200px-EscudoCriciumaEC.svg.png',
    },
    methods: {
        multiplicaIdadePor3() {
            return this.idade * 3;
        },
        exibirValorRandomico() {
            return Math.random();
        },
        buscaMeuNome() {
            return this.nome;
        }
    }
});

// 