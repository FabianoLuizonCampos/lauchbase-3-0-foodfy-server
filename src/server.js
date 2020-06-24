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

nunjucks.configure("src/views", {
    express:server,
    autoescape: false, 
    noCache: true
})

server.get("/", function (req,res) {
    return res.render("index", { items: recipes} )
})

server.get("/about", function (req,res) {
    return res.render("about")
})

server.get("/recipes", function (req,res) {
    return res.render("recipes", { items: recipes} )
})


server.get("/recipe-detail", function (req,res) {
    let recipeIndex = req.query.id
    
    if ( recipeIndex < 20) {
        recipeIndex -=10;
    } else {
        recipeIndex -=20;
    }
           
    //console.log(recipeIndex);
    return res.render("recipe-detail", { item: recipes[recipeIndex] })
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function () {
    console.log("server is running")    
})  
