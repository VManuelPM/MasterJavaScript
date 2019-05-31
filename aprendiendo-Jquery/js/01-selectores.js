$(document).ready(function () {
    console.log("JQuery y la web cargados");

    //SELECTOR DE ID
    var rojo = $("#rojo").css("background", "red").css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow").css("color", "green");

    $("#verde").css("background", "green").css("color", "white");

    //SELECTOR DE CLASE
    var miclase = $('.zebra').css("padding", "5px");

    $(".sinBorde").click(function () {
        console.log("click dado");
        $(this).addClass('zebra');
    });


    // SELECTORES DE ETIQUETA
    var parrafos = $('p').css("cursor","pointer");

    parrafos.click(function () {
        if (($this).hasClass()) {
            $(this).removeClass("zebra");
        }
    });

    //SELECTORES DE ATRIBUTO 
    $("[title='Google']").css("backgroud","#cccc");
    $("[title='Facebook']").css("background","blue");

    //OTROS
    //$('p, a').addClass('margen-superior')

    var busqueda = $("#caja").eq(0).parent().find('.resaltado');
    console.log(busqueda);  

    


});

