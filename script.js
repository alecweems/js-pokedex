console.log("Hello Console")

$(document).ready(function() {

    $("#button").on("click", function() {
        
        function getPokeId() {
            return Math.floor(Math.random() * Math.floor(893));
            
        }

let queryURL = "https://pokeapi.co/api/v2/pokemon/" + getPokeId()

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.id + "; " + response.name);
            
            var pokemonName = $("<h2>").text(response.name);
            var pokedexNumber = $("<h2>").text(response.id);
            var pokemonSprite = $("<img>").attr("src", response.sprites.front_default);

            $("#pokedex-info").empty();
            $("#pokedex-info").append(pokemonName, "; ", pokedexNumber,"; ", pokemonSprite)
                                   
          });
        




        




    });

  });