$(document).ready(function(){
    $("#button").click(function(){
        $("#dok").toggle(500);
        $("#button").text(function(i, text){
            return text === "Les mer" ? "Skjul tekst" : "Les mer";
        });
    });
});

$("#mySVG").hover(function(){
    $(this).css("background", "linear-gradient(blue, white");
},
function(){
    $(this).css("background","linear-gradient(#49B5FF, white");
    $("#nemo").hide();
    $("#fish").show();
})

$("#myCanvas").hover(function(){
    $(this).css("background", "linear-gradient(blue, white");
},
function(){
    $(this).css("background","linear-gradient(#49B5FF, white");
})


$("#mySVG").click(function(){
    $("#nemo").toggle(); 
    $("#fish").hide();
});

    