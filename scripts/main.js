import { series } from './data.js';
var TBody = document.getElementById('Series');
var Average = document.getElementById('Average');
//Correr Funciones
seriesInTable();
seasonsAverage();
//Funcion de mostrar series en la tabla
function seriesInTable() {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        TBody.appendChild(trElement);
    });
}
//Funcion de mostrar promedio de temporadas
function seasonsAverage() {
    var result = findAverageSeason();
    Average.innerText = "Average Season: " + result;
}
//Funcion de calcular promedio de temporadas
function findAverageSeason() {
    var seasons = 0;
    var Series = 0;
    series.forEach(function (serie) {
        seasons = seasons + serie.seasons;
        Series++;
    });
    var result = seasons / Series;
    return result.toFixed(0);
}
