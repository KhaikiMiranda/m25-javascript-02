/**
 * Exemplo de uso do laço While
 */
let i=0;
while (i<10) {
    //Lembrando que o pós-incremento (variável++)
    //Ocorre como última coisa antes de ir para próxima linha
    //Ou seja, imprime o texto com o valor de i e depois aumenta 1
    console.log('Valor de i=' + i++);
}
console.log('Fim do While');
//Usando o while no final, com do..while
i=0;
do {
    console.log('Valor de i=' + i++);
} while (i<10);
console.log('Fim do laço do..while');