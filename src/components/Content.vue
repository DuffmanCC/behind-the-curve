<template>
  <section class="mb-5 font-thin w-full">
    <div class="mb-16">
      <p>Enter the height of the observer, the distance to the object and the height of the object or use the examples below to feed the inputs.</p>
    </div>

    <div class="mb-6">
      <label class="block mb-2 pr-4">
        Height of the observer in meters:
      </label>
      <input class="input" type="number" v-model="observer">
      <p class="text-red text-sm" v-if="observer <= 0">Hight of the observer must be greater than 0.</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Horizon distance:</p>
      <p class="input">{{ horizonDistance | km }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Distance to object in Km:</p>
      <p class="text-sm italic mb-2">
        Enter a distance in km or use the map
          
        <button class="btn" @click="showMap()">
          <span class="fa-stack">
            <i class="fas fa-square fa-stack-2x"></i>
            <i class="fas fa-map-marked-alt fa-stack-1x fa-inverse"></i>
          </span>         
        </button>
      </p>

      <input class="input" v-model="distanceToObject">
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Under horizon:</p>
      <p class="input">{{ underHorizon | m }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <label class="block mb-2 pr-4">
        Height of the object you want to see in meters:
      </label>
      <input class="input" type="number" v-model="heightObject">
      <p class="text-red text-sm" v-if="heightObject < 0">Hight of the building must be greater than 0.</p>
    </div>

    <div class="mb-6" v-if="observer > 0 && heightObject > 0">
      <label class="block mb-2 pr-4" for="inline-full-name">
        The top of the object is {{ isVisible() }}:
      </label>
      <p class="input">{{ buildingVisible | m }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',

  props: ['distanceFromMap', 'heightFromExampleObserver', 'heightFromExampleObject', 'isFromExample'],

  data() {
    return {
      initialObserver: 30,
      earthRadius: 6371000,
      initialHeightObject: 100,
      initialDistance: 30,
    }
  },

  filters: {
    km(data) {
      return data.toFixed(2) + ' km';
    },

    m(data) {
      return data.toFixed(2) + ' m';
    },   
  },

  computed: {
    horizonDistance() {
      let distance = Math.sqrt( Math.pow(this.observer, 2) + (2 * this.earthRadius * this.observer));

      return distance;
    },

    underHorizon() {
      let distanceToObject = this.distanceToObject * 1000;

      let diffDist = distanceToObject - this.horizonDistance;

      if ( diffDist > 0 ) {
        let underHorizon = ( (-2 * this.earthRadius) + Math.sqrt( Math.pow(2 * this.earthRadius, 2) + (4 * Math.pow(diffDist, 2)) ) )/ 2;
        return underHorizon;
      }
      
      return 0;
    },

    heightObject: {
      get() {
        if (this.isFromExample) {
          return this.heightFromExampleObject;
        }

        return this.initialHeightObject;
      },

      set(newValue) {
        this.initialHeightObject = newValue;
      }
    },

    observer: {
      get() {
        if (this.isFromExample) {
          return this.heightFromExampleObserver;
        }

        return this.initialObserver;
      },

      set(newValue) {
        this.initialObserver = newValue;
      }
    },

    distanceToObject: {
      get() {
        if (this.distanceFromMap != '') {
          return this.distanceFromMap;
        }

        return this.initialDistance;
      },

      set(newValue) {
        this.initialDistance = newValue;
      }
    },

    buildingVisible() {
      return this.heightObject - this.underHorizon;
    }
  },

  methods: {
    isVisible() {
      if (this.buildingVisible >= 0) {
        return 'visible';
      }
      
      return 'under the horizon';
    },

    metrosToKms(m) {
      let num = m / 1000;
      return num.toFixed(3);
    },

    showMap() {
      this.$modal.show('map');
    }
  }
}
</script>
