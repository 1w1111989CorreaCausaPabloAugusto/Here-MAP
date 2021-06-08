using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Models;
using Resultados;

namespace CoordenadasAPI.Controllers
{
    [ApiController]
    
    public class CoordenadasController : ControllerBase
    {
        public List<Coordenadas> ListaCoordenadas{get;set;}
        public double[] latitudes = {-31.417,-22.9035,-30.0277,6.217,52.5186,34.6936};
        public double[] longitudes = {-64.183,-43.2096,-51.2287,-75.567,13.4081,135.502};
        

        private readonly ILogger<CoordenadasController> _logger;

        public CoordenadasController(ILogger<CoordenadasController> logger)
        {
            _logger = logger;
            ListaCoordenadas = new List<Coordenadas>();
            for(int i=0; i<longitudes.Length;i++){
                Coordenadas coordenadas = new Coordenadas();
                coordenadas.latitud = latitudes[i];
                coordenadas.longitud = longitudes[i];
                ListaCoordenadas.Add(coordenadas);
            }
        }

        [HttpGet]
        [Route("Coordenadas/ObtenerCoordenadas")]
        public ActionResult<Resultado> ObtenerCoordenadas()
        {
            var resultado = new Resultado();
            resultado.Ok = true;
            resultado.Return = ListaCoordenadas;
            return resultado;
        }
        [HttpGet]
        [Route("Coordenadas/GetConPunto")]
        public ActionResult<Resultado> GetConPunto()
        {
            Random random = new Random();
            int indice = random.Next(0,6);
            var resultado = new Resultado();
            resultado.Ok = true;
            resultado.Return = ListaCoordenadas[indice];
            return resultado;
        }
        
    }
}
