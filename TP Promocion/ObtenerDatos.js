function cargarCoordenadas(){
    $.ajax({
      url: "https://nhorenstein.com/Coordenada/GetConPunto",
      type: "GET", //tipo de verbo
      

      success: function(result) {
        if(result.ok){
          
          //redireccion a otra pagina.
          swal({ 
            title: "Resultado de la busqueda",
            text: "Su busqueda se ha realizado con exito!",
            icon: "success"
          });
          obtenerCoordenadas(result.return);
          
          agregarMarkerToMap(result.return);
          setTimeout(() => {
            window.location.replace("./index.html#mapa");
          }, 4000);

        }
        else{
          swal({ 
            title: "Resultado de la busqueda",
            text: "Ha ocurrido un error!",
            icon: "error"
          });
          getDeafultLocation();
        }
      },
      error: function(error) {
        swal({ 
          title: "Resultado de la busqueda",
          text: "Ha ocurrido un error!",
          icon: "error"
        });
        getDeafultLocation();
        
      }
    });
  }
  
  function obtenerCoordenadas(datos){
    var latitud = datos.latitud;
    var longitud = datos.longitud;
    document.getElementsByName("latitud")[0].placeholder = latitud;
    document.getElementsByName("longitud")[0].placeholder = longitud;
  }
  //-31.4428, -64.1940
  function moveMapToUTN(map) {
    map.setCenter({lat:-31.4428, lng:-64.1940});
    map.setZoom(15);
  }
  var platform = new H.service.Platform({
      apikey: `NKBy18nXyEjjEqmItiqUlr8J-coXLKMhlzJ-HKnDd1E` // replace with your api key
  });
  var defaultLayers = platform.createDefaultLayers();

  //Step 2: initialize a map - this map is centered over Europe
  var map = new H.Map(document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 10,
      pixelRatio: window.devicePixelRatio || 1
  });
  // add a resize listener to make sure that the map occupies the whole container
  window.addEventListener('resize', () => map.getViewPort().resize());

  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);
  // Now use the map as required...
  window.onload = function () {
    moveMapToUTN(map);
    getDeafultLocation();
  }
  //-31.4428, -64.1940
  function getDeafultLocation(){
    var lat=-31.4428;
    var lng=-64.1940;
    addMarkerToMap(lat, lng);
  };
  const agregarMarkerToMap = (datos) => {
    var lat = datos.latitud;
    var lng = datos.longitud;
   map.removeObjects(map.getObjects())
   
   var selectedLocationMarker = new H.map.Marker({ lat, lng });
   map.addObject(selectedLocationMarker);
   
   map.setCenter({ lat, lng }, true);
 };
 const addMarkerToMap = (lat, lng) => {
  map.removeObjects(map.getObjects())
  
  var selectedLocationMarker = new H.map.Marker({ lat, lng });
  map.addObject(selectedLocationMarker);
  
  map.setCenter({ lat, lng }, true);
};  
