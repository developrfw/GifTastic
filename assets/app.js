$( document ).ready(function() {
    renderButtons(searchArray, 'searchButton', '#buttonsArea');
    console.log( "ready!" );
});


var searchArray = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];

function renderButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0; i < searchArray.length; i++){
        var a = $('<button>');
        a.addClass(classtoAdd);
        a.attr("data-type", searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }

}

