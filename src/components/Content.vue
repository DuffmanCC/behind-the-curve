<template>
  <section class="border p-5 mb-5 rounded font-thin max-w-sm w-full">
    <div class="mb-6">
      <pCheck class="p-switch p-fill pretty" color="primary" toggle v-model="isMetric">
        metric
        <label slot="off-label">imperial</label>
      </pCheck>
    </div>

    <div class="mb-6">
      <label class="block mb-2 pr-4">
        Height of the observer (m):
      </label>
      <input class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="number" v-model="observer">
      <p class="text-red text-sm" v-if="observer <= 0">Hight of the observer must be greater than 0.</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Horizon distance:</p>
      <p class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker">{{ calcHorizonDistance | unitsKm(isMetric) }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Distance to object (km):</p>
      <p class="text-sm italic mb-2">
        Enter a distance in Km or use the map <span class="font-normal cursor-pointer" @click="showMap()"><i class="fas fa-map-marked-alt ml-2 text-xl"></i></span>
      </p>

      <input class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" v-model="distance">
    </div>

    <div class="mb-6" v-if="observer > 0">
      <p class="mb-2 pr-4">Under horizon:</p>
      <p class="bg-blue-lightest appearance-none border-2 border-blue-lightest rounded w-full py-2 px-4 text-blue-darker">{{ underHorizon | unitsM(isMetric) }}</p>
    </div>

    <div class="mb-6" v-if="observer > 0">
      <label class="block mb-2 pr-4">
        Height of the object you want to see (m):
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

  props: ['distance'],

  data() {
    return {
      observer: '30', // m
      earthRadius: '6371000',
      horizonDistance: '',
      isMetric: true,
      initialHeightObject: 100,
      initialHeightObjectImperial: 328.084,
    }
  },

  filters: {
    unitsKm(data, isMetric ) {
      if (isMetric) {
        return data.toFixed(2) + ' km';
      }
      
      return (data * 0.621371).toFixed(2) + ' miles';
    },

    unitsM(data, isMetric) {
      if (isMetric) {
        return data.toFixed(2) + ' m';
      }
      
      return (data * 3.28084).toFixed(2) + ' feet';
    }
  },

  computed: {
    calcHorizonDistance() {
      let distance = Math.sqrt( Math.pow(this.observer, 2) + (2 * this.earthRadius * this.observer));
      this.horizonDistance = distance;
      return distance;
    },

    underHorizon() {
      let diffDist = this.distance * 1000 - this.horizonDistance;

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
          this.initialHeightObject * 3.28084;
        }

        this.initialHeightObject = newValue;
      }
    },

    buildingVisible() {
      return this.heightObject - this.underHorizon;
    },
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
