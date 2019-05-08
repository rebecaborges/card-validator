# Validador de cartão de crédito v.1.0.5

Essa biblioteca tem como finalidade verificar se um cartão de crédito é válido ou não, com base nos números impressos no cartão, retornando **true** ou **false**.

## Como instalar:

```sh
$ npm install cred-card-valid
```

## Como utilizar:

```node
> const card = require("cred-card-valid");
> console.log(card(36490102462661))
> // returns "true"
```

## roadmap oficial do projeto

#### versão 1.0.5 (released)

* funcionalidades: valida cartão como verdadeiro ou falso.
* validador de cartão de crédito através do algoritmo de Luhn, retorna true para cartão válido e false para cartão inválido.