var pessoa = {
    // Propriedade do Objeto
    // nome: [valor(array)] 
    // ou valor;
    nome: ['bob', 'smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['jogos', 'futebol'],
    bio: function() {
        alert (
            this.nome[0] +
            ' ' +
            this.nome[1] +
            ' tem ' +
            this.idade +
            ' anos de idade' +
            ' ele gosta de: ' +
            this.interesses[0] +
            ' e ' +
            this.interesses[1] +
            '.',
        );
    },
    saudacao: function() {
        alert('oi! eu sou ' + this.nome + '.')
    },
};