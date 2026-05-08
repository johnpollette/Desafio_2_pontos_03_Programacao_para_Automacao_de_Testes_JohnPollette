/*
Autor: John Pollette
Orientações: Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, 
contendo as propriedades: id, nome, email, 
senha e expirado (boleano, pode ser true ou false). 
Adicione ao menos um dos usuarios como expirado sendo true.
*/
const usuariosDoSite = [
    {
       id: 1,
       nome: 'Joao',
       email: 'joao@test.com',
       senha: 1234,
       expirado: false

    },
    {
       id: 2,
       nome: 'Maria',
       email: 'maria@test.com',
       senha: 4321,
       expirado: true
    },
    {
        id: 3,
       nome: 'Zinho',
       email: 'zinho@test.com',
       senha: 2468,
       expirado: false
    }
];
/*
Desafio:
Construa uma função de para realizar login. 
Quem usar a função deverá receber uma mensagem 
dizendo que o login foi realizado com sucesso 
caso exista um usuário com email e senha iguais aos informados. 
A função deve dizer que as credenciais expiraram caso expirado for true. 
A função também tem que dizer que as credenciais estão incorretas 
caso o email não exista ou a senha esteja incorreta para aquele email.
*/
    export function fazerLogin(emailUsuario, senhaUsuario) {
    for (let i = 0; i < usuariosDoSite.length; i++) {
        if (usuariosDoSite[i].email == emailUsuario) {
            if (usuariosDoSite[i].expirado) {
                return 'Credenciais expirada';
            }
            if (usuariosDoSite[i].senha === senhaUsuario) {
                return 'Login realizado com sucesso!';
            }
            return 'Senha incorreta';
        }
    }
    return 'Usuario nao Encontrado';
}
   
    
/*

Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

Entrega:
Suba seu código no Github e entregue o link até o dia 10 de maio às 23:59:59. 

*/