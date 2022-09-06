new Vue({

    el: "#aplication",
    data: {
      tasks:[],
      input:""
    },
  methods: {
    insert () {
      if (this.input.trim()!==""){
        this.tasks.push(this.input); //para inserir uma tarefa
        this.input=""; //para limpar a caixa de texto
      }
    },
    clearAll(){
      let qtd = this.tasks.length;
      for (let i = 0; i <= qtd; i++)
        {
          this.tasks.pop();
        }
    }
  }
    
});