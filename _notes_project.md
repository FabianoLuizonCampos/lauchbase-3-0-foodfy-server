# !!!! THIS NOTES BELOW IS FOR OWNER ORIENTATION ONLY / ESTA NOTAS ABAIXO É APENAS PARA ORIENTAÇÃO DO PROPRIETÁRIO

## Criando uma aplicação

* `estruturas de pasta`         Criar uma estrutura de pastas a qual sera utilizada no projeto geral

## Criando uma aplicação com Express

* `server.js`                   Criar o arquivo que será o server Backend

* `npm init -y`                 Inicializa o npm

* `npm install express`         Instala o Express para a sua aplicação

* `npm install nodemon -D`      Automatiza o restart do servidor node mon(inotaramento), somente para desenvolvimento

* `package.json`                Editar o arquivo, na seção scripts, criar atalho para o arquivo do servidor
    "scripts": {
        "start": "node src/server.js"
    },

## Criando uma aplicação com Nunjucks

* `npm install nunjucks`        Instalar o NunJucks.js - HTML com superpoderes

* `server.js`                   Inserir as configurações básicas no servidor

### Inserir as configurações básicas no servidor

``` 

// include os frameworks
const express = require("express")
const nunjucks = require("nunjucks")

// instanciando o server
const server = express()

// include do database
const recipes = require("./database/data")

// configurações do servidor e do template engine
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false, 
    noCache: true
})

```

## Base de Arquivo Layout.njk

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- TITLE -->
    {% block title %}
        <title>Foodfy by FabianoLC</title>
    {% endblock title %}

    <link rel="stylesheet" href="/styles/main.css">

    <!-- STYLES PAGE -->
    {% block styles %}
    {% endblock styles %}    
</head>
<body>

   
    <!-- PAGE ID -->
    <div id="{{ pageId }}">

        <!-- INCLUDE DO HEADER -->

        <!-- PAGE CONTENT -->
        {% block content %}
        {% endblock content %}

        <!-- INCLUDE DO FOOTER -->

    </div>

    <!-- MODAL -->
    {% block modal %}
    {% endblock modal %} 

    <!-- SCRIPTS -->
    {% block scripts %}
    {% endblock scripts %}

</body>
</html>

```

## Base de Arquivo page-xxx.njk

```

{% extends "layout.njk" %}

{% set pageId = "page-home" %}

<!-- TITLE -->
{% block title %}  
{% endblock title %}

<!-- STYLES PAGE -->
{% block styles %}
{% endblock styles %}  
    

<!-- PAGE CONTENT -->
{% block content %}
    <!-- HEADER -->
    {% include "partials/page-header.njk" %} 

    <!-- CONTENT -->

    <!-- FOOTER -->
    {% include "partials/page-footer.njk" %}
{% endblock content %}
   
<!-- MODAL -->
{% block modal %}
{% endblock modal %} 

<!-- SCRIPTS -->
{% block scripts %}
{% endblock scripts %} 

<!-- FOOTER -->
{% block footer %}
{% endblock footer %}

```