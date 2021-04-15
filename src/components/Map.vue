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
            <l-marker :lat-lng="withPopup">
                <l-popup>
                <div @click="innerClick">
                    I am a popup
                    <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                    Donec finibus semper metus id malesuada.
                    </p>
                </div>
                </l-popup>
            </l-marker>
            <l-marker :lat-lng="withTooltip">
                <l-tooltip :options="{ permanent: true, interactive: true }">
                
                </l-tooltip>
            </l-marker>
            </l-map>
        </b-col>
    </b-row>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;

export default {
  name: "MapURoom",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      zoom: 13,
      center: latLng(4.652732219293169, -74.09408522039406),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(4.652732219293169, -74.09408522039406),
      withTooltip: latLng(4.656732219293169, -74.09408522039406),
      currentZoom: 11.5,
      currentCenter: latLng(4.652732219293169, -74.09408522039406),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
};
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
</script>