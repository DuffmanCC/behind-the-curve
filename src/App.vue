<template>
  <div id="app">
    <div class="container text-blue-darker flex flex-col items-center max-w-md font-sans">
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
import Footer from './components/Footer'
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

export default {
  name: 'app',

  components: {
    Header, Content, Gmap, Examples, Footer
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
  }
}
</script>
