const {retornarUsuarios,adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const{expect} = require('chai');

describe('Testar as funções de Gestão de Usuários', function(){
    it('Validar se posso adicionar um novo nome de usuário na lista', function(){
        //  Adicionar um novo nome no fianal da lista de usuários
        adicionarNovoUsuario({
        nome:  'Maria',
        email: 'maria@dominio.com'
    });
  
   
    // Retornar a lista de usuários
        const listaDeUsuarios = retornarUsuarios();
        //comparar se o novo nome está no fim da lista de usuários
   
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome:'Maria',
            email:'maria@dominio.com'
   })
   
   /*
        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('Maria@dominio.com');
   */
   
    })

   

   
})