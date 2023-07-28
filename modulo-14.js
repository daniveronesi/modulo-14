##resolva as operações

10 + 15 = 25
"10" + 2 = "102" (aqui ocorre concatenação de strings, não soma numérica)
"10" * 2 = 20 (aqui ocorre multiplicação porque o operador "*" é para números)
"10" / 3 = 3.3333333333333335 (aqui ocorre divisão porque o operador  é para números)
"10" % 3 = 1 (o operador "%" retorna o resto da divisão)
10 + true = 11 (o valor booleano true é convertido para 1 na operação)
10 == "10" = true (aqui ocorre coerção de tipos, os valores são considerados iguais)
10 === "10" = false (não ocorre coerção de tipos, os valores são de tipos diferentes)
10 < 11 = true (10 é menor que 11)
10 > 12 = false (10 não é maior que 12)
10 <= 10.1 = true (10 é menor ou igual a 10.1)
10 > 9.99 = true (10 é maior que 9.99)
10 != "dez" = true (o valor e o tipo são diferentes, então a comparação é verdadeira)
10 + true = 11 (o valor booleano true é convertido para 1 na operação)
"dez" + true = "deztrue" (aqui ocorre concatenação de strings)
10 + false = 10 (o valor booleano false é convertido para 0 na operação)
10 * false = 0 (o valor booleano false é convertido para 0 na operação)
true + true = 2 (o valor booleano true é convertido para 1 na operação)
10++ = 10 (Erro de sintaxe, o operador "++" deve ser usado após uma variável)
10-- = 10 (Erro de sintaxe, o operador "--" deve ser usado após uma variável)
1 & 1 = 1 (operação bitwise AND)
1 & 0 = 0 (operação bitwise AND)
0 & 0 = 0 (operação bitwise AND)
1 & 0 = 0 (operação bitwise AND)
0 / 1 = 0 (a divisão de dois números inteiros resulta em um número decimal)
5 + 5 == 10 = true (a expressão é verdadeira, pois 5 + 5 é igual a 10)
"5" + "5" == 10 = false (a expressão é falsa, porque ocorre concatenação de strings)
"5" * 2 > 9 = true (a expressão é verdadeira, pois 5 * 2 é igual a 10, que é maior que 9)
(10 + 10) * 2 = 40 (a operação entre parênteses é resolvida primeiro)
10 + 10 * 2 = 30 (a multiplicação é resolvida primeiro, depois a adição)

######

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

Qual é a cor do carro?
Resposta: A cor do carro é "preto".

Qual é o valor do carro?
Resposta: O valor do carro é 30.000.

Qual é o valor da prestação?
Resposta: O valor da prestação é 750.

Se "cinza" é "branco", "branco" é "preto" e "preto" é "cinza", qual cor é "cinza"?
Resposta: Com base nas definições dadas, a cor "cinza" é equivalente a "branco", que, por sua vez, é equivalente a "preto". Então, a cor "cinza" é "preto".

Se o valor do carro fosse 45000, qual seria o valor da prestação considerando que ela é sempre 2.5% do valor do carro?
Resposta: Se o valor do carro fosse 45.000, o valor da prestação seria calculado como 2.5% do valor do carro:

var valorDoCarro = 45000;
var porcentagemDaPrestacao = 2.5;
var valorDaPrestacao = (porcentagemDaPrestacao / 100) * valorDoCarro;

valorDaPrestacao = (2.5 / 100) * 45000;
valorDaPrestacao = 0.025 * 45000;
valorDaPrestacao = 1125;

a) branco == "branco"
Resposta: Essa expressão será avaliada como false. A variável "branco" possui o valor "preto", e estamos comparando se o valor de "branco" é igual à string "branco". Como os valores são diferentes, a expressão é falsa.

b) branco == cinza
Resposta: Essa expressão será avaliada como true. A variável "branco" possui o valor "preto", e a variável "cinza" possui o valor "branco". Estamos comparando se o valor de "branco" é igual ao valor de "cinza". Como ambos possuem os valores invertidos, a expressão é verdadeira.

c) carro === branco
Resposta: Essa expressão será avaliada como false. Embora "carro" e "branco" contenham o mesmo valor "preto" e sejam do tipo string, estamos usando o operador de igualdade estrita "===", que também verifica os tipos das variáveis. Como os tipos são diferentes (uma é variável e a outra é uma string), a expressão é falsa.

d) var cavalo = carro == "preto"? "cinza" : "marrom";
Resposta: A variável "cavalo" receberá o valor "cinza". Nesta expressão ternária, estamos verificando se o valor da variável "carro" é igual à string "preto". Como é verdadeiro (pois a variável "carro" tem o valor "preto"), a variável "cavalo" receberá o valor "cinza".

e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3000? Demonstre a operação.

var entrada = 3000;
var valorDoCarro = valor;
var valorRestante = valorDoCarro - entrada;
var quantPrestacoes = Math.ceil(valorRestante / prestacao);
console.log(quantPrestacoes);

No exemplo acima, estamos subtraindo o valor da entrada do valor total do carro e, em seguida, dividindo o valor restante pelo valor da prestação. Usamos Math.ceil para arredondar para cima, pois queremos o número inteiro de prestações, considerando que não queremos parcelas com centavos.

var somaCores = branco + preto + cinza + carro;
console.log(somaCores.length);

A soma das quatro variáveis resulta em "pretocinzabranco" e seu comprimento é 18 caracteres.
