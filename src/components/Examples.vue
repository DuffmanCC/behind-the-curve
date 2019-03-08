<template>
  <section class="border p-5 mb-5 rounded font-thin max-w-sm w-full">
    <h2 class="mb-5">Examples</h2>
    
    <Example
      v-for="example in examples"
      :distance="example.distance"
      :from="example.from"
      :to="example.to"
      :url="example.image"
    />
  </section>
</template>

<script>
  import Example from './Example';

  export default {
    name: 'Examples',

    data() {
      return {
        examples: {
          example_1: {
            distance: 225,
            from: {
              description: 'Pico de la Musara', 
              place: 'Tarragona - Spain',
              height: 1500,
              lat: 41.10,
              lng: 0.87
            },
            to: {
              description: 'Sierra de Tramuntana',
              place: 'Mallorca - Spain',
              height: 1000,
              lat: 39.70,
              lng: 2.65
            },
            image: 'https://www.instagram.com/p/BurUOp0BWII/',
          },
          example_2: {
            distance: 64,
            from: {
              description: 'Pico de la Musara', 
              place: 'Tarragona - Spain',
              height: 1500,
              lat: 41.10,
              lng: 0.87
            },
            to: {
              description: 'Sierra de Tramuntana',
              place: 'Mallorca - Spain',
              height: 1500,
              lat: 39.70,
              lng: 2.65
            },
            image: 'https://www.instagram.com/p/BurUOp0BWII/',
          }
        }
      }
    },

    components: {
      Example
    },

    methods: {

    }
  }
</script>