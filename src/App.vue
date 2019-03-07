<template>
  <div id="app">
    <div class="h-screen w-screen">
      <div class="container text-blue flex flex-col items-center">
        <Header></Header>

        <div class="mb-6">
          <pCheck class="p-switch p-fill pretty" color="primary" toggle v-model="isMetric">
            metric system
            <label slot="off-label">imperial system</label>
          </pCheck>
        </div>

        <Content :distanceFromMap="distanceFromMap" :isMetric="isMetric"></Content>

        <Examples></Examples>

        <Paint></Paint>
      </div><!-- .container -->
    </div>

    <modal name="info" class="w-full">
      <div class="p-5">
        <h3 class="mb-5">Info:</h3>

        <ul class="list-reset">
          <li>Earth radius: 6371000 meters.</li>
          <li>1 mile = 1609.34 km.</li>
          <li>1 foot = 0.3048 meters.</li>
        </ul>      
      </div>   
    </modal>

    <modal name="map" width="100%" height="auto" classes="p-5 relative">
      <Gmap style="height: auto" :isMetric="isMetric"></Gmap>
    </modal>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Gmap from './components/Map'
import Examples from './components/Examples'
import Paint from './components/Paint'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

export default {
  name: 'app',

  components: {
    Header, Content, Gmap, Paint, Examples
  },

  data() {
    return {
      distanceFromMap: '',
      distanceFromExample: '',
      isMetric: true
    }
  },

  created() {
    // global events
    Event.$on('distanceFromMap', distanceFromMap => this.distanceFromMap = distanceFromMap);
    Event.$on('dataFromExmaple', (dataFromExmaple) => console.log(dataFromExmaple));
  },

  methods: {

  }
}
</script>
