$(document).ready(function () {
    
    var caja = $("#caja");
    caja.hide();

    $("#mostrar").click(function (e) { 
        
        caja.show("normal");    
    });
    
    $("#ocultar").click(function (e) { 
        caja.hide("normal");
    });

    $("#todoenuno").click(function (e) { 
       caja.slideToggle('fast');
    });

    $("#animar").click(function (e) { 
        caja.animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: '110px'
        },'slow')
        .animate({
            borderRadius: "900px",
            marginTop: "80px"
        },'slow')
        .animate({
            borderRadius: "0px",
            marginLeft: "0px"
        },'slow')
        .animate({
            borderRadius: "100px",
            marginTop: "0px"
        },'slow')
        .animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: '110px'
        },'slow');
    });


});