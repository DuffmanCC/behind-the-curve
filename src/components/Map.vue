<template>
  <div class="max-w-xl m-auto relative">
    <GmapMap
      :center="{lat:0, lng:0}"
      :zoom="3"
      class="w-full"
      style="height: 500px"
      @click="setMarker"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @drag="updateMarker"
        @dragstart="setFirstMaker"
        @dragend="sendDistanceInMap()"
      />
      <GmapPolyline 
        v-if="line.length > 1" 
        :path="line" 
        :editable="false">
      </GmapPolyline>
    </GmapMap>
    <div class="relative p-1 text-white bg-black opacity-75 flex items-center justify-between w-full">
      <button @click="$modal.hide('map')" class="ml-1">
        <i class="fas fa-times text-xl text-white"></i>
      </button> 
      <div v-if="isDistanceSet()" class="text-xl font-thin">Distance: {{ distanceBetweenMarkers }} km</div>
    </div>   
  </div>
</template>

<script>
  import { toRad, getDistanceFromTwoPoints } from '../utils/functions';

  export default {
    name: 'Gmap',

    data() {
      return {
        markers: [],
        isFirstMarker: '',
      }
    },

    computed: {
      distanceBetweenMarkers() {
        let distance = getDistanceFromTwoPoints(this.markers[0].position.lat, this.markers[0].position.lng, this.markers[1].position.lat, this.markers[1].position.lng).toFixed(2);
        Event.$emit('distanceFromMap', distance);

        return distance;
      }, 

      line() {
        let line = [];

        this.markers.forEach((marker) => {
          line.push({lat: marker.position.lat, lng: marker.position.lng})
        })

        return line;  
      }
    },

    methods: {
      setMarker(e) {
        if (this.markers.length < 2) {
          this.markers.push({ 
            position: {
              lat:e.latLng.lat(), 
              lng:e.latLng.lng()
            } 
          });
        }
      },

      setFirstMaker(e) {
        if (e.latLng.lat() === this.markers[0].position.lat) {
          this.isFirstMarker = true;
        } else {
          this.isFirstMarker = false;
        }
      },

      updateMarker(e) {
        if (this.isFirstMarker) {
          this.markers[0].position = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }
        } else {
          this.markers[1].position = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          }        
        }
      },

      isDistanceSet(){
        if (this.markers.length === 2) {
          return true;
        }

        return false;
      },

      sendDistanceInMap() {
        Event.$emit('distanceFromMap', this.distanceBetweenMarkers);
      }
    }
  }
</script>