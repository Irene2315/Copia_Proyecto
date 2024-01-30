
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

function contruccionCards() {
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

    console.log(arrayLugares);
    console.log(arrayItems);

    var lugaresSelect = [];
    var itemsLugarSelectAhora = [];
    fetch('http://localhost:8083/api/lugaresSeleccionados/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta_LugaresSeleccion:");
            console.log(data);

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

    //Items Lugar Ahora
    let contenedorCards = document.getElementById("contenedorCards");
    let construirCards = '';

    fetch('http://localhost:8083/api/itemsLugarAhora/' + cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta_LugarAhora:");
            console.log(data);

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

            construirCards += `<div class="container">`
            construirCards += `<div class="row">`
            data.forEach(itemsLugarSelectAhora => {
                construirCards += `<div class="col-lg-3 col-md-6 col-sm-12">`
                construirCards += `<div class="card">`
                construirCards += `<div class="card-body">`
                construirCards += `<h5 class="card-title colorLetra">${itemsLugarSelectAhora.id}</h5>`
                construirCards += `<img src="/recursos/Fotos/Prevision/${itemsLugarSelectAhora.prevision}.svg" class="card-img-top" alt="...">`
                construirCards += `<button type="button" class="btn btn-secondary">Ver Receta</button>`
                construirCards += `</div></div></div>`
            });

            construirCards += `</div>`
            construirCards += `</div>`
            contenedorCards.innerHTML = construirCards;
        })
        .catch(err => console.error(err));


    



}



