$( document ).ready(function() {
    renderButtons(searchArray, 'searchButton', '#buttonsArea');
});

var searchArray = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];



function renderButtons(){
    $("#buttonsArea").empty(); 
    for(var i=0; i < searchArray.length; i++){
        var a = $("<button>");
        a.addClass("");
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $("#buttonsArea").append(a);
    }

}


$(document).on('click', ".searchButton" , function(){
    var type = $(this).data('type');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=R31pFJRv69lBkkbwiUza4FfSBDl3IWmk&limit=10"
    $.ajax({url:queryURL, method: 'GET'})
    .done(function(response){
        console.log(response + "This is the response from ajax")
    })
    
})



function renderButtons(){
    
    $("#search-buttons").empty();
   
    for (var i = 0; i < searchTerms.length; i++) {
       
        a = $("<button>");
        // add class term-button
        a.addClass("term-button");
        // add attribute name
        a.attr("name", searchTerms[i]);
        // provide button text
        a.text(searchTerms[i]);
        $("#search-buttons").append(a);
    }
}
