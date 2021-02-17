$(document).ready(function(){
    $('#seconddropdown').on("click", function(e){
        $(this).next('div').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $('#thirddropdown').on("click", function(e){
        $(this).next('div').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});