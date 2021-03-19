import L from 'leaflet';
import icon from '../../assets/logo.svg';
import './IconCapital.css';

const iconSize = 26;

const IconCapital = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: [iconSize, iconSize],
  iconAnchor: [iconSize / 2, iconSize],
  popupAnchor: [0, -iconSize],
  className: 'icon-capital',
});

export default IconCapital;
