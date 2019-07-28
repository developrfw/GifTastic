var dogs = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];

function renderButtons(){

    $("#dogsView").empty();  
     for (var i = 0; i < dogs.length; i++) {
         $('#dogsView').append('<button>' + dogs[i] + '</button>');
     }

  }

  $('#addDogs').on('click', function(){

   
   var dogs = $('#user-input').val();
   $('#dogsView').append('<button>' + movie + '</button>');
   return false;

});


renderButtons();


// the URL querying the API ((( put this in an onClick Function)))
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=R31pFJRv69lBkkbwiUza4FfSBDl3IWmk&limit=10"

var searchTerm = $("#user-input").val()

 
