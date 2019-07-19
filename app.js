var dogs = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];

function renderButtons(){

    $("#dogsView").empty();  
     for (var i = 0; i < dogs.length; i++) {
         $('#dogsView').append('<button>' + dogs[i] + '</button>');
     }

  }

  $('#addDogs').on('click', function(){

   
   var dogs = $('#dogs-input').val();
   $('#dogsView').append('<button>' + movie + '</button>');
   return false;

});

