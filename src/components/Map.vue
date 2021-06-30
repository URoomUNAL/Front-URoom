<template>
    <b-row style="height: 20rem;" class="p-0 m-0">
        <b-col>
            <l-map 
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 100%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
            class="rounded"
            v-on:click="addMarker"
            >
            <l-tile-layer
                :url="url"
                :attribution="attribution"
                
            />
            <l-marker
              v-for="room in rooms"
              :key="room.id"
              :lat-lng="[room.latitude, room.longitude]"
            >
              <l-popup>
                <b-img class="col-8 offset-2" :src="room.main_img"  v-bind="img" alt="Rounded image"></b-img>
                <p>{{room.description}}</p>
              </l-popup>
            </l-marker>
            
            <div v-if="location">
              <!--v-on:click="removeMarker"-->
              <l-marker v-if="filtro" :lat-lng="location">
                <l-icon
                  :icon-url="require('../assets/images/icons/redMarker.png')"
                />
              </l-marker>
              <l-marker v-if="page" :lat-lng="location"> </l-marker>
            <div v-if="radius>0">
                <l-circle
                :lat-lng="location"
                :radius="circle.rad*1000"
                :color='circle.color'
                :fillOpacity="circle.opacity"
                :fillColor="circle.fillColor"
                />
            </div>
            </div>
            
            <div v-if="roomLocation">
              <l-marker :lat-lng="roomLocation">
              </l-marker>
            </div>
            </l-map>
        </b-col>
        
    </b-row>
</template>

<script>

import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LIcon, LCircle} from "vue2-leaflet";
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;

export default {
  name: "Map",
  props: ["markers","height","page", "filtro","radius","roomLocation"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
    LCircle
  },
  data() {
    return {
      img: { width: 100, height: 75, class: "m1" },
      zoom: 12,
      center: latLng(4.652732219293169, -74.09408522039406),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(4.652732219293169, -74.09408522039406),
      withTooltip: latLng(4.656732219293169, -74.09408522039406),
      currentZoom: 11.5,
      currentCenter: latLng(4.652732219293169, -74.09408522039406),
      mapOptions: {
        zoomSnap: 0.5,
        doubleClickZoom: false
      },
      showMap: true,
      rooms: this.markers,
      location:'',
      clicks: 0,
      iconSize: [32, 37],
      iconAnchor: [16, 37],
      circle: {
        rad: this.radius,
        color: '#7A16A5',
        opacity: 0.1,
        fillColor: '#7A16A5'
      }
    };
  },
  created() {
    if(this.roomLocation){
      this.center = this.roomLocation
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    removeMarker() {
      this.location = ''
    },
    addMarker(event) {
      this.clicks+=1
      if(this.page && this.clicks==2){
        this.location = [event.latlng.lat,event.latlng.lng];
        this.clicks = 0
        this.$emit("clicked", this.location)
      }
      
      if(this.filtro == false){
        this.location = ''
        this.$emit("clicked", this.location)
      }
      if(this.filtro && this.clicks%2==0){
        this.location = [event.latlng.lat,event.latlng.lng];
        this.clicks = 0
        this.$emit("clicked", this.location)
      }
      console.log(this.radius)
    }
  },
  watch: { 
      markers: function(newVal) { // watch it
          this.markers = newVal;
          this.rooms = this.markers;
      },
      radius: function(newVal) { // watch it
          this.circle.rad = newVal
      },
  }
};
Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/images/icons/marker.png'),
  iconUrl: require('../assets/images/icons/marker.png'),
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
.leaflet-container {
  cursor: crosshair;
}
</style>