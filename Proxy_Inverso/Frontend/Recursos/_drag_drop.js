$(document).ready(function () {

    // De forma predeterminada todos los elementos son dragables
    let objeto = null;
    var elementosActivados = [];
    var arraySinDuplicados = new Set(elementosActivados);
    

    $("#items_Activados,#items_Desactivados").css("background-color", "white");
    $('#items_Desactivados').append(item_Viento, item_Prevision);
    $('#items_Activados').append(item_Temp, item_Humedad);


    $("#items_Activados").children().each(function () {
        var idElemento = $(this).attr('id');
        arraySinDuplicados.add(idElemento);
    });
    console.log(arraySinDuplicados);


    $("#item_Temp,#item_Humedad,#item_Viento,#item_Prevision, body").on('dragstart', function (event) {

        // Recoge el id del elemento que estoy moviendo
        event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
        console.log(event.target.id);
        objeto = event.target.id;
    });

    // Permitir que el destino reciba elementos arrastrados
    $("#items_Desactivados").on('dragover', function (event) {
        console.log(event.target.id);

        $("#items_Desactivados").css("background-color", "rgb(254, 8, 8)");
        event.preventDefault();


    });
    $("#items_Activados").on('dragover', function (event) {

        console.log(event.target.id);

        $("#items_Activados").css("background-color", "rgb(11, 11, 153)");
        event.preventDefault();


    });



    $("#items_Activados, #items_Desactivados").on('dragleave', function (event) {
        $(this).css("background-color", "white");
    });

    // Manejar la acción de soltar el elemento
    $("#items_Desactivados, #items_Activados").on('drop', function (event) {

        $("#items_Activados,#items_Desactivados").css("background-color", "white");
        var data = event.originalEvent.dataTransfer.getData("text/plain");

        var draggedElement = document.getElementById(data);


        if (event.target !== draggedElement) {
            // Agregar el elemento al área general
            $(this).append(draggedElement);

            // Actualizar el conjunto de IDs sin duplicados
            $("#items_Activados").children().each(function () {
                var idElemento = $(this).attr('id');
                arraySinDuplicados.add(idElemento);
            });
            $("#items_Desactivados").children().each(function () {
                var idElemento = $(this).attr('id');
                arraySinDuplicados.delete(idElemento);
            });

            console.log(arraySinDuplicados);
        }
    });



});
