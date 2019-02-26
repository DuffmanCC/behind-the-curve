<template>
  <div id="app">
    <div class="h-screen w-screen">
      <div class="container text-blue flex flex-col items-center">
        <Header></Header>

        <Content :distance="distance"></Content>

        <Examples></Examples>

        <Paint></Paint>
      </div><!-- .container -->
    </div>

    <modal name="info" width="100%">
      <div class="p-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt minus voluptate eos molestiae nisi at facere modi, dolores obcaecati? Sapiente ex ullam corporis voluptatibus fugit debitis, error harum. At impedit, quisquam error amet quibusdam, temporibus. Sit odio repellat voluptatem vel facilis consectetur expedita inventore incidunt, optio natus, nesciunt praesentium officiis rem saepe sed ipsa corrupti, quidem aut ipsum porro ex adipisci velit suscipit voluptatum! Velit ullam quasi quas itaque, consequuntur, asperiores nobis reprehenderit ut voluptate totam quos eum alias quisquam delectus aut ex inventore beatae ratione cupiditate dolores! Repudiandae assumenda deleniti at ab vero error ut, eos animi vel facere.
      </div>   
    </modal>

    <modal name="map" width="100%" height="auto" classes="p-5 relative">
      <Gmap style="height: auto"></Gmap>
      <button @click="$modal.hide('map')" class="absolute pin-l pin-b p-12">
        <i class="fas fa-times text-3xl text-grey-darker"></i>
      </button> 
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
      distance: '30'
    }
  },

  created() {
    // global events
    Event.$on('distanceFromMap', distanceFromMap => this.distance = distanceFromMap);
  },

  methods: {

  }
}
</script>
