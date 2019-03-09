<template>
  <div id="app">
    <div class="container text-blue flex flex-col items-center max-w-lg">
      <Header></Header>

      <Content 
        :distanceFromMap="distanceFromMap" 
        :heightFromExampleObserver="heightFromExampleObserver"
        :heightFromExampleObject="heightFromExampleObject"
        :isFromExample="isFromExample"
        >
      </Content>

      <Examples></Examples>

      <Footer></Footer>
    </div><!-- .container -->

    <modal name="info" class="w-full">
      <div class="p-5">
        <h3 class="mb-5">Info:</h3>

        <ul class="list-reset">
          <li>We use units of the metric system</li>
          <li>Earth radius: 6371000 meters.</li>
        </ul>      
      </div>   
    </modal>

    <modal name="map" width="100%" height="auto" classes="p-5 relative">
      <Gmap style="height: auto"></Gmap>
    </modal>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'
import Gmap from './components/Map'
import Examples from './components/Examples'
import Paint from './components/Paint'
import Footer from './components/Footer'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

export default {
  name: 'app',

  components: {
    Header, Content, Gmap, Paint, Examples, Footer
  },

  data() {
    return {
      distanceFromMap: '',
      heightFromExampleObserver: '',
      heightFromExampleObject: '',
      isFromExample: false,
      exampleSelectedId: ''
    }
  },

  created() {
    // global events
    Event.$on('distanceFromMap', distanceFromMap => this.distanceFromMap = distanceFromMap);
    Event.$on('dataFromExmaple', dataFromExmaple => {
      this.distanceFromMap = dataFromExmaple.distance;
      this.heightFromExampleObserver = dataFromExmaple.from.height;
      this.heightFromExampleObject = dataFromExmaple.to.height;
      this.isFromExample = true;
      this.exampleSelectedId = dataFromExmaple.id;
    });
  },

  methods: {

  }
}
</script>
