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
           console.log(response.name, ", ", response.id)
                                   
          });
        




        




    });

  });