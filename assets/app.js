
var searchArray = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];




// var gifURL = response.data[g].images.original_still.url;
//         var gifURLAnimated = response.data[g].images.original.url;
//         console.log(gifURLAnimated);

//         $( document ).ready(function() {
//             renderButtons(searchArray, 'searchButton', '#buttonsArea');
//         });
        


function renderButtons(){
    $("#buttonsArea").empty(); 
    for(var i=0; i < searchArray.length; i++){
        var a = $("<button>");
        a.addClass("value-button");
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $("#buttonsArea").append(a);
    }

}
renderButtons()

$(document).on('click', ".value-button" , function(){
    
    var type = $(this).attr('data-type');
    console.log(type);
    
    
   var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=R31pFJRv69lBkkbwiUza4FfSBDl3IWmk&limit=10"
    

    $.ajax({
    url: queryURL,
    method: "GET",
})


  .then(function(response) {
    console.log("ajax is working");
      console.log(response);
    var results = response.data;
    console.log(results);

    for (var i = 0; i < results.length; i++) {

        // if (results[i].rating !== "pg" && results[i].rating !== "g") {
            // var gifDiv = $("<div>");
            // var rating = results[i].rating;

            // var p = $("<p>").text("Rating: " + rating);

            // var gifImage = $("<img>");
        //    var gifImage.attr("src", results[i].images.fixed_height.url);
            
            // gifDiv.append(p);
            // gifDiv.append(gifImage);

            // $("#gifDiv").prepend(gifDiv);

            var images = `<div>
            <img src = ${results[i].images.fixed_height.url}>
            <p> ${results[i].rating}
            </div> 
            `
            console.log(images);

            $("#gifDiv").prepend(images);
        // }
    }

    });

})
  