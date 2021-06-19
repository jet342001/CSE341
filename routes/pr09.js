const express = require("express");
const app = express();

const controller = require("../controllers/pokemonController");

app
  .get("/", (req, res, next) => {
    res.render("pages/welcomePage");
  })
  .get("/pokemon/:page", (req, res, next) => {
    //console.log("made it here");
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
      res.render("pages/pokemon", {
        pokemonList: pokemon,
        page: page,
      });
    });
  });

module.exports = app;
