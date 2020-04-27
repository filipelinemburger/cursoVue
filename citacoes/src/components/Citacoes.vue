<template>
  <div class="citacoes">
    <span>
      <button @click="subtrair()">&lt;</button>
      <button @click="somar()">&gt;</button>
    </span>
    <Citacao>
      <h1 slot="autor">Autor: {{citacoes[numero].autor}}</h1>
      <p slot="fonte">Fonte: {{citacoes[numero].fonte}}</p>
      <h6 slot="texto">Citação: {{citacoes[numero].texto}}</h6>
    </Citacao>
  </div>
</template>

<script>
import Citacao from "./Citacao";
export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead"
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta"
        },
        {
          fonte: "Frases de Pai",
          texto: "Vou contar até 3! 1, 2, 2...",
          autor: "Gustavo"
        }
      ],
      citacao: Object
    };
  },
  methods: {
    somar() {
      this.numero = this.citacoes.length == (this.numero + 1) ? 0 : this.numero + 1;
    },
    subtrair() {
      this.numero = this.numero == 0 ? (this.citacoes.length - 1) : this.numero - 1;
    }
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    }
  }
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
