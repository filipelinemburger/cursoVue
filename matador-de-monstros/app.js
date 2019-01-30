new Vue({
    el: '#app',
    data: {
        lifeJogador: 100,
        lifeMonstro: 100,
        jogoIniciado: false,
        mensagemFinal: '',
        logDeJogadas: '',
        habilitarBotoes: true,
        styleJogador: {
            width: '200px',
            height: '200px',
        },
    },
    computed: {
        lifeJogadorStyle() {
            return {
                backgroundColor: this.lifeJogador > 20 ? 'green' : 'red',
                width: `${this.lifeJogador}%`,
                height: '100%',
            }
        },
        lifeMonstroStyle() {
            return {
                backgroundColor: this.lifeMonstro > 20 ? 'green' : 'red',
                width: `${this.lifeMonstro}%`,
                height: '100%',
            }
        }
    },
    methods: {
        curar() {
            let pontos = Math.floor(Math.random() * (10 - 6 + 1) + 6);
            this.lifeJogador += pontos
            this.adicionarLogDeJogada('JOGADOR', 'MONSTRO', 'CURAR', pontos)
            pontos = Math.floor(Math.random() * (10 - 5 + 1) + 5);
            this.lifeJogador -= pontos
            this.adicionarLogDeJogada('MONSTRO', 'JOGADOR', 'ATAQUE', pontos)
            if (this.lifeJogador > 100)
                this.lifeJogador = 100
            this.validaTerminoDePartida()
        },
        desistir() {
            this.jogoIniciado = false;
            this.recomecarJogo()
            return Swal.fire({
                type: 'error',
                title: 'd-.-b',
                text: 'Você desistiu e o monstro venceu o jogo',
            })
        },
        ataqueEspecial() {
            let forcaDoAtaque = Math.floor(Math.random() * (10 - 5 + 1) + 5);
            this.lifeJogador -= forcaDoAtaque
            this.adicionarLogDeJogada('MONSTRO', 'JOGADOR', 'ATAQUE', forcaDoAtaque)
            forcaDoAtaque = Math.floor(Math.random() * (10 - 7 + 1) + 7);
            this.lifeMonstro -= forcaDoAtaque
            this.adicionarLogDeJogada('JOGADOR', 'MONSTRO', 'ATAQUE', forcaDoAtaque)
            this.validaTerminoDePartida()
        },
        ataque() {
            let forcaDoAtaque = Math.floor(Math.random() * (10 - 8 + 1) + 8);
            this.lifeJogador -= forcaDoAtaque
            this.adicionarLogDeJogada('MONSTRO', 'JOGADOR', 'ATAQUE', forcaDoAtaque)

            forcaDoAtaque = Math.floor(Math.random() * (10 - 5 + 1) + 5);
            this.lifeMonstro -= forcaDoAtaque
            this.adicionarLogDeJogada('JOGADOR', 'MONSTRO', 'ATAQUE', forcaDoAtaque)
            this.validaTerminoDePartida()
        },
        recomecarJogo() {
            this.lifeJogador = 100
            this.lifeMonstro = 100
            this.logDeJogadas = ''
            this.mensagemFinal = ''
            this.habilitarBotoes = true
        },
        validaTerminoDePartida() {
            if (this.lifeJogador <= 0 && this.lifeMonstro > 0) {
                this.lifeJogador = 0
                this.mensagemFinal = 'Você perdeu!'
                this.habilitarBotoes = false
                return Swal.fire({
                    type: 'error',
                    title: '-.-',
                    text: 'Você perdeu!',
                })
            } else if (this.lifeMonstro <= 0 && this.lifeJogador > 0) {
                this.lifeMonstro = 0
                this.habilitarBotoes = false
                this.mensagemFinal = 'Você derrotou o monstro! Parabéns!'
                return Swal.fire({
                    type: 'success',
                    title: 'Yeahh!!!!',
                    text: 'Você derrotou o monstro! Parabéns!',
                })
            } else if (this.lifeMonstro <= 0 && this.lifeJogador <= 0) {
                this.lifeJogador = 0
                this.lifeMonstro = 0
                this.habilitarBotoes = false
                this.mensagemFinal = 'A disputa terminou empatada!'
                return Swal.fire({
                    type: 'warning',
                    text: 'A disputa terminou empatada!',
                })
            }
        },
        adicionarLogDeJogada(atacante, atacado, tipoJogada, forcaDoAtaque) {
            if (tipoJogada == 'CURAR') {
                this.logDeJogadas = '<p class="log">' + atacante + ' RECUPEROU ' + forcaDoAtaque + '</p>' + this.logDeJogadas
            } else {
                this.logDeJogadas = '<p class="log">' + atacante + ' ATINGIU O ' + atacado + ' COM ' + forcaDoAtaque + '</p>' + this.logDeJogadas
            }
        }
    }
})