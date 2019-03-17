<template>
  <section class="mb-5 font-thin w-full">
    <div class="flex justify-between items-center mb-5">
      <h2 class="font-thin">Examples</h2>

      <buttonToggle before="Show map" after="Hide map" icon="fas fa-globe-africa" @click.native="showMapWithExamples()"></buttonToggle>
    </div>

    <GmapMap
      :center="{lat:20, lng:-30}"
      :zoom="2"
      :options="mapOptions"
      class="w-full mb-5 h-64"
      v-if="isMapExamples"
    >
      <GmapMarker
        v-for="(example, index) in examples"
        :position="{lat: example.to.lat, lng: example.to.lng}"
        :clickable="true"
        :draggable="false"
        @click="toogleInfoWindow(example, index)"
      />
      <GmapInfoWindow
        :opened="infoWindow.isOpened"
        :options="infoWindow.options"
        :position="infoWindow.position"
        @closeclick="infoWindow.isOpened = false"
        class="relative"
      >
        <div v-if="infoWindow.hasImage">
          <div class="spinner pin" v-if="isSpinner" style="top: 0px; width: 100px; height: 100px;"></div>
          <img :src="infoWindow.content" v-if="!isSpinner" style="width: 100px; height: 100px;">         
        </div>

        <div v-if="!infoWindow.hasImage">
          <span class="fa-stack fa-2x text-grey" style="font-size: 2rem">
            <i class="fas fa-camera fa-stack-1x"></i>
            <i class="fas fa-ban fa-stack-2x"></i>
          </span>
        </div>
      </GmapInfoWindow>
    </GmapMap>
    
    <Example
      v-for="example in examples"
      :id="example.id"
      :from="example.from"
      :to="example.to"
      :url="example.image"
      @click.native="selectExample(example)"
    />
  </section>
</template>

<script>
  import Example from './Example';
  import examples from '../examples.json';
  import geo from '../utils/functions';
  import axios from 'axios';

  export default {
    name: 'Examples',

    components: { Example },

    data() {
      return {
        examples: examples,
        isSelected: false,
        isMapExamples: false,
        isSpinner: false,
        mapOptions: {
          disableDefaultUI: true
        },
        infoWindow: {
          options: {
            pixelOffset: {
              width: 0,
              height: -26,
            },
          },
          position: null,
          isOpened: false,
          content: '',
          hasImage: false
        }
      }
    },

    components: {
      Example
    },

    methods: {
      selectExample(example) {
        var distance = geo.getDistanceFromTwoPoints(example.from.lat, example.from.lng, example.to.lat, example.to.lng).toFixed(2);

        Event.$emit('dataFromExmaple', {
          distance: distance,
          from: {
            description: example.from.description, 
            place: example.from.place,
            height: example.from.height,
            lat: example.from.lat,
            lng: example.from.lng
          },
          to: {
            description: example.to.description, 
            place: example.to.place,
            height: example.to.height,
            lat: example.to.lat,
            lng: example.to.lng
          },
        });

        this.$children.forEach((item) => {
          if (item.id == example.id) {
            item.isSelected = true;
            // item.isMap = true;
          }

          if (item.id != example.id) {
            item.isSelected = false;
            item.isMap = true;
            item.isImage = false;
          }
        })
      },

      showMapWithExamples() {
        this.isMapExamples = !this.isMapExamples;
      },

      toogleInfoWindow(example) {
        this.infoWindow.isOpened = false;

        this.infoWindow.position = {
          lat: example.to.lat, 
          lng: example.to.lng
        };

        if (example.image != '') {
          this.infoWindow.hasImage = true;
          this.isSpinner = true;

          axios.get('https://api.instagram.com/oembed?url=' + example.image)
            .then(response => {
              this.infoWindow.content = response.data.thumbnail_url;
              this.isSpinner = false;
            });
        } else {
          this.infoWindow.hasImage = false;
        }

        this.infoWindow.isOpened = true;
      }
    },

    beforeCreate: function () {
      this.$options.components.Instagram = require('./Instagram.vue').default
    },
  }
</script>