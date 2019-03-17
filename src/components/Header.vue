<template>
  <header class="p-5 relative w-full">
    <span class="fa-stack absolute pin-r" @click="showInfo()">
      <i class="far fa-circle fa-stack-2x"></i>
      <i class="fas fa-info fa-stack-1x"></i>
    </span>

    <div class="flex justify-center mb-10">
      <i class="fas fa-globe-africa" style="font-size: 150px"></i>
    </div>
    
    <h1 class="mb-10 text-3xl text-center font-thin">Behind The Curve</h1>

    

    <modal name="info" @before-open="beforeOpen">
      <div class="p-5 h-24">
        <h3 class="mb-5 font-bold">Info:</h3>

        <ul class="list-reset">
          <li>- Earth radius: 6371000 meters.</li>
        </ul>
        
        <!-- <earthDraw class="w-full"></earthDraw> -->
      </div>  
    </modal>
  </header>
</template>

<script>
// import earthDraw from '../assets/earth-curvature.svg'; // TODO

export default {
  name: 'Header',

  components: {

  },

  methods: {
    showInfo () {
      this.$modal.show('info', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => { alert('Woot!') }
          },
          {
            title: '',       // Button title
            default: true,    // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
       ]
      });
    },

    beforeOpen (event) {
      console.log(event.params.foo);
    }
  }
}
</script>
