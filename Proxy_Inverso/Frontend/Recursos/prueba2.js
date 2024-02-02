
function gestionDeRespuesta() {
    var cadenaLugares = localStorage.getItem('lugaresSeleccion');
    var cadenaItemsMeteo = localStorage.getItem('guardadoItems');

    var arrayLugares = JSON.parse(cadenaLugares);
    var arrayItems = JSON.parse(cadenaItemsMeteo);

    console.log(arrayLugares);
    console.log(arrayItems);


    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoiaWtjZXhAcGxhaWF1bmRpLm5ldCJ9.NEd10ft7DTb8HCohv5WId_rRKtgQj-Pc5dLNdCsmSTgypZxyGSkNJIuPulVAOvcZrfs9sXMjus-06iDa6kZlOnMGQeY0LsajlWakvGGXmDN3FKSfJT-9BCDtMyh89P34Jt3uneIt7H0we82G4_URRfUwIGQg83FCT_zO6Pu2joqBRURMC80Hs_x4voWpmGCwg6LPcb4sO0bGNqJq36zp1WB0LHPjBQ6pd3_mjiXsE6h892841vwcdyElpX2gCKV9JEH6Xm1LBVbcTakWUO_jGjAGhO4SdBOXuqNcmKDOJbsURVMlNc-_2kYvYlxPa9xj9B9PrXwNq7tNDlDq6ooKYA'
        }
    };



    //Lugares Selecionados por el usuario
    fetch('http://localhost:8083/api/lugaresSeleccionados/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta_LugaresSeleccion:");
            console.log(data);

            var lugaresSelect = [];

            data.forEach(lugarDataSelect => {
                console.log(lugarDataSelect)
                lugaresSelect.push({
                    id: lugarDataSelect.id,
                    nombre: lugarDataSelect.nombre,
                    latitud: lugarDataSelect.latitud,
                    longitud: lugarDataSelect.longitud,
                    idProvincia: lugarDataSelect.idProvincia,
                    activo: true
                });
            });
            console.log(lugaresSelect);
        })
        .catch(error => console.error(error));
    //Historico de items de lugares selecionados
    fetch('http://localhost:8083/api/itemsLugares/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta_ItemsLugares:");
            console.log(data);

            var itemsLugarSelect = [];

            data.forEach(itemDataSelect => {
                console.log(itemDataSelect)
                itemsLugarSelect.push({
                    id: itemDataSelect.id,
                    idLugar: itemDataSelect.idLugar,
                    fecha_hora: itemDataSelect.fecha_hora,
                    valorTemp: itemDataSelect.valorTemp,
                    valorViento: itemDataSelect.valorViento,
                    prevision: itemDataSelect.prevision
                });
            });
            console.log(itemsLugarSelect);
        })
        .catch(err => console.error(err));
    //Items Lugar Ahora
    fetch('http://localhost:8083/api/itemsLugarAhora/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta_LugarAhora:");
            console.log(data);

            var itemsLugarSelectAhora = [];

            data.forEach(itemDataSelect => {
                console.log(itemDataSelect)
                itemsLugarSelectAhora.push({
                    id: itemDataSelect.id,
                    idLugar: itemDataSelect.idLugar,
                    fecha_hora: itemDataSelect.fecha_hora,
                    valorTemp: itemDataSelect.valorTemp,
                    valorViento: itemDataSelect.valorViento,
                    prevision: itemDataSelect.prevision
                });
            });
            console.log(itemsLugarSelectAhora);
        })
        .catch(err => console.error(err));


}

function construccionCards() {
    var cadenaLugares = localStorage.getItem('lugaresSeleccion');
    var cadenaItemsMeteo = localStorage.getItem('guardadoItems');

    var arrayLugares = JSON.parse(cadenaLugares);
    var arrayItems = JSON.parse(cadenaItemsMeteo);


    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoiaWtjZXhAcGxhaWF1bmRpLm5ldCJ9.NEd10ft7DTb8HCohv5WId_rRKtgQj-Pc5dLNdCsmSTgypZxyGSkNJIuPulVAOvcZrfs9sXMjus-06iDa6kZlOnMGQeY0LsajlWakvGGXmDN3FKSfJT-9BCDtMyh89P34Jt3uneIt7H0we82G4_URRfUwIGQg83FCT_zO6Pu2joqBRURMC80Hs_x4voWpmGCwg6LPcb4sO0bGNqJq36zp1WB0LHPjBQ6pd3_mjiXsE6h892841vwcdyElpX2gCKV9JEH6Xm1LBVbcTakWUO_jGjAGhO4SdBOXuqNcmKDOJbsURVMlNc-_2kYvYlxPa9xj9B9PrXwNq7tNDlDq6ooKYA'
        }
    };

    //console.log(arrayLugares);
    //console.log(arrayItems);

    var lugaresSelect = [];
    var itemsLugarSelectAhora = [];
    fetch('http://localhost:8083/api/lugaresSeleccionados/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            //console.log("Respuesta_LugaresSeleccion:");
            //console.log(data);

            data.forEach(lugarDataSelect => {
                //console.log(lugarDataSelect)
                lugaresSelect.push({
                    id: lugarDataSelect.id,
                    nombre: lugarDataSelect.nombre,
                    latitud: lugarDataSelect.latitud,
                    longitud: lugarDataSelect.longitud,
                    idProvincia: lugarDataSelect.idProvincia,
                });
            });
            //console.log(lugaresSelect);
        })
        .catch(error => console.error(error));

    var f = new Date();
    function formatearNumeroConCero(numero) {
        if (numero < 10) {
            return '0' + numero;
        } else {
            return numero;
        }
    }

    var formatoFecha_1 = (f.getFullYear() + "/" + formatearNumeroConCero(f.getMonth() + 1) + "/" + formatearNumeroConCero(f.getDate()));
    console.log("fecha_1");
    console.log(formatoFecha_1);

    var fm = new Date();
    fm.setDate(fm.getDate() + 1); // Sumar un día a la fecha actual

    var formatoFecha_2 = (fm.getFullYear() + "" + formatearNumeroConCero(fm.getMonth() + 1) + "" + formatearNumeroConCero(fm.getDate()));
    console.log("fecha_2");
    console.log(formatoFecha_2);


    let consultas = [
        {
            "id": "1",
            "idLugar": 20018,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/cantabrian_valleys/locations/azpeitia/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "2",
            "idLugar": 20029,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/deba/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "3",
            "idLugar": 20030,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/cantabrian_valleys/locations/eibar/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "4",
            "idLugar": 20045,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/irun/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "5",
            "idLugar": 20069,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/donostialdea/locations/donostia/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "6",
            "idLugar": 20071,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/cantabrian_valleys/locations/tolosa/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "7",
            "idLugar": 48017,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/coast_zone/locations/bermeo/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        },
        {
            "id": "8",
            "idLugar": 48020,
            "consulta": `https://api.euskadi.eus/euskalmet/weather/regions/basque_country/zones/great_bilbao/locations/bilbao/forecast/trends/measures/at/${formatoFecha_1}/for/${formatoFecha_2}`

        }

    ]
    //Items Lugar Ahora
    let contenedorCards = document.getElementById("contenedorCards");

    let construirCards = '';
    
    Intervalo();

    setInterval(Intervalo, 10000);

    function Intervalo() {
        $(".card").tooltip("dispose");
        construirCards = '';
        let promesas = [];
        construirCards += `<div class="container">`
        construirCards += `<div class="row">`
        fetch('http://localhost:8083/api/itemsLugarAhora/' + cadenaLugares, options)
            .then(response => response.json())
            .then(data => {
                data.forEach(itemsLugarSelectAhora => {
                    const lugarCorrespondiente = lugaresSelect.find(lugar => lugar.id == itemsLugarSelectAhora.idLugar);
                    const peticionActual = consultas.find(consulta => consulta.idLugar == itemsLugarSelectAhora.idLugar);
                    
                    let promesa = fetch(peticionActual.consulta, options)
                        .then(response => response.json())
                        .then(data => {
                            let respuestaConsulta = data["trends"]["set"][0]["symbolSet"]["weather"]["descriptionByLang"]["SPANISH"];
                            construirCards += `<div class="col-lg-3 col-md-6 col-sm-12">`

                            construirCards += `<div class="card" id="${lugarCorrespondiente.nombre}" data-toggle="tooltip" title="${respuestaConsulta}" >`;
                            construirCards += `<div class="card-body">`;
                            construirCards += `<div class="caraFrontal">`;
                            construirCards += `<h5 class="card-title colorLetra">${lugarCorrespondiente.nombre}</h5>`;
                            arrayItems.forEach(itemActivo => {
                                if (itemActivo == "prevision") {
                                    construirCards += `<img class="imgFront" src="/recursos/Fotos/Prevision/${itemsLugarSelectAhora.prevision}.svg">`;
                                }
                            });
                            construirCards += `</div>`;
                            construirCards += `<div class="caraLateral">`;
                            construirCards += `<h5 class="card-title colorLetra">MEDICIONES</h5>`;
                            construirCards += `<div class="mediciones-container">`;
                            arrayItems.forEach(itemActivo => {
                                if (itemActivo == "valorTemp") {
                                    construirCards += `<h5 class="card-texto colorLetra">${itemsLugarSelectAhora.valorTemp}ºC</h5>`;
                                    construirCards += `<img class="imgLat" src="/recursos/Fotos/Prevision/Temperatura.svg">`;
                                }
                                if (itemActivo == "valorHumedad") {
                                    construirCards += `<h5 class="card-texto colorLetra">${itemsLugarSelectAhora.valorHumedad}%</h5>`;
                                    construirCards += `<img class="imgLat" src="/recursos/Fotos/Prevision/Humedad.svg">`;
                                }
                                if (itemActivo == "valorViento") {
                                    construirCards += `<h5 class="card-texto colorLetra">${itemsLugarSelectAhora.valorViento}%</h5>`;
                                    construirCards += `<img class="imgLat" src="/recursos/Fotos/Prevision/Viento.svg">`;
                                }
                            });
                            construirCards += `</div>`;
                            construirCards += `</div></div></div></div>`;
                        })
                        .catch(err => console.error(err));

                    promesas.push(promesa);
                });

                Promise.all(promesas)
                    .then(() => {
                        construirCards += `</div>`;
                        construirCards += `</div>`;
                        contenedorCards.innerHTML = construirCards;

                        
                        $(".card").tooltip();
                    });
            })
            .catch(err => console.error(err));
    }
}

function construirCalendario() {
    var dateFormat = "dd/mm/yy",
        desde = $("#desde")
            .datepicker({
                defaultDate: "+1w",
                regional: "es",
                numberOfMonths: 1,
                dateFormat: dateFormat,
                position: {
                    my: "top",
                    at: "bottom"
                }
            })
            .on("change", function () {
                hasta.datepicker("option", "minDate", getDate(this));
            }),
        hasta = $("#hasta").datepicker({
            defaultDate: "+1w",
            regional: "es",
            numberOfMonths: 1,
            dateFormat: dateFormat,
            position: {
                my: "top",
                at: "bottom"
            }
        })
            .on("change", function () {
                desde.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }

    return new Promise((resolve) => {

        var camposLlenos = setInterval(() => {
            var desdeContenido = $("#desde").val();
            var hastaContenido = $("#hasta").val();

            if (desdeContenido.trim() !== '' && hastaContenido.trim() !== '') {
                console.log("campos_llenos");
                clearInterval(camposLlenos);
                resolve();
            }
        }, 100);
    });

}

async function construirGrafico() {
    await construirCalendario();


    var fechaDesde = $("#desde").val();
    var fechaHasta = $("#hasta").val();

    console.log("Fecha Desde:", fechaDesde);
    console.log("Fecha Hasta:", fechaHasta);

    const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    new Chart("grafico", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                borderColor: "red",
                fill: false
            }, {
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                borderColor: "green",
                fill: false
            }, {
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                borderColor: "blue",
                fill: false
            }]
        },
        options: {

            legend: { display: false }
        }
    });

    $("#grafico").css("display", "block");

}
