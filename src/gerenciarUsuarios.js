//const usuarios = ['Matheus', 'Lucas', 'Marcos', 'João']; 

const usuarios = [   
    
    {
        nome:  'Matheus',
        email: 'matheu@dominio.com'
    },
    {
        nome:  'João',
        email: 'João@dominio.com'
    },
    {
        nome:  'Lucas',
        email: 'Lucas@dominio.com'
    },
    {
        nome:  'Marcos',
        email: 'Marcos@dominio.com'
    }
]; 

function retornarUsuarios() {
return usuarios;
}


function adicionarNovoUsuario(novoUsuario){
    usuarios.push(novoUsuario)
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}