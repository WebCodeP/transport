
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Routing from './Routing';

const Map = () => {
return (
  <div className='w-screen h-screen'>
    <MapContainer   style={{ height: "100%", width: "100%" }}  center={[34.7325,36.7367]} zoom={14} zoomControl={false} >
      {/* <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" attribution="Esri"/>
      <Routing showUI = {false}/>
    </MapContainer>
</div>
 );
}


export default Map;