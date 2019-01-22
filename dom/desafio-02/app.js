new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valueEventKeyDown: '',
    },
    methods:{
        exibirAlerta(){
            alert('você deu um clique')
        },
        alteraPropData(e){
            console.log(e.target.value);
            this.valueEventKeyDown = e.target.value;
        }
    }
})