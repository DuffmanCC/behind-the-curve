<template>
  <section class="mb-5 font-thin w-full">
    <div class="flex justify-between items-center mb-5">
      <h2 class="font-thin">Examples</h2>

      <button class="btn" @click="showMapWithExamples()">
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x"></i>
          <i class="fas fa-globe-africa fa-stack-1x fa-inverse"></i>
        </span>
      </button>
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
      >
        <img :src="infoWindow.content" style="width: 100px; height: 100px;">
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

  export default {
    components: {
      Example
    },

    data() {
      return {
        examples: examples,
        isSelected: false,
        isMapExamples: false,
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
          content: ''
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

        this.infoWindow.content = example.imageSrc;

        this.infoWindow.isOpened = true;
      }
    },

    beforeCreate: function () {
      this.$options.components.Instagram = require('./Instagram.vue').default
    },
  }
</script>