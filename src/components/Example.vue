<template>
  <div class="p-5 border rounded mb-5 cursor-pointer" :class="{ 'bg-grey-lighter': isSelected }" @click="selectExmaple()">
    <Instagram :url="url" v-if="isImage" class="mb-5 block"></Instagram>

    <GmapMap
      :center="midPoint"
      :zoom="7"
      class="w-full mb-5"
      style="height: 396px"
      v-if="isMap"
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

  export default {
    name: 'Exmaple',

    components: { Instagram },

    props: ['distance', 'from', 'to', 'url'],

    data() {
      return {
        isSelected: false,
        isImage: false,
        isMap: false
      }
    },

    computed: {
      midPoint() {
        const φ1 = this.from.lat * Math.PI / 180, λ1 = this.from.lng * Math.PI / 180;
        const φ2 = this.to.lat * Math.PI / 180;
        const Δλ = (this.to.lng - this.from.lng) * Math.PI / 180;

        const Bx = Math.cos(φ2) * Math.cos(Δλ);
        const By = Math.cos(φ2) * Math.sin(Δλ);

        const x = Math.sqrt((Math.cos(φ1) + Bx) * (Math.cos(φ1) + Bx) + By * By);
        const y = Math.sin(φ1) + Math.sin(φ2);
        const φ3 = Math.atan2(y, x);

        const λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);

        const lat = φ3 * 180 / Math.PI;
        const lng = λ3 * 180 / Math.PI;

        return {
          lat: lat,
          lng: lng
        }
      }
    },

    methods: {
      selectExmaple() {
        this.isSelected = !this.isSelected;

        if (this.isSelected) {
          Event.$emit('dataFromExmaple', {
            distance: this.distance,
            from: {
              description: this.from.description, 
              place: this.from.place,
              height: this.from.height,
              lat: this.from.lat,
              lng: this.from.lng
            },
            to: {
              description: this.to.description, 
              place: this.to.place,
              height: 1500,
              lat: 454,
              lng: 435
            },
          });
        }
      },

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