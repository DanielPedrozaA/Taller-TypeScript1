import { series } from './data.js';

const TBody: HTMLElement = document.getElementById('Series')!; 
const Average: HTMLElement = document.getElementById('Average')!; 

//Correr Funciones
seriesInTable();
seasonsAverage();

//Funcion de mostrar series en la tabla
function seriesInTable(): void {
    series.forEach((serie)=> {
        let trElement = document.createElement("tr");
        trElement.innerHTML = 
        `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
            TBody.appendChild(trElement);
        });
    }

//Funcion de mostrar promedio de temporadas
    function seasonsAverage(): void {
        let result: string = findAverageSeason();
        Average.innerText = "Average Season: " + result;
    }
    
//Funcion de calcular promedio de temporadas
    function findAverageSeason(): string {
        let seasons: number = 0;
        let Series: number = 0;
        series.forEach(function (serie) {
            seasons = seasons + serie.seasons;
            Series++;
        });
        let result: number = seasons / Series;
        return result.toFixed(0);
    }
