
var searchArray = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];

var searchTerm = $(this).attr("name");





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
}).then(function(response) {
    console.log(response);
    var results = response.data;
    

    for (var i = 0; i < results.length; i++) {

            var images = `
                <div>
                    <img src=${results[i].images.fixed_height.url} data-moving-pic-url=${results[i].images.fixed_height.url} data-still-pic-url=${results[i].images.fixed_height_still.url} data-is-moving="true">
                    <p> ${results[i].rating}
                </div> 
            `
            // console.log(images);

            $("#gifDiv").prepend(images);
        
    }

    });

})

$("#add-image").click(function(event){
    event.preventDefault();
    var searchTerm = $("#search-input").val().trim();
    searchArray.push(searchTerm);
    renderButtons();
})


$("body").on("click","img", function() {
    console.log(this)
    var isMoving = $(this).attr("data-is-moving");
     
    if (isMoving === "true") {
      $(this).attr("src", $(this).attr("data-still-pic-url"));
      $(this).attr("data-is-moving", "false");
    } else {
      $(this).attr("src", $(this).attr("data-moving-pic-url"));
      $(this).attr("data-is-moving", "true");
    }
  });


  