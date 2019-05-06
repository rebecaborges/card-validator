# Validador de cartão de crédito v.1.0.2

Essa biblioteca tem como finalidade validar se um cartão de crédito é verdadeiro ou falso, com base nos números impressos no cartão.

## Como instalar:

```sh
$ npm install cred-card-valid
```

## Como utilizar:

```node
> const cartao = require("cred-card-valid");
> console.log(cartao(36490102462661))
> // returns "true"
```

## roadmap oficial do projeto

#### versão 1.0.2 (released)

* correção de como utilizar

#### versão 1.0.1 (released)

* correção de bugs

#### versão 1.0.0 (released)

* funcionalidades: valida cartão como verdadeiro ou falso.
* validador de cartão de crédito através do algoritmo de Luhn, retorna true para cartão válido e false para cartão inválido.