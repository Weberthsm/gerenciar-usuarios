const usuarios = ['Matheus', 'Lucas', 'Marcos', 'João']; 

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