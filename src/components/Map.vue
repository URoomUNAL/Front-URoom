<template>
    <b-row  style="height: 500px" >
        <b-col style='width:100%' offset = '2' sm='8' md='8' lg='8'>
            <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 80%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
            class="rounded"
            >
            <l-tile-layer
                :url="url"
                :attribution="attribution"
            />
            <l-marker
              v-for="marker in markers"
              :key="marker.id"
              :lat-lng="[marker.latitude, marker.longitude]"
            >
              <l-popup>
                <b-img class="col-8 offset-2" :src="marker.main_img"  v-bind="img" alt="Rounded image"></b-img>
                <p>{{marker.description}}</p>
              </l-popup>
            </l-marker>
            <l-marker :lat-lng="withPopup">
                <l-popup>
                <div>
                    I am a room
                </div>
                </l-popup>
            </l-marker>
            <!-- <l-marker :lat-lng="withTooltip">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                
                </l-tooltip>
            </l-marker> --> 
            </l-map>
        </b-col>
    </b-row>
</template>

<script>
import LocalService from '../services/local-services.js'
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup} from "vue2-leaflet";
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;

export default {
  name: "MapURoom",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      img: { width: 100, height: 75, class: 'm1' },
      zoom: 13,
      center: latLng(4.652732219293169, -74.09408522039406),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(4.652732219293169, -74.09408522039406),
      withTooltip: latLng(4.656732219293169, -74.09408522039406),
      currentZoom: 11.5,
      currentCenter: latLng(4.652732219293169, -74.09408522039406),
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      markers: ''
    };
  },
  created() {
    this.getTodos()
    // axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
    //   this.result = result.data;
    // })
  },
  methods: {
    async getTodos() {
      this.markers = await LocalService.getMaps()
      console.log(this.markers)
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    
  }
};
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
</script>
<style>
/* css to customize Leaflet default styles  */
.leaflet-popup-tip,
.leaflet-popup-content-wrapper {
    background: #525050;
    font-family: 'Jost';
    color: white
}
</style>