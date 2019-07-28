$(function(){
    populateButtons(dogArray, 'searchButton', '#dogsView');
})


var dogArray = ["golden retriever", "labrador", "border collie", "great dane", "great pyrenees", "greyhound", "australian shephard", "chihuahua", "dascshund"];

function populateButtons(dogArray, classToAdd, areaToAddTo){
    $(areaToAdd).empty();
    for(var i=0; i < dogArray.length; i++)
        var a = $('<button>');
        a.addClass(classtoAdd);
        a.attr("data-type", dogArray[i]);
        a.text(dogArray[i]);
        $(areaToAddTo).append(a);
}