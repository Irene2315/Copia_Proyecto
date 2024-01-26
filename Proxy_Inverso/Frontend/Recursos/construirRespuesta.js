
function construirCards(){
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

    


    fetch('http://localhost:8083/api/lugarConcreto?ciudadesSeleccionadas='+cadenaLugares, options)
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta:")
            console.log(data);

            var lugares = [];

            data.forEach(lugarData => {
                lugares.push({
                    id: lugarData.id,
                    nombre: lugarData.nombre,
                    latitud: lugarData.latitud,
                    longitud: lugarData.longitud,
                    idProvincia: lugarData.idProvincia,
                    activo: false
                });
            });
        })
        .catch(err => console.error(err));

    let contenedorCards=document.getElementById("contenedorCards");
    let construirCards ='';

    construirCards+=`<div class="container">`
    construirCards+=`<div class="row">`
    construirCards+=`<div class="col-lg-3 col-md-6 col-sm-12">`
    construirCards+=`<div class="card">`
    construirCards+=`<div class="card-body">`
    construirCards+=`<h5 class="card-title colorLetra">Tortilla De Patata</h5>`
    construirCards+=`<img src="Fotos/1-Tortilla.png" class="card-img-top" alt="...">`
    construirCards+=`<p class="card-text colorLetra">Plato típico español conpuesto de patatas y huevo batido.</p>`
    construirCards+=`<button type="button" class="btn btn-secondary">Ver Receta</button>`
    construirCards+=`</div></div></div>`  
    construirCards+=`</div>`
    construirCards+=`</div>`
    contenedorCards.innerHTML = construirCards;
}

