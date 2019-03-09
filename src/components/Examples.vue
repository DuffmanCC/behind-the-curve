<template>
  <section class="mb-5 font-thin w-full">
    <h2 class="mb-5 font-thin">Examples</h2>
    
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
  import { getDistanceFromTwoPoints } from '../utils/functions';

  export default {
    name: 'Examples',

    data() {
      return {
        examples: examples,
        isSelected: false
      }
    },

    components: {
      Example
    },

    methods: {
      selectExample(example) {
        var distance = getDistanceFromTwoPoints(example.from.lat, example.from.lng, example.to.lat, example.to.lng).toFixed(2);

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
      }
    },
  }
</script>