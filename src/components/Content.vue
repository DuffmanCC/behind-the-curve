<template>
  <section class="border p-5 mb-5 rounded font-thin max-w-sm w-full">
    <div class="mb-6">
      <label class="block mb-2 pr-4">
        Height of the observer in {{ meterOrFeet }}:
      </label>
      <input class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="number" v-model="observer">
      <p class="text-red text-sm" v-if="observer <= 0">Hight of the observer must be greater than 0.</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Horizon distance:</p>
      <p class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker">{{ horizonDistance | unitsKm(isMetric) }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Distance to object in {{ kmOrMiles }}:</p>
      <p class="text-sm italic mb-2">
        Enter a distance in {{ kmOrMiles }} or use the map <span class="font-normal cursor-pointer" @click="showMap()"><i class="fas fa-map-marked-alt ml-2 text-xl"></i></span>
      </p>

      <input class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" v-model="distanceToObject">
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Under horizon:</p>
      <p class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker">{{ underHorizon | unitsM(isMetric) }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <label class="block mb-2 pr-4">
        Height of the object you want to see in {{ meterOrFeet }}:
      </label>
      <input class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="number" v-model="heightObject">
      <p class="text-red text-sm" v-if="heightObject < 0">Hight of the building must be greater than 0.</p>
    </div>

    <div class="mb-6" v-if="observer > 0 && heightObject > 0">
      <label class="block mb-2 pr-4" for="inline-full-name">
        The top of the object is {{ isVisible() }}:
      </label>
      <p class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker">{{ buildingVisible | unitsM(isMetric) }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Content',

  props: ['distanceFromMap', 'isMetric'],

  data() {
    return {
      initialObserver: 30, // m
      initialObserverImperial: 98.4252, // m
      earthRadius: 6371000,
      initialHeightObject: 100,
      initialHeightObjectImperial: 328.084,
      initialDistance: 30,
      initialDistanceImperial: 18.6411
    }
  },

  filters: {
    unitsKm(data, isMetric ) {
      if (isMetric) {
        return new Intl.NumberFormat('latn', { style: 'decimal', maximumFractionDigits: 2 }).format(data) + ' km';
      }

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
      return new Intl.NumberFormat('latn', { style: 'decimal', maximumFractionDigits: 2 }).format(data * 0.621371) + ' miles';
    },

    unitsM(data, isMetric) {
      if (isMetric) {
        return new Intl.NumberFormat('latn', { maximumFractionDigits: 2 }).format(data) + ' m';
      }
      
      return new Intl.NumberFormat('latn', { maximumFractionDigits: 2 }).format(data * 3.28084) + ' feet';
    }
  },

  computed: {
    horizonDistance() {
      var observer = '';

      if (!this.isMetric) {
        observer = this.observer * 0.3048;
      } else {
        observer = this.observer;
      }

      let distance = Math.sqrt( Math.pow(observer, 2) + (2 * this.earthRadius * observer));
      return distance;
    },

    underHorizon() {
      var distanceToObject = '';

      if (!this.isMetric) {
        distanceToObject = this.distanceToObject * 1609.34;
      } else {
        distanceToObject = this.distanceToObject * 1000;
      }

      let diffDist = distanceToObject - this.horizonDistance;

      if ( diffDist > 0 ) {
        let underHorizon = ( (-2 * this.earthRadius) + Math.sqrt( Math.pow(2 * this.earthRadius, 2) + (4 * Math.pow(diffDist, 2)) ) )/ 2;
        return underHorizon;
      }
      
      return 0;
    },

    heightObject: {
      get() {
        if (!this.isMetric) {
          return this.initialHeightObjectImperial;
        }

        return this.initialHeightObject;
      },

      set(newValue) {
        if (!this.isMetric) {
          this.initialHeightObjectImperial = newValue;
        }

        this.initialHeightObject = newValue;
      }
    },

    observer: {
      get() {
        if (!this.isMetric) {
          return this.initialObserverImperial;
        }

        return this.initialObserver;
      },

      set(newValue) {
        if (!this.isMetric) {
          this.initialObserverImperial = newValue;
        }

        this.initialObserver = newValue;
      }
    },

    distanceToObject: {
      get() {
        if (!this.isMetric) {
          if (this.distanceFromMap != '') {
            return (this.distanceFromMap * 0.621371).toFixed(2);
          }

          return this.initialDistanceImperial;
        }

        if (this.distanceFromMap != '') {
          return this.distanceFromMap;
        }

        return this.initialDistance;
      },

      set(newValue) {
        if (!this.isMetric) {
          this.initialDistanceImperial = newValue;
        }

        this.initialDistance = newValue;
      }
    },

    buildingVisible() {
      if (!this.isMetric) {
        var heightObject = this.heightObject * 0.3048;
      } else {
        var heightObject = this.heightObject;
      }

      return heightObject - this.underHorizon;
    },

    meterOrFeet() {
      if (!this.isMetric) {
        return 'feet';
      } 

      return 'meters';
    },

    kmOrMiles() {
      if (!this.isMetric) {
        return 'miles';
      } 

      return 'km';
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
