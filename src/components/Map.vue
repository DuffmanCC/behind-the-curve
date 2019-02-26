<template>
  <div class="w-full lg:w-1/2">
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
    </GmapMap>
    <p v-if="isDistanceSet()" class="absolute pin-b pin-l pl-20 pb-12 text-2xl text-grey-darker">Distance: {{ distanceBetweenMarkers }} km</p>
  </div>
</template>

<script>
  export default {
    name: 'Gmap',

    data() {
      return {
        markers: [],
        isFirstMaker: ''
      }
    },

    computed: {
      distanceBetweenMarkers() {
        let distance = this.getDistance(this.markers[0].position, this.markers[1].position);
        Event.$emit('distanceFromMap', distance);
        return distance;
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
          this.isFirstMaker = true;
        } else {
          this.isFirstMaker = false;
        }
      },

      updateMarker(e) {
        if (this.isFirstMaker) {
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

      rad(x) {
        return x * Math.PI / 180;
      },

      getDistance(p1, p2) {
        let R = 6371000; // Average radius
        let dLat = this.rad(p2.lat - p1.lat);
        let dLong = this.rad(p2.lng - p1.lng);
        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
          Math.sin(dLong / 2) * Math.sin(dLong / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c;
        let distance = (d / 1000).toFixed(2); // returns the distance in km
        return distance;
      },

      sendDistanceInMap() {
        Event.$emit('distanceFromMap', this.getDistance(this.markers[0].position, this.markers[1].position));
      }
    }
  }
</script>