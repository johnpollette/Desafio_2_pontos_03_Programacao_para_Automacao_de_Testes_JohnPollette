import {fazerLogin} from '../src/gestaoUsuarioSite.js';
import assert from 'node:assert';

describe ('Testando Funcao de gestao de usuarios do site', function(){

    it('Validar que usuario com login e senha corretos receba a mensagem Login sucesso', function(){
        //Arranje
        const emailQueQueroTestar = 'joao@test.com';
        const senhaQueQueroTestar = 1234;
        const retornoEsperado = 'Login realizado com sucesso!';

        //Act
        const retornoDaFuncao = fazerLogin(emailQueQueroTestar,senhaQueQueroTestar);

        //Assert
        assert.equal(retornoDaFuncao,retornoEsperado);

    });

    it('Validar que usuario com status expirado = verdadeiro receba a mensagem "Credencial expirada"', function(){
        //Arranje
        const emailQueQueroTestar = 'maria@test.com';
        const senhaQueQueroTestar = 4321;
        const retornoEsperado = 'Credenciais expirada';

        //Act
        const retornoDaFuncao = fazerLogin(emailQueQueroTestar, senhaQueQueroTestar);

        //Assert
        assert.equal(retornoDaFuncao,retornoEsperado);

    });

    it('Validar que usuario com Senha incorreta receba a mensagem "Senha incorreta"', function(){
        //Arranje
        const emailQueQueroTestar = 'joao@test.com';
        const senhaQueQueroTestar = 4321;
        const retornoEsperado ='Senha incorreta';

        //Act
        const retornoDaFuncao = fazerLogin(emailQueQueroTestar,senhaQueQueroTestar);

        //Assert
        assert.equal(retornoDaFuncao,retornoEsperado);

    });

    it('Validar que usuario com email nao registrado receba a mensagem "Usuario Nao encontrado"', function(){
        //Arranje
        const emailQueQueroTestar = 'felix@test.com';
        const senhaQueQueroTestar = 4321;
        const retornoEsperado ='Usuario nao Encontrado';
        
        //Act
        const retornoDaFuncao = fazerLogin(emailQueQueroTestar,senhaQueQueroTestar);

        //Assert
        assert.equal(retornoDaFuncao,retornoEsperado);

    });

});