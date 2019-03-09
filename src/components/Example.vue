<template>
  <div class="p-5 border rounded mb-5 cursor-pointer" :class="{ 'bg-grey-lighter transition-duration-300': isSelected }">
    <Instagram :url="url" v-if="isImage" class="mb-5 block"></Instagram>

    <GmapMap
      :center="midPoint"
      :zoom="8"
      class="w-full mb-5 aspect-ratio-square"
      v-if="isMap && isSelected"
    >
      <GmapMarker
        :position="{lat: from.lat, lng: from.lng}"
        :clickable="true"
        :draggable="false"
      />
      <GmapMarker
        :position="{lat: to.lat, lng: to.lng}"
        :clickable="true"
        :draggable="false"
      />
      <GmapPolyline 
        v-if="line.length > 0" 
        :path="line" 
        :editable="false">
      </GmapPolyline>
    </GmapMap>

    <div class="flex justify-between mb-3">
      <span>Distance: {{ distance }} km</span>
      <div class="text-xl">
        <i class="fas fa-map-marked-alt ml-2 mr-2" @click="showMap()"></i>
        <i class="fas fa-camera-retro" @click="showImage()"></i>
      </div>
    </div>

    <div class="flex justify-between items-center mb-3">
      <div>
        <div>{{ from.description }}</div>
        <div>{{ from.place }}</div>       
      </div>

      <div>
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="text-right">
        <div>{{ to.description }}</div> 
        <div>{{ to.place }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Instagram from './Instagram';
  import { middlePoint, getDistanceFromTwoPoints } from '../utils/functions';

  export default {
    name: 'Exmaple',

    components: { Instagram },

    props: ['id', 'from', 'to', 'url'],

    data() {
      return {
        isImage: false,
        isMap: true,
        isSelected: false
      }
    },

    computed: {
      midPoint() {
        return middlePoint(this.from.lat, this.from.lng, this.to.lat, this.to.lng)
      },

      distance() {
        return getDistanceFromTwoPoints(this.from.lat, this.from.lng, this.to.lat, this.to.lng).toFixed(2);
      },

      line() {
        return [
          {lat: this.from.lat, lng: this.from.lng},
          {lat: this.to.lat, lng: this.to.lng},
        ]
      },

      // TO DO
      // zoom() {
      //   return 100 / this.distance * 7;
      // }

    },

    methods: {
      showImage() {
        this.isImage = !this.isImage;
        this.isMap = false;
      },

      showMap() {
        this.isMap = !this.isMap;
        this.isImage = false;
      }
    }
  }
</script>