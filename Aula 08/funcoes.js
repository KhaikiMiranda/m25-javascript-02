/**
 * Criação e uso de funções
 */
// Definindo a função para usá-la
function fatorial(numero) {
    let ret = 1;
    //Aqui abaixo será um laço decrescente 5 * 4 * 3 * 2
    for (let i=numero; i>1; i--) {
        ret*=i; // Isso é o mesmo que ret = ret * 1
    }
    return ret; //Retornando o valor
}
//Usando a função
console.log('O fatorial de 5 é ' + fatorial(5));