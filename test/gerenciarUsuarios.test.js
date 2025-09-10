const {retornarUsuarios,adicionarNovoUsuario} = require('../src/gerenciarUsuarios');
const{expect} = require('chai');

describe('Testar as funções de Gestão de Usuários', function(){
    it('Validar se posso adicionar um novo nome de usuário na lista', function(){
        //  Adicionar um novo nome no fianal da lista de usuários
        adicionarNovoUsuario({
        nome:  'Maria',
        email: 'Maria@dominio.com'
        });
  
   
        // Retornar a lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //comparar se o novo nome está no fim da lista de usuários
        function equalIgnoreCase(obj1, obj2) {
         return Object.keys(obj1).every(
         key => obj1[key].toLowerCase() === obj2[key].toLowerCase()
            );
        }

        expect(equalIgnoreCase(listaDeUsuarios.at(-1), {
        nome: 'maria',
        email: 'maria@dominio.com'
    
        })).to.be.true;


       /*
        expect(listaDeUsuarios.at(-1)).to.eql({   // eql para comparar objetos e equal para comparar propriedades
            nome:'Maria',
            email:'maria@dominio.com'
        })
   
      */

        /*
        expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('Maria@dominio.com');
        */
   
    })
   

})