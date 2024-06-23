import { useEffect} from 'react' 
import L from "leaflet"; 
import {useMap} from "react-leaflet";
import "leaflet-routing-machine"; 
import "leaflet-routing-machine/dist/leaflet-routing-machine.css" 
import 'leaflet-control-geocoder/dist/Control.Geocoder';


const  Routing = () => { 
const map = useMap();
//const [PathPoints , SetPathPoint] = useState([]);
const routingControl =L.Routing.control({ 
    
waypoints: [ 
L.latLng(34.732486, 36.736813) ,
L.latLng(34.720408, 36.737016) ,
L.latLng(34.709733, 36.721760) ,
L.latLng(34.706808, 36.714499) ,
L.latLng(34.708434 ,36.712642) ,
L.latLng(34.709298 ,36.712613) ,
], 
routeWhileDragging:false, 
addWaypoints:false, 
geocoder:L.Control.Geocoder.nominatim(1), 
lineOptions: { styles: [{color: '#0284c7', opacity :4 , weight: 4}]  },
show:false,
createMarker: () => null
}); 


useEffect(()=>{ 
routingControl.addTo(map); 
return () => {
    map.removeControl(routingControl);
  };
},[map , routingControl]); 

return null 
} 
export default Routing;