$(document).ready(function () {

    $("#cambiar-modo").click(function () {
        $("body").toggleClass("modo-oscuro");

            const icono = $("#icono-modo");
            if ($("body").hasClass("modo-oscuro")) {
                icono.attr("src", "Icono/luna.png");
            } else {
                icono.attr("src", "Icono/sol.png");
            }

            const pradera = $("#pradera-cambio");
            if ($("body").hasClass("modo-oscuro")) {
                pradera.attr("src", "pradera_de_noche.jpg");
            } else {
                pradera.attr("src", "pradera.jpg");
            }
        });
    });